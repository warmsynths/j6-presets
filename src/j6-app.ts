import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { presetsData as rawPresetsData } from './presets-data.js';
import { inferTags, getTagCategory } from './utils.js';
import { RawPreset, Preset } from './types.js';
import './j6-preset-list.js';
import './j6-preset-detail.js';

/**
 * Mapped list of presets, parsed to conform to the {@link Preset} interface,
 * with standard IDs, names, and tags inferred.
 */
const presetsData: Preset[] = (rawPresetsData as RawPreset[]).map((p: RawPreset) => {
  return {
    ...p,
    id: p.bankPatch,
    name: p.soundNameCategory,
    notes: p.notesDescription || '',
    delayEffects: p.delayReverb,
    tags: inferTags(p)
  };
});

/**
 * Main application component for the Roland J-6 Preset Explorer.
 * Orchestrates preset list selection, metadata filtering, and detail display.
 */
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
    .attribution {
      font-size: 0.85rem;
      color: #999;
      margin-top: 0.35rem;
      line-height: 1.4;
    }
    .attribution a {
      color: #ff9500;
      text-decoration: none;
    }
    .attribution a:hover {
      text-decoration: underline;
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
    .clear-filters-btn {
      padding: 8px 16px;
      border: 1px solid #333;
      border-radius: 6px;
      background: #2a2a2a;
      color: #e0e0e0;
      font-size: 0.9rem;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.2s ease;
      height: 38px;
      box-sizing: border-box;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .clear-filters-btn:hover:not(:disabled) {
      background: #ff5500;
      border-color: #ff5500;
      color: #fff;
      box-shadow: 0 0 8px rgba(255, 85, 0, 0.4);
    }
    .clear-filters-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      border-color: #222;
      background: #181818;
      color: #666;
    }
    footer {
      margin-top: 3rem;
      padding: 1.5rem 0;
      border-top: 1px solid #222;
      text-align: center;
      font-size: 0.85rem;
      color: #777;
    }
    footer a {
      color: #ff5500;
      text-decoration: none;
      transition: color 0.2s ease;
    }
    footer a:hover {
      color: #ff7733;
      text-decoration: underline;
    }
  `;

  /** The current search query typed in the search bar. */
  @state() private searchQuery: string = '';

  /** Currently selected filter for Genre / Mood. */
  @state() private activeGenreMood: string = 'All';

  /** Currently selected filter for Instrument / Type. */
  @state() private activeInstrumentType: string = 'All';

  /** Currently selected filter for Character. */
  @state() private activeCharacter: string = 'All';

  /** Currently selected filter for Envelope behavior. */
  @state() private activeEnvelope: string = 'All';

  /** Currently selected filter for Effects. */
  @state() private activeEffects: string = 'All';

  /** Currently selected filter for Waveform. */
  @state() private activeWaveform: string = 'All';

  /** The preset object currently highlighted in the detail view. */
  @state() private selectedPreset: Preset = presetsData[0];

  /** Whether the filter options drawer is open. */
  @state() private filtersOpen: boolean = false;

  private get hasActiveFilters() {
    return this.searchQuery !== '' ||
      this.activeGenreMood !== 'All' ||
      this.activeInstrumentType !== 'All' ||
      this.activeCharacter !== 'All' ||
      this.activeEnvelope !== 'All' ||
      this.activeEffects !== 'All' ||
      this.activeWaveform !== 'All';
  }

  private clearFilters() {
    this.searchQuery = '';
    this.activeGenreMood = 'All';
    this.activeInstrumentType = 'All';
    this.activeCharacter = 'All';
    this.activeEnvelope = 'All';
    this.activeEffects = 'All';
    this.activeWaveform = 'All';
  }

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

  // Removed local getTagCategory method in favor of utility import

  private renderCategorySelect(category: string, tags: string[], selectedValue: string, field: string) {
    return html`
      <label style="display:flex;flex-direction:column;gap:4px;">
        <span style="font-size:0.8rem;color:#aaa;">${category}</span>
        <select
          .value=${selectedValue}
          @change=${(e: Event) => { (this as any)[field] = (e.target as HTMLSelectElement).value; }}
          style="padding:8px;border-radius:6px;border:1px solid #333;background:#141414;color:#e0e0e0;min-width:180px;"
        >
          <option value="All" ?selected=${selectedValue === 'All'}>All</option>
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
      const category = getTagCategory(tag);
      const list = groupedTags.get(category) ?? [];
      list.push(tag);
      groupedTags.set(category, list);
    });

    const categories = Array.from(groupedTags.entries());

    return html`
      <header>
        <h1>Roland J-6 Preset Explorer</h1>
        <div class="attribution">
          Based on Nick Standing's Roland J-6 compilation spreadsheet and video. <a href="https://www.youtube.com/watch?v=z6hoNwWadR8" target="_blank" rel="noreferrer">Watch the source video</a>.
        </div>
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
          <button
            class="clear-filters-btn"
            ?disabled=${!this.hasActiveFilters}
            @click=${this.clearFilters}
          >
            Clear Filters
          </button>
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

      <footer>
        <p>
          Built by <a href="https://github.com/warmsynths" target="_blank" rel="noopener noreferrer">Warm Synths</a>.
          Want to contribute? Find us on <a href="https://github.com/warmsynths/j6-presets" target="_blank" rel="noopener noreferrer">GitHub</a>.
        </p>
      </footer>
    `;
  }
}