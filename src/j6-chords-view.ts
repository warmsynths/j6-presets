import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import chordsDataRaw from '../data/chords.json';
import { ChordSet, ChordsData } from './types.js';

const chordsData = (chordsDataRaw as unknown) as ChordsData;

@customElement('j6-chords-view')
export class J6ChordsView extends LitElement {
  @state() private selectedSet: ChordSet = chordsData.sets[0];
  @state() private searchQuery: string = '';
  @state() private selectedGenre: string = 'All';
  @state() private selectedKey: string = 'All';

  private get uniqueGenres() {
    return Array.from(new Set(chordsData.sets.map(s => s.genre))).sort();
  }

  private get uniqueKeys() {
    return Array.from(new Set(chordsData.sets.map(s => s.analysis.bestKey))).sort();
  }

  private get filteredSets() {
    return chordsData.sets.filter(s => {
      if (this.selectedGenre !== 'All' && s.genre !== this.selectedGenre) return false;
      if (this.selectedKey !== 'All' && s.analysis.bestKey !== this.selectedKey) return false;
      if (this.searchQuery) {
        const q = this.searchQuery.toLowerCase();
        if (
          !s.genre.toLowerCase().includes(q) &&
          !s.analysis.bestKey.toLowerCase().includes(q) &&
          !s.number.toString().includes(q) &&
          !s.chords.some(c => c.toLowerCase().includes(q))
        ) {
          return false;
        }
      }
      return true;
    });
  }

  static styles = css`
    :host {
      display: block;
      color: var(--text-primary);
    }
    .synth-grid {
      display: grid;
      grid-template-columns: 1fr 1.25fr;
      gap: 12px;
    }
    .panel-card {
      background: transparent;
      border: 1px solid #2e3037;
      border-radius: 4px;
      box-sizing: border-box;
      position: relative;
    }
    .panel-header {
      padding: 6px 12px;
      font-size: 0.72rem;
      font-weight: 800;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: #ffffff;
    }
    .panel-header.red {
      background: #b52c24;
      border-bottom: 1.5px solid #ffa19922;
    }
    .panel-header.blue {
      background: #346d92;
      border-bottom: 1.5px solid #a8cce422;
    }
    .panel-content {
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .led-search-screen {
      height: 34px;
      background-color: var(--bg-input);
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
      color: var(--color-orange-primary);
      font-family: var(--font-mono);
      font-size: 1.2rem;
      letter-spacing: 0.05em;
      outline: none;
      text-transform: uppercase;
      text-shadow: 0 0 6px rgba(255, 93, 0, 0.8);
      padding: 0;
    }
    .led-search-input::placeholder { color: var(--color-orange-primary)33; text-shadow: none; }
    .filter-row {
      display: flex;
      gap: 8px;
    }
    .filter-select {
      flex: 1;
      background: #15161b;
      border: 2px solid #2e3037;
      color: #a4a5aa;
      font-family: var(--font-sans);
      font-size: 0.75rem;
      font-weight: 700;
      padding: 6px;
      border-radius: 3px;
      outline: none;
      text-transform: uppercase;
      cursor: pointer;
    }
    .sets-list {
      max-height: 400px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 6px;
      padding-right: 4px;
    }
    .sets-list::-webkit-scrollbar { width: 6px; }
    .sets-list::-webkit-scrollbar-track { background: #121316; }
    .sets-list::-webkit-scrollbar-thumb { background: #2e3037; border-radius: 3px; }
    .set-item {
      background: linear-gradient(180deg, #2b2d35 0%, #1c1d22 100%);
      border: 1px solid #3a3d45;
      border-radius: 4px;
      padding: 10px 12px;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: all 0.1s ease;
    }
    .set-item:hover { border-color: #555861; background: #27282f; }
    .set-item.selected {
      border-color: var(--color-orange-primary);
      background: #332015;
      box-shadow: inset 0 0 0 1px var(--color-orange-primary);
    }
    .set-item-title { font-weight: 800; font-size: 0.85rem; color: #fff; }
    .set-item-meta { font-size: 0.65rem; color: #a4a5aa; font-weight: 600; text-transform: uppercase; }
    
    .chords-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;
      padding-top: 8px;
    }
    .chord-key-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
    }
    .btn-key {
      width: 44px;
      height: 44px;
      border: 2px solid #101113;
      border-radius: 4px;
      box-shadow: 0 4px 0 #000000, 0 6px 10px rgba(0, 0, 0, 0.6);
      cursor: pointer;
      box-sizing: border-box;
      transition: transform 0.1s ease, box-shadow 0.1s ease;
      position: relative;
      background: #ebdcb9; /* cream by default */
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 900;
      color: #2b271d;
      font-size: 0.75rem;
    }
    .btn-key::after {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; height: 1px;
      background: rgba(255,255,255,0.25);
    }
    .btn-key:active {
      transform: translateY(3px);
      box-shadow: 0 1px 0 #000000, 0 2px 4px rgba(0, 0, 0, 0.5);
    }
    .chord-index { font-size: 0.55rem; color: #5d5f66; font-weight: 800; }
    
    .detail-info { margin-top: 16px; font-size: 0.75rem; color: #a4a5aa; line-height: 1.5; }
    .detail-info p { margin: 4px 0; }
    .tag {
      display: inline-block;
      background: #232429;
      border: 1px solid #33363e;
      border-radius: 2px;
      padding: 2px 6px;
      font-size: 0.65rem;
      margin-right: 4px;
      text-transform: uppercase;
      font-weight: bold;
    }
    
    @media (max-width: 768px) {
      .synth-grid { grid-template-columns: 1fr; }
      .chords-grid { grid-template-columns: repeat(3, 1fr); }
    }
  `;

