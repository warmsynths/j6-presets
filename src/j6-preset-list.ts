import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Preset } from './types.js';
import { getTagCategory } from './utils.js';

/**
 * A beautiful, retro-styled dropdown/overlay list of presets.
 * Appears when clicking on the Preset Name or Bank/Patch display.
 * Contains search input, filter drawer, and filtered counts.
 */
@customElement('j6-preset-list')
export class J6PresetList extends LitElement {
  @property({ type: Array }) presets: Preset[] = [];
  @property({ type: String }) selectedId = '';

  @state() private searchQuery: string = '';
  @state() private activeGenreMood: string = 'All';
  @state() private activeInstrumentType: string = 'All';
  @state() private activeCharacter: string = 'All';
  @state() private activeEnvelope: string = 'All';
  @state() private activeEffects: string = 'All';
  @state() private activeWaveform: string = 'All';
  @state() private filtersOpen = false;

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      background: #141416;
      border: 3px solid #3c3d42;
      border-radius: 8px;
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.85), inset 0 0 20px rgba(0, 0, 0, 0.6);
      overflow: hidden;
      max-height: 85vh;
      font-family: 'Inter', system-ui, sans-serif;
      color: #e2e2e4;
      z-index: 1000;
      width: 100%;
    }
    
    .list-header {
      background: #1c1d22;
      border-bottom: 2px solid #2e2f34;
      padding: 14px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    
    .header-top, .header-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
    }

    .preset-count {
      font-family: 'VT323', monospace;
      color: #ff5d00;
      font-size: 1.2rem;
      letter-spacing: 0.05em;
      background: #0c0c0d;
      padding: 2px 8px;
      border-radius: 4px;
      border: 1px solid #ff5d0033;
      box-shadow: 0 0 6px rgba(255, 93, 0, 0.15);
    }
    
    .led-search-screen {
      flex: 1;
      height: 34px;
      background-color: #120201;
      background-image: radial-gradient(rgba(255, 93, 0, 0.2) 1.5px, transparent 0);
      background-size: 4px 4px;
      border: 2px solid #09090b;
      box-shadow: inset 0 2px 8px rgba(0,0,0,0.98), 0 1px 1px rgba(255,255,255,0.05);
      border-radius: 3px;
      position: relative;
      display: flex;
      align-items: center;
      padding: 0 10px;
      box-sizing: border-box;
    }

    .led-search-input {
      width: 100%;
      background: transparent;
      border: none;
      color: #ff5d00;
      font-family: 'VT323', monospace;
      font-size: 1.7rem;
      letter-spacing: 0.05em;
      outline: none;
      text-transform: uppercase;
      text-shadow: 0 0 6px rgba(255, 93, 0, 0.8);
      padding: 0;
    }
    .led-search-input::placeholder { color: #ff5d0033; text-shadow: none; }
    
    .led-search-icon {
      position: absolute; right: 8px; top: calc(50% - 9px);
      width: 18px; height: 18px; fill: #ff5d00;
      filter: drop-shadow(0 0 4px rgba(255, 93, 0, 0.7)); pointer-events: none;
    }

    .retro-btn {
      background: linear-gradient(180deg, #3c3e44 0%, #202124 100%);
      border: 2px solid #5a5c62; color: #e2e2e4; font-size: 0.7rem; font-weight: bold;
      padding: 6px 12px; border-radius: 4px; cursor: pointer; text-transform: uppercase;
      height: 34px;
    }

    .retro-btn:hover { background: #4a4d54; }

    .patch-counts {
      font-size: 0.65rem;
      color: #8c8e94;
      font-weight: 800;
      text-align: right;
      text-transform: uppercase;
    }

    .filters-drawer {
      background: #18191e;
      border-bottom: 2px solid #2e2f34;
      padding: 14px;
    }
    
    .filter-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; }
    .filter-group { display: flex; flex-direction: column; gap: 4px; }
    .filter-group label { font-size: 0.7rem; font-weight: bold; color: #8c8e94; text-transform: uppercase; }
    .filter-select {
      background: #0c0c0e; border: 2px solid #2e3037; color: #e2e2e4;
      border-radius: 4px; padding: 6px; font-size: 0.8rem; outline: none;
    }
    .filters-footer {
      display: flex;
      justify-content: flex-end;
      margin-top: 14px;
    }

    .scroll-container {
      overflow-y: auto;
      flex: 1;
      min-height: 200px;
    }

    /* Custom Retro Scrollbar */
    .scroll-container::-webkit-scrollbar {
      width: 10px;
    }
    .scroll-container::-webkit-scrollbar-track {
      background: #0f0f11;
      border-left: 1px solid #232328;
    }
    .scroll-container::-webkit-scrollbar-thumb {
      background: #3a3b40;
      border-radius: 5px;
      border: 2px solid #0f0f11;
    }
    .scroll-container::-webkit-scrollbar-thumb:hover {
      background: #ff5d00;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    
    li {
      padding: 10px 14px;
      border-bottom: 1px solid #1f2024;
      cursor: pointer;
      display: grid;
      grid-template-columns: 50px 1fr;
      gap: 12px;
      align-items: center;
      transition: all 0.15s ease;
      font-size: 0.9rem;
    }
    
    li:hover {
      background: #24252b;
      color: #ffffff;
    }
    
    li.selected {
      background: rgba(255, 93, 0, 0.08);
      border-left: 4px solid #ff5d00;
      color: #ff7700;
    }
    
    .preset-id {
      font-family: 'VT323', monospace;
      font-size: 1.4rem;
      color: #ff5d00;
      text-shadow: 0 0 4px rgba(255, 93, 0, 0.2);
    }
    
    .preset-name {
      font-weight: 500;
    }

    .no-results {
      padding: 30px;
      text-align: center;
      color: #6a6b72;
      font-family: 'VT323', monospace;
      font-size: 1.5rem;
    }
  `;

  private clearFilters() {
    this.searchQuery = '';
    this.activeGenreMood = 'All';
    this.activeInstrumentType = 'All';
    this.activeCharacter = 'All';
    this.activeEnvelope = 'All';
    this.activeEffects = 'All';
    this.activeWaveform = 'All';
  }

  private get hasActiveFilters() {
    return this.searchQuery !== '' ||
      this.activeGenreMood !== 'All' ||
      this.activeInstrumentType !== 'All' ||
      this.activeCharacter !== 'All' ||
      this.activeEnvelope !== 'All' ||
      this.activeEffects !== 'All' ||
      this.activeWaveform !== 'All';
  }

  get filteredPresets() {
    const q = this.searchQuery.trim().toLowerCase();
    return this.presets.filter(preset => {
      const hay = [preset.name, preset.notes, preset.waveformOscType, preset.bankPatch, preset.filterFreq, preset.delayEffects, (preset.tags || []).join(' ')]
        .filter(Boolean)
        .join(' ').toLowerCase();

      const matchesSearch = q === '' || hay.includes(q);
      const matchesGenreMood = this.activeGenreMood === 'All' || (preset.tags || []).some(t => t.toLowerCase() === this.activeGenreMood.toLowerCase());
      const matchesInstrumentType = this.activeInstrumentType === 'All' || (preset.tags || []).some(t => t.toLowerCase() === this.activeInstrumentType.toLowerCase());
      const matchesCharacter = this.activeCharacter === 'All' || (preset.tags || []).some(t => t.toLowerCase() === this.activeCharacter.toLowerCase());
      const matchesEnvelope = this.activeEnvelope === 'All' || (preset.tags || []).some(t => t.toLowerCase() === this.activeEnvelope.toLowerCase());
      const matchesEffects = this.activeEffects === 'All' || (preset.tags || []).some(t => t.toLowerCase() === this.activeEffects.toLowerCase());
      const matchesWaveform = this.activeWaveform === 'All' || (preset.tags || []).some(t => t.toLowerCase() === this.activeWaveform.toLowerCase());

      return matchesSearch && matchesGenreMood && matchesInstrumentType && matchesCharacter && matchesEnvelope && matchesEffects && matchesWaveform;
    });
  }

  get groupedTags() {
    const tagSet = new Set<string>();
    this.presets.forEach(p => (p.tags || []).forEach(t => tagSet.add(t)));
    const grouped = new Map<string, string[]>();
    Array.from(tagSet).sort((a, b) => a.localeCompare(b)).forEach(tag => {
      const category = getTagCategory(tag);
      const list = grouped.get(category) ?? [];
      list.push(tag);
      grouped.set(category, list);
    });
    return grouped;
  }

  private renderCategorySelect(category: string, tags: string[], selectedValue: string, field: string) {
    return html`
      <div class="filter-group">
        <label>${category}</label>
        <select
          class="filter-select"
          .value=${selectedValue}
          @change=${(e: Event) => { (this as any)[field] = (e.target as HTMLSelectElement).value; }}
        >
          <option value="All">All</option>
          ${tags.map(tag => html`<option value=${tag} ?selected=${selectedValue === tag}>${tag}</option>`) }
        </select>
      </div>
    `;
  }

  render() {
    const filteredList = this.filteredPresets;
    const bassCount = filteredList.filter(pr => (pr.tags || []).some(t => t.toLowerCase() === 'bass')).length;
    const padCount = filteredList.filter(pr => (pr.tags || []).some(t => t.toLowerCase() === 'pad')).length;
    const leadCount = filteredList.filter(pr => (pr.tags || []).some(t => t.toLowerCase() === 'lead')).length;

    return html`
      <div class="list-header">
        <div class="header-top">
          <div class="led-search-screen">
            <input 
              class="led-search-input" 
              placeholder="SEARCH..."
              .value=${this.searchQuery}
              @input=${(e: InputEvent) => { this.searchQuery = (e.target as HTMLInputElement).value; }}
            />
            <svg class="led-search-icon" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </div>
          <button class="retro-btn" style="${this.filtersOpen ? 'background: #4a4d54;' : ''}" @click=${() => this.filtersOpen = !this.filtersOpen}>
            ${this.filtersOpen ? 'CLOSE FILTERS' : 'FILTERS'}
          </button>
        </div>
        
        <div class="header-bottom">
          <span class="preset-count">MATCH: ${filteredList.length}</span>
          <div class="patch-counts">
            FILTERED (BASS: ${bassCount}, PAD: ${padCount}, LEAD: ${leadCount})
          </div>
        </div>
      </div>
      
      ${this.filtersOpen ? html`
        <div class="filters-drawer">
          <div class="filter-grid">
            ${this.renderCategorySelect('Genre / Mood', this.groupedTags.get('Genre / Mood') || [], this.activeGenreMood, 'activeGenreMood')}
            ${this.renderCategorySelect('Instrument / Type', this.groupedTags.get('Instrument / Type') || [], this.activeInstrumentType, 'activeInstrumentType')}
            ${this.renderCategorySelect('Character', this.groupedTags.get('Character') || [], this.activeCharacter, 'activeCharacter')}
            ${this.renderCategorySelect('Envelope', this.groupedTags.get('Envelope') || [], this.activeEnvelope, 'activeEnvelope')}
            ${this.renderCategorySelect('Effects', this.groupedTags.get('Effects') || [], this.activeEffects, 'activeEffects')}
            ${this.renderCategorySelect('Waveform', this.groupedTags.get('Waveform') || [], this.activeWaveform, 'activeWaveform')}
          </div>
          <div class="filters-footer">
            <button class="retro-btn" @click=${this.clearFilters} ?disabled=${!this.hasActiveFilters}>CLEAR ALL</button>
          </div>
        </div>
      ` : ''}

      <div class="scroll-container">
        ${filteredList.length === 0 
          ? html`<div class="no-results">NO PRESETS FOUND</div>`
          : html`
            <ul>
              ${filteredList.map((preset) => {
                const id = preset.id || preset.bankPatch;
                const name = preset.name || preset.soundNameCategory;
                const isSelected = this.selectedId === id;
                
                return html`
                  <li 
                    class=${isSelected ? 'selected' : ''} 
                    @click=${() => {
                      this.dispatchEvent(new CustomEvent('preset-selected', { detail: preset }));
                    }}
                  >
                    <span class="preset-id">${id}</span>
                    <span class="preset-name">${name}</span>
                  </li>
                `;
              })}
            </ul>
          `
        }
      </div>
    `;
  }
}