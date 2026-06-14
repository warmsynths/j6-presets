import { RawPreset } from './types.js';

/**
 * Regular expressions and corresponding tags for mapping producer/style keywords.
 */
export const tagMatchers: Array<[RegExp, string[]]> = [
  [/deadmau5/i, ['Progressive House', 'EDM']],
  [/avicii/i, ['Melodic EDM', 'Pop']],
  [/chiptune/i, ['Chiptune', 'Retro']],
  [/lo[- ]?fi/i, ['Lo-Fi']],
  [/house/i, ['House']],
  [/trance/i, ['Trance']],
  [/dance/i, ['Dance']],
  [/ambient/i, ['Ambient']],
  [/juno/i, ['Vintage', 'Analog']],
  [/303/i, ['Acid', 'Bassline']],
  [/bass/i, ['Bass']],
  [/brass/i, ['Brass']],
  [/organ/i, ['Organ']],
  [/strings/i, ['Strings']],
  [/piano/i, ['Piano']],
  [/pad/i, ['Pad']],
  [/lead/i, ['Lead']],
  [/pluck/i, ['Pluck']],
  [/synth/i, ['Synth']],
  [/noise/i, ['Noise']],
  [/bell/i, ['Bell']],
  [/vintage/i, ['Vintage']],
  [/metallic/i, ['Metallic']],
  [/dark/i, ['Dark']],
  [/bright/i, ['Bright']],
  [/soft/i, ['Soft']],
  [/aggressive/i, ['Aggressive']],
  [/hyper pop/i, ['Hyperpop']],
  [/rock/i, ['Rock']],
  [/house music/i, ['House']],
  [/deep house/i, ['Deep House']],
  [/hip hop/i, ['Hip Hop']],
  [/rnb/i, ['R&B']],
  [/sci-fi/i, ['Sci-Fi']],
  [/industrial/i, ['Industrial']],
  [/noise style/i, ['Noise']],
  [/soundtrack/i, ['Soundtrack']],
];

/**
 * Helper to safely add string(s) to a Set of tags.
 *
 * @param tags - Set of tags to add to
 * @param value - Value or array of values to add
 */
export function addTag(tags: Set<string>, value: string | string[]): void {
  if (Array.isArray(value)) {
    value.forEach(v => v && tags.add(v));
  } else if (value) {
    tags.add(value);
  }
}

/**
 * Infers search and filter tags for a given raw preset.
 * Matches keywords against description notes and oscillator/envelope characteristics.
 *
 * @param p - The raw preset from the spreadsheet
 * @returns Array of inferred tag strings
 */
export function inferTags(p: Partial<RawPreset>): string[] {
  const tags = new Set<string>();
  const note = p.notesDescription || '';
  const lowerName = (p.soundNameCategory || '').toLowerCase();

  // Extract explicit parenthetical cues from the notes
  const re = /\(([^)]+)\)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(note)) !== null) {
    const extracted = m[1].trim();
    if (!extracted) continue;

    // Skip raw "Good for ..." phrases; those are better handled by keyword tagging.
    if (/^good for\s+/i.test(extracted)) {
      continue;
    }

    addTag(tags, extracted);
  }

  // Keyword-based tags from name and note text
  tagMatchers.forEach(([regex, outcome]) => {
    if (regex.test(note) || regex.test(lowerName)) {
      addTag(tags, outcome);
    }
  });

  // Instrument/character tags from the sound name
  const nameKeywords: Array<[RegExp, string]> = [
    [/pad/i, 'Pad'],
    [/lead/i, 'Lead'],
    [/bass/i, 'Bass'],
    [/keys/i, 'Keys'],
    [/organ/i, 'Organ'],
    [/piano/i, 'Piano'],
    [/pluck/i, 'Pluck'],
    [/brass/i, 'Brass'],
    [/strings/i, 'Strings'],
    [/bell/i, 'Bell'],
    [/whistle/i, 'Whistle'],
    [/clav/i, 'Clav'],
    [/synth/i, 'Synth'],
  ];
  nameKeywords.forEach(([regex, tag]) => {
    if (p.soundNameCategory && regex.test(p.soundNameCategory)) addTag(tags, tag);
  });

  // Waveform flavor
  const waveform = (p.waveformOscType || '').toLowerCase();
  if (waveform.includes('saw')) addTag(tags, 'Saw');
  if (waveform.includes('square')) addTag(tags, 'Square');
  if (waveform.includes('sub')) addTag(tags, 'Sub');
  if (waveform.includes('noise')) addTag(tags, 'Noise');
  if (waveform.includes('triangle')) addTag(tags, 'Triangle');
  if (waveform.includes('sync')) addTag(tags, 'Sync');
  if (waveform.includes('pwm')) addTag(tags, 'PWM');
  if (waveform.includes('cross-mod') || waveform.includes('cross mod')) addTag(tags, 'Cross-Mod');

  // Brightness/texture from filter + resonance
  if (p.filterFreq === 'High') addTag(tags, 'Bright');
  if (p.filterFreq === 'Low') addTag(tags, 'Dark');
  if (p.resonance === 'High') addTag(tags, 'Resonant');
  if (p.resonance === 'Low') addTag(tags, 'Smooth');

  // Attack/release envelope tags
  if (p.attack === 'Fast') addTag(tags, 'Sharp Attack');
  if (p.attack === 'Slow') addTag(tags, 'Slow Attack');
  if (p.release === 'Slow') addTag(tags, 'Long Release');
  if (p.release === 'Fast') addTag(tags, 'Snappy Release');
  if (p.sustain === 'Max') addTag(tags, 'Sustained');

  // Effects and mood
  if (p.chorus && p.chorus !== 'Off') addTag(tags, p.chorus);
  if (p.delayReverb && p.delayReverb !== 'Off') addTag(tags, p.delayReverb);

  return Array.from(tags);
}

/**
 * Returns the filter/UI group category name for a given tag.
 * Used to construct dropdown selection filters.
 *
 * @param tag - Tag to classify
 * @returns Classification category string ('Genre / Mood', 'Instrument / Type', etc.)
 */
export function getTagCategory(tag: string): string {
  const normalized = tag.toLowerCase();
  if (/^(progressive house|edm|melodic edm|pop|chiptune|retro|lo-fi|house|trance|dance|ambient|acid|bassline|hip hop|r&b|sci-fi|industrial|soundtrack|hyperpop|rock|vintage|analog)$/.test(normalized)) {
    return 'Genre / Mood';
  }
  if (/^(pad|lead|bass|keys|organ|piano|pluck|brass|strings|bell|whistle|clav|synth)$/.test(normalized)) {
    return 'Instrument / Type';
  }
  if (/^(bright|dark|soft|aggressive|metallic|noise|smooth|resonant|sustained)$/.test(normalized)) {
    return 'Character';
  }
  if (/^(sharp attack|slow attack|long release|snappy release)$/.test(normalized)) {
    return 'Envelope';
  }
  if (/^(chorus|reverb|delay|chorus \d|reverb \d|delay \d)$/.test(normalized)) {
    return 'Effects';
  }
  if (/^(saw|square|sub|triangle|sync|pwm|cross-mod)$/.test(normalized)) {
    return 'Waveform';
  }
  return 'Other';
}