  render() {
    return html`
      <div class="synth-grid">
        
        <!-- Left Column: Search & List -->
        <div class="panel-card">
          <div class="panel-header blue">Chord Sets Browser</div>
          <div class="panel-content">
            
            <div class="led-search-screen">
              <input 
                type="text" 
                class="led-search-input" 
                placeholder="SEARCH SETS..." 
                .value=${this.searchQuery}
                @input=${(e: Event) => this.searchQuery = (e.target as HTMLInputElement).value}
              />
            </div>

            <div class="filter-row">
              <select class="filter-select" @change=${(e: Event) => this.selectedGenre = (e.target as HTMLSelectElement).value}>
                <option value="All">All Genres</option>
                ${this.uniqueGenres.map(g => html`<option value=${g} ?selected=${this.selectedGenre === g}>${g}</option>`)}
              </select>
              <select class="filter-select" @change=${(e: Event) => this.selectedKey = (e.target as HTMLSelectElement).value}>
                <option value="All">All Keys</option>
                ${this.uniqueKeys.map(k => html`<option value=${k} ?selected=${this.selectedKey === k}>${k}</option>`)}
              </select>
            </div>

            <div class="sets-list">
              ${this.filteredSets.map(set => html`
                <div class="set-item ${this.selectedSet.number === set.number ? 'selected' : ''}" @click=${() => this.selectedSet = set}>
                  <div>
                    <div class="set-item-title">Set ${set.number}</div>
                    <div class="set-item-meta">${set.genre} &bull; ${set.analysis.bestKey}</div>
                  </div>
                </div>
              `)}
            </div>

          </div>
        </div>

        <!-- Right Column: Detail View -->
        <div class="panel-card">
          <div class="panel-header red">Set ${this.selectedSet.number} : ${this.selectedSet.genre}</div>
          <div class="panel-content">
            
            <div class="chords-grid">
              ${this.selectedSet.chords.map((chord, index) => html`
                <div class="chord-key-wrapper" title="Voicing: ${this.selectedSet.voicings[index]?.join(', ') || 'N/A'}">
                  <div class="chord-index">${index + 1}</div>
                  <button class="btn-key" @click=${() => this.handleChordClick(chord, this.selectedSet.voicings[index])}>
                    ${chord}
                  </button>
                </div>
              `)}
            </div>

            <div class="detail-info">
              <p><strong style="color:#fff;">Key:</strong> ${this.selectedSet.analysis.bestKey}</p>
              <p><strong style="color:#fff;">Progression:</strong> ${this.selectedSet.analysis.recommendedProgression}</p>
              ${this.selectedSet.analysis.tags && this.selectedSet.analysis.tags.length > 0 ? html`
                <div style="margin-top:8px;">
                  ${this.selectedSet.analysis.tags.map(tag => html`<span class="tag">${tag}</span>`)}
                </div>
              ` : ''}
            </div>

          </div>
        </div>

      </div>
    `;
  }

  private handleChordClick(chord: string, voicing: string[]) {
    // For now just output voicing and chord to clipboard
    const text = `Chord: ${chord}\nVoicing: ${voicing?.join(', ')}`;
    navigator.clipboard.writeText(text).then(() => {
        // We could add a toast or similar UI feedback here
    });
  }
}
