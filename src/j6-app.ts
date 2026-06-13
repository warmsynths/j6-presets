import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

// Assume presetsData is imported from your static clean JSON file
import { presetsData as rawPresetsData } from './presets-data.js';
import './j6-preset-list.js';
import './j6-preset-detail.js';

// Map raw data to standard property names expected by the app components
const presetsData = rawPresetsData.map((p: any) => {
  // extract parenthetical tags like "(Good for Deadmau5)" into simple tags
  const tags: string[] = [];
  const note = p.notesDescription || '';
  const re = /\(([^)]+)\)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(note)) !== null) {
    tags.push(m[1].trim());
  }

  return {
    ...p,
    id: p.bankPatch,
    name: p.soundNameCategory,
    notes: note,
    delayEffects: p.delayReverb,
    tags
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
    @media (min-width: 768px) {
      .layout {
        grid-template-columns: 400px 1fr;
      }
    }
  `;

  @state() private searchQuery = '';
  @state() private activeTag = 'All';
  @state() private selectedPreset = presetsData[0]; // Default to 1-1

  get filteredPresets() {
    const q = this.searchQuery.trim().toLowerCase();
    return presetsData.filter(preset => {
      // Combine relevant fields to search across
      const hay = [preset.name, preset.notes, preset.waveformOscType, preset.bankPatch, preset.filterFreq, preset.delayEffects]
        .filter(Boolean)
        .join(' ').toLowerCase();

      const matchesSearch = q === '' || hay.includes(q);
      const matchesTag = this.activeTag === 'All' || (preset.tags || []).some((t: string) => t.toLowerCase() === this.activeTag.toLowerCase());
      return matchesSearch && matchesTag;
    });
  }

  render() {
    // build tag options from data
    const tagSet = new Set<string>();
    presetsData.forEach(p => (p.tags || []).forEach((t: string) => tagSet.add(t)));
    const tags = ['All', ...Array.from(tagSet)];

    return html`
      <header>
        <h1>Roland J-6 Preset Explorer</h1>
        <div style="display:flex;gap:8px;margin-top:8px;align-items:center;">
          <input
            placeholder="Search by name, notes, waveform, etc..."
            .value=${this.searchQuery}
            @input=${(e: InputEvent) => { this.searchQuery = (e.target as HTMLInputElement).value; }}
            style="flex:1;padding:8px;border-radius:6px;border:1px solid #333;background:#141414;color:#e0e0e0;"
          />
          <select @change=${(e: Event) => { this.activeTag = (e.target as HTMLSelectElement).value; }}
            style="padding:8px;border-radius:6px;border:1px solid #333;background:#141414;color:#e0e0e0;">
            ${tags.map(t => html`<option value=${t}>${t}</option>`)}
          </select>
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