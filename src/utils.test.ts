import { describe, it, expect } from 'vitest';
import { addTag, inferTags, getTagCategory } from './utils.js';
import { RawPreset } from './types.js';

describe('addTag', () => {
  it('should add a single tag to the set', () => {
    const tags = new Set<string>();
    addTag(tags, 'Bass');
    expect(tags.has('Bass')).toBe(true);
    expect(tags.size).toBe(1);
  });

  it('should add multiple tags from an array to the set', () => {
    const tags = new Set<string>();
    addTag(tags, ['Lead', 'Bright']);
    expect(tags.has('Lead')).toBe(true);
    expect(tags.has('Bright')).toBe(true);
    expect(tags.size).toBe(2);
  });

  it('should skip empty or falsy values', () => {
    const tags = new Set<string>();
    addTag(tags, '');
    addTag(tags, [undefined as any, 'Saw', null as any]);
    expect(tags.has('Saw')).toBe(true);
    expect(tags.size).toBe(1);
  });
});

describe('inferTags', () => {
  it('should extract parenthetical notes except "good for" phrases', () => {
    const preset: Partial<RawPreset> = {
      notesDescription: 'Heavy Pluck (Ambient Swell) (good for pop) (Vintage tape feel)',
      soundNameCategory: 'Pluck'
    };
    const tags = inferTags(preset);
    expect(tags).toContain('Ambient Swell');
    expect(tags).toContain('Vintage tape feel');
    expect(tags).not.toContain('good for pop');
  });

  it('should match keywords from tagMatchers in notes and name', () => {
    const preset: Partial<RawPreset> = {
      notesDescription: 'Inspired by deadmau5 progressive vibe',
      soundNameCategory: 'Synth pluck'
    };
    const tags = inferTags(preset);
    expect(tags).toContain('Progressive House');
    expect(tags).toContain('EDM');
  });

  it('should infer instrument tags from soundNameCategory', () => {
    const preset: Partial<RawPreset> = {
      soundNameCategory: 'Classic Juno Pad Synth'
    };
    const tags = inferTags(preset);
    expect(tags).toContain('Pad');
    expect(tags).toContain('Synth');
  });

  it('should infer waveform tags from waveformOscType', () => {
    const preset: Partial<RawPreset> = {
      waveformOscType: 'Saw + Square + Sub 50% + PWM'
    };
    const tags = inferTags(preset);
    expect(tags).toContain('Saw');
    expect(tags).toContain('Square');
    expect(tags).toContain('Sub');
    expect(tags).toContain('PWM');
  });

  it('should infer cutoff and resonance character tags', () => {
    const preset: Partial<RawPreset> = {
      filterFreq: 'Low',
      resonance: 'High'
    };
    const tags = inferTags(preset);
    expect(tags).toContain('Dark');
    expect(tags).toContain('Resonant');
  });

  it('should infer envelope behavior tags', () => {
    const preset: Partial<RawPreset> = {
      attack: 'Slow',
      release: 'Slow',
      sustain: 'Max'
    };
    const tags = inferTags(preset);
    expect(tags).toContain('Slow Attack');
    expect(tags).toContain('Long Release');
    expect(tags).toContain('Sustained');
  });

  it('should infer active chorus and delay/reverb effects', () => {
    const preset: Partial<RawPreset> = {
      chorus: 'II',
      delayReverb: 'Delay 2'
    };
    const tags = inferTags(preset);
    expect(tags).toContain('II');
    expect(tags).toContain('Delay 2');
  });
});

describe('getTagCategory', () => {
  it('should categorize Genre / Mood tags', () => {
    expect(getTagCategory('lo-fi')).toBe('Genre / Mood');
    expect(getTagCategory('Progressive House')).toBe('Genre / Mood');
    expect(getTagCategory('EDM')).toBe('Genre / Mood');
  });

  it('should categorize Instrument / Type tags', () => {
    expect(getTagCategory('pad')).toBe('Instrument / Type');
    expect(getTagCategory('synth')).toBe('Instrument / Type');
    expect(getTagCategory('Lead')).toBe('Instrument / Type');
  });

  it('should categorize Character tags', () => {
    expect(getTagCategory('bright')).toBe('Character');
    expect(getTagCategory('resonant')).toBe('Character');
    expect(getTagCategory('Dark')).toBe('Character');
  });

  it('should categorize Envelope tags', () => {
    expect(getTagCategory('sharp attack')).toBe('Envelope');
    expect(getTagCategory('Slow Attack')).toBe('Envelope');
  });

  it('should categorize Effects tags', () => {
    expect(getTagCategory('chorus')).toBe('Effects');
    expect(getTagCategory('Delay 2')).toBe('Effects');
  });

  it('should categorize Waveform tags', () => {
    expect(getTagCategory('saw')).toBe('Waveform');
    expect(getTagCategory('PWM')).toBe('Waveform');
  });

  it('should categorize unknown tags as Other', () => {
    expect(getTagCategory('nonexistent-tag')).toBe('Other');
  });
});
