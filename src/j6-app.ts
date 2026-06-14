import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

// Assume presetsData is imported from your static clean JSON file
import { presetsData as rawPresetsData } from './presets-data.js';
import './j6-preset-list.js';
import './j6-preset-detail.js';

// Utility helpers for deriving producer-friendly tags
const tagMatchers: Array<[RegExp, string[]]> = [
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

function addTag(tags: Set<string>, value: string | string[]) {
  if (Array.isArray(value)) {
    value.forEach(v => v && tags.add(v));
  } else if (value) {
    tags.add(value);
  }
}

function inferTags(p: any) {
  const tags = new Set<string>();
  const note = p.notesDescription || '';
  const lowerName = (p.soundNameCategory || '').toLowerCase();
  const lowerNote = note.toLowerCase();

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

    // Add any other useful parenthetical tags, like "Ambient Swell" or "Vintage tape warble feel".
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
    if (regex.test(p.soundNameCategory)) addTag(tags, tag);
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

// Map raw data to standard property names expected by the app components
const presetsData = rawPresetsData.map((p: any) => {
  return {
    ...p,
    id: p.bankPatch,
    name: p.soundNameCategory,
    notes: p.notesDescription || '',
    delayEffects: p.delayReverb,
    tags: inferTags(p)
  };
});

@customElement('j6-app')
export class J6App extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: system-ui, sans-serif;
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem;
      color: #e0e0e0;
      background-color: #121212;
    }
    .layout {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    header {
      margin-bottom: 1rem;
    }
    .filter-drawer-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.75rem 1rem;
      background: #1e1e1e;
      cursor: pointer;
      border: 1px solid #333;
      border-radius: 8px;
      font-weight: bold;
      margin-top: 1rem;
    }
    .filter-drawer-header.open {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
    }
    .filter-drawer-header:hover {
      background: #2a2a2a;
    }
    .filter-drawer-content {
      display: none;
      background: #1e1e1e;
      border: 1px solid #333;
      border-top: none;
      border-radius: 0 0 8px 8px;
      padding: 1rem;
      align-items: flex-end;
    }
    .filter-drawer-content.open {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .toggle-icon {
      color: #ff5500;
      font-size: 0.8rem;
    }
    @media (min-width: 768px) {
      .layout {
        grid-template-columns: 400px 1fr;
      }
    }
  `;

  @state() private searchQuery = '';
  @state() private activeGenreMood = 'All';
  @state() private activeInstrumentType = 'All';
  @state() private activeCharacter = 'All';
  @state() private activeEnvelope = 'All';
  @state() private activeEffects = 'All';
  @state() private activeWaveform = 'All';
  @state() private selectedPreset = presetsData[0]; // Default to 1-1
  @state() private filtersOpen = false;

  get filteredPresets() {
    const q = this.searchQuery.trim().toLowerCase();
    return presetsData.filter(preset => {
      const hay = [preset.name, preset.notes, preset.waveformOscType, preset.bankPatch, preset.filterFreq, preset.delayEffects, (preset.tags || []).join(' ')]
        .filter(Boolean)
        .join(' ').toLowerCase();

      const matchesSearch = q === '' || hay.includes(q);
      const matchesGenreMood = this.activeGenreMood === 'All' || (preset.tags || []).some((t: string) => t.toLowerCase() === this.activeGenreMood.toLowerCase());
      const matchesInstrumentType = this.activeInstrumentType === 'All' || (preset.tags || []).some((t: string) => t.toLowerCase() === this.activeInstrumentType.toLowerCase());
      const matchesCharacter = this.activeCharacter === 'All' || (preset.tags || []).some((t: string) => t.toLowerCase() === this.activeCharacter.toLowerCase());
      const matchesEnvelope = this.activeEnvelope === 'All' || (preset.tags || []).some((t: string) => t.toLowerCase() === this.activeEnvelope.toLowerCase());
      const matchesEffects = this.activeEffects === 'All' || (preset.tags || []).some((t: string) => t.toLowerCase() === this.activeEffects.toLowerCase());
      const matchesWaveform = this.activeWaveform === 'All' || (preset.tags || []).some((t: string) => t.toLowerCase() === this.activeWaveform.toLowerCase());

      return matchesSearch && matchesGenreMood && matchesInstrumentType && matchesCharacter && matchesEnvelope && matchesEffects && matchesWaveform;
    });
  }

  private getTagCategory(tag: string) {
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

  private renderCategorySelect(category: string, tags: string[], selectedValue: string, field: string) {
    return html`
      <label style="display:flex;flex-direction:column;gap:4px;">
        <span style="font-size:0.8rem;color:#aaa;">${category}</span>
        <select
          @change=${(e: Event) => { (this as any)[field] = (e.target as HTMLSelectElement).value; }}
          style="padding:8px;border-radius:6px;border:1px solid #333;background:#141414;color:#e0e0e0;min-width:180px;"
        >
          <option value="All">All</option>
          ${tags.map(tag => html`<option value=${tag} ?selected=${selectedValue === tag}>${tag}</option>`) }
        </select>
      </label>
    `;
  }

  render() {
    // build tag options from data
    const tagSet = new Set<string>();
    presetsData.forEach(p => (p.tags || []).forEach((t: string) => tagSet.add(t)));
    const groupedTags = new Map<string, string[]>();
    Array.from(tagSet).sort((a, b) => a.localeCompare(b)).forEach(tag => {
      const category = this.getTagCategory(tag);
      const list = groupedTags.get(category) ?? [];
      list.push(tag);
      groupedTags.set(category, list);
    });

    const categories = Array.from(groupedTags.entries());

    return html`
      <header>
        <h1>Roland J-6 Preset Explorer</h1>
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:8px;">
          <input
            placeholder="Search by name, notes, waveform, etc..."
            .value=${this.searchQuery}
            @input=${(e: InputEvent) => { this.searchQuery = (e.target as HTMLInputElement).value; }}
            style="flex:1;min-width:240px;padding:8px;border-radius:6px;border:1px solid #333;background:#141414;color:#e0e0e0;"
          />
        </div>

        <div class="filter-drawer-header ${this.filtersOpen ? 'open' : ''}" @click=${() => this.filtersOpen = !this.filtersOpen}>
          <div>
            <span style="color:#ff5500;">☰</span> <span>Filters</span>
          </div>
          <div class="toggle-icon">${this.filtersOpen ? '▲' : '▼'}</div>
        </div>
        <div class="filter-drawer-content ${this.filtersOpen ? 'open' : ''}">
          ${this.renderCategorySelect('Genre / Mood', groupedTags.get('Genre / Mood') || [], this.activeGenreMood, 'activeGenreMood')}
          ${this.renderCategorySelect('Instrument / Type', groupedTags.get('Instrument / Type') || [], this.activeInstrumentType, 'activeInstrumentType')}
          ${this.renderCategorySelect('Character', groupedTags.get('Character') || [], this.activeCharacter, 'activeCharacter')}
          ${this.renderCategorySelect('Envelope', groupedTags.get('Envelope') || [], this.activeEnvelope, 'activeEnvelope')}
          ${this.renderCategorySelect('Effects', groupedTags.get('Effects') || [], this.activeEffects, 'activeEffects')}
          ${this.renderCategorySelect('Waveform', groupedTags.get('Waveform') || [], this.activeWaveform, 'activeWaveform')}
        </div>
      </header>

      <div class="layout">
        <j6-preset-list 
          .presets=${this.filteredPresets}
          .selectedId=${this.selectedPreset.id}
          @preset-selected=${(e: CustomEvent) => this.selectedPreset = e.detail}>
        </j6-preset-list>

        <j6-preset-detail 
          .preset=${this.selectedPreset}>
        </j6-preset-detail>
      </div>
    `;
  }
}