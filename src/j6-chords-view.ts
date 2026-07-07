import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import chordsDataRaw from '../data/chords.json';
import { ChordSet, ChordsData } from './types.js';

const chordsData = (chordsDataRaw as unknown) as ChordsData;

@customElement('j6-chords-view')
export class J6ChordsView extends LitElement {
  @state() private searchQuery: string = '';
  @state() private selectedGenre: string = 'All';
  @state() private maxComplexity: number = 100;
  
  @state() private currentFilteredIndex: number = 0;
  @state() private showSearchModal: boolean = false;

  private get uniqueGenres() {
    return ['All', ...Array.from(new Set(chordsData.chord_sets.map(s => s.genre))).sort()];
  }

  private getChordSetComplexity(chords: string[]): number {
    let score = 0;
    chords.forEach(c => {
       if (c.includes('9') || c.includes('11') || c.includes('13')) score += 2;
       if (c.includes('m') || c.includes('aug') || c.includes('dim')) score += 1;
       if (c.includes('/')) score += 1;
       if (c.includes('sus')) score += 1;
    });
    return Math.min(100, Math.floor((score / 48) * 100));
  }

  private get filteredSets() {
    return chordsData.chord_sets.filter(s => {
      if (this.selectedGenre !== 'All' && s.genre !== this.selectedGenre) return false;
      if (this.getChordSetComplexity(s.chords) > this.maxComplexity) return false;
      if (this.searchQuery) {
        const q = this.searchQuery.toLowerCase();
        if (
          !s.genre.toLowerCase().includes(q) &&
          !s.number.toString().includes(q) &&
          !s.chords.some(c => c.toLowerCase().includes(q))
        ) {
          return false;
        }
      }
      return true;
    });
  }

  private get currentSet(): ChordSet | undefined {
    const sets = this.filteredSets;
    if (sets.length === 0) return undefined;
    if (this.currentFilteredIndex >= sets.length) {
      setTimeout(() => this.currentFilteredIndex = 0, 0);
      return sets[0];
    }
    return sets[this.currentFilteredIndex];
  }

  private selectFilterValue(type: 'genre', value: string) {
    if (type === 'genre') {
      this.selectedGenre = value;
    }
    this.currentFilteredIndex = 0;
  }

  private jumpToSet(setNumber: number) {
    const idx = this.filteredSets.findIndex(s => s.number === setNumber);
    if (idx !== -1) {
      this.currentFilteredIndex = idx;
      this.showSearchModal = false;
    }
  }

  private cycleSet(direction: 1 | -1) {
    const total = this.filteredSets.length;
    if (total <= 1) return;
    let nextIdx = this.currentFilteredIndex + direction;
    if (nextIdx < 0) nextIdx = total - 1;
    if (nextIdx >= total) nextIdx = 0;
    this.currentFilteredIndex = nextIdx;
  }

  private selectRandomSet(genre?: string) {
    let sets = chordsData.chord_sets;
    if (genre) {
      sets = sets.filter(s => s.genre === genre);
    }
    if (sets.length > 0) {
      const randomSet = sets[Math.floor(Math.random() * sets.length)];
      
      const setComplexity = this.getChordSetComplexity(randomSet.chords);
      if (setComplexity > this.maxComplexity) {
        this.maxComplexity = setComplexity;
      }

      if (genre) {
        this.selectedGenre = genre;
      } else {
        this.selectedGenre = 'All';
      }
      this.searchQuery = '';
      
      const newFilteredSets = chordsData.chord_sets.filter(s => {
        if (this.selectedGenre !== 'All' && s.genre !== this.selectedGenre) return false;
        if (this.getChordSetComplexity(s.chords) > this.maxComplexity) return false;
        return true;
      });
      
      const newIndex = newFilteredSets.findIndex(s => s.number === randomSet.number);
      if (newIndex !== -1) {
        this.currentFilteredIndex = newIndex;
      }
    }
  }

  private handleFaderMouseDown(e: MouseEvent) {
    e.preventDefault();
    this.startFaderDrag(e.clientY);
  }

  private handleFaderTouchStart(e: TouchEvent) {
    e.preventDefault();
    this.startFaderDrag(e.touches[0].clientY);
  }

  private startFaderDrag(startY: number) {
    const startVal = this.maxComplexity;
    const moveHandler = (ev: MouseEvent | TouchEvent) => {
      const clientY = 'touches' in ev ? (ev as TouchEvent).touches[0].clientY : (ev as MouseEvent).clientY;
      const deltaY = startY - clientY;
      let newVal = startVal + deltaY;
      newVal = Math.max(0, Math.min(100, Math.round(newVal)));
      this.maxComplexity = newVal;
      this.currentFilteredIndex = 0;
    };
    const upHandler = () => {
      window.removeEventListener('mousemove', moveHandler);
      window.removeEventListener('mouseup', upHandler);
      window.removeEventListener('touchmove', moveHandler);
      window.removeEventListener('touchend', upHandler);
    };
    window.addEventListener('mousemove', moveHandler);
    window.addEventListener('mouseup', upHandler);
    window.addEventListener('touchmove', moveHandler, { passive: false });
    window.addEventListener('touchend', upHandler);
  }

  static styles = css`
    :host {
      display: block;
      color: var(--text-primary);
      font-family: var(--font-sans);
    }
    
    .juno-panel-container {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 12px;
      background: #15161b;
      border: 1px solid #2e3037;
      border-radius: 4px;
    }

    .top-row {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      justify-content: space-between;
    }

    .juno-block {
      background: transparent;
      border: 1px solid #2a2b30;
      border-radius: 4px;
      position: relative;
      flex: 1;
      min-width: 280px;
      display: flex;
      flex-direction: column;
    }

    .juno-header {
      padding: 4px 12px;
      font-size: 0.7rem;
      font-weight: 900;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      color: #fff;
    }
    .juno-header.blue { background: #346d92; border-bottom: 2px solid #1a3c54; }
    .juno-header.red { background: #b52c24; border-bottom: 2px solid #6b1510; }
    .juno-header.orange { background: #d67118; border-bottom: 2px solid #7d4009; }

    .juno-content {
      padding: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      flex: 1;
    }

    .led-screen {
      background-color: #120907;
      background-image: radial-gradient(rgba(255, 93, 0, 0.15) 1px, transparent 0);
      background-size: 3px 3px;
      border: 2px solid #09090b;
      box-shadow: inset 0 2px 8px rgba(0,0,0,0.98), 0 1px 0 rgba(255,255,255,0.05);
      border-radius: 3px;
      padding: 6px 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    .led-screen.clickable {
      cursor: pointer;
      transition: box-shadow 0.1s ease;
    }
    
    .led-screen.clickable:hover {
      box-shadow: inset 0 2px 8px rgba(0,0,0,0.98), 0 0 8px rgba(255, 93, 0, 0.6);
    }

    .led-text {
      color: #ff5d00;
      font-family: var(--font-mono), monospace;
      font-size: 1.2rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      text-shadow: 0 0 8px rgba(255, 93, 0, 0.9);
      white-space: nowrap;
    }

    /* Used inside the modal for actual typing */
    .led-input-modal {
      background: transparent;
      border: none;
      color: #ff5d00;
      font-family: var(--font-mono), monospace;
      font-size: 1.5rem;
      letter-spacing: 0.1em;
      outline: none;
      text-transform: uppercase;
      text-shadow: 0 0 8px rgba(255, 93, 0, 0.9);
      width: 100%;
      text-align: center;
    }
    .led-input-modal::placeholder { color: rgba(255, 93, 0, 0.3); text-shadow: none; }

    .cycle-group {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
    }

    .cycle-label {
      font-size: 0.55rem;
      font-weight: 900;
      color: #a4a5aa;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    .retro-btn {
      width: 32px;
      height: 24px;
      background: linear-gradient(180deg, #3c3e44 0%, #202124 100%);
      border: 1.5px solid #101113;
      border-radius: 2px;
      box-shadow: 0 3px 0 #000, 0 4px 6px rgba(0,0,0,0.5);
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #a4a5aa;
      font-weight: 900;
      font-size: 0.7rem;
      transition: all 0.05s ease;
    }
    .retro-btn:active {
      transform: translateY(3px);
      box-shadow: 0 0 0 #000, 0 1px 2px rgba(0,0,0,0.5);
      background: #ff8500;
      color: #fff;
    }

    .patch-bank-btn {
      width: 50px;
      height: 28px;
      background: #ebdcb9; /* Cream color */
      color: #111;
      font-size: 0.8rem;
    }

    /* Set Info Layout */
    .set-info-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 16px;
    }
    
    .set-header-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      border-bottom: 1px solid #23242a;
      padding-bottom: 12px;
    }

    .set-display {
      font-size: 1.5rem;
      font-weight: bold;
      padding: 6px 12px;
      min-width: 110px;
      text-align: center;
    }
    
    .set-controls {
      display: flex;
      gap: 12px;
    }

    .info-screen {
      font-size: 0.75rem;
      color: #a4a5aa;
      line-height: 1.5;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    
    .info-row {
      display: flex;
      align-items: baseline;
      gap: 8px;
    }
    
    .info-label {
      font-weight: 900;
      color: #5d5f66;
      text-transform: uppercase;
      font-size: 0.65rem;
      width: 90px;
      flex-shrink: 0;
    }

    .tag-bubble {
      display: inline-block;
      background: #ff5d00;
      color: #111;
      border-radius: 2px;
      padding: 2px 6px;
      font-size: 0.6rem;
      font-weight: 900;
      text-transform: uppercase;
    }

    /* Chords Row (The PATCH section) */
    .chords-block {
      background: transparent;
      border: 1px solid #2a2b30;
      border-radius: 4px;
      position: relative;
    }

    .chords-row {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 16px;
      padding: 32px 16px 24px 16px;
      background: #111216;
    }

    .patch-btn-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      width: 44px;
    }

    .patch-legend {
      font-size: 0.75rem;
      font-weight: 900;
      color: #a4a5aa;
      font-family: var(--font-sans);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      text-align: center;
      min-height: 16px;
      white-space: nowrap;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .patch-btn {
      width: 44px;
      height: 44px;
      border: 2px solid #101113;
      border-radius: 3px;
      box-shadow: 0 5px 0 #000, 0 6px 10px rgba(0, 0, 0, 0.7);
      cursor: pointer;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: transform 0.05s ease, box-shadow 0.05s ease;
    }
    
    .patch-btn::after {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; height: 2px;
      background: rgba(255,255,255,0.3);
    }

    .patch-btn:active {
      transform: translateY(4px);
      box-shadow: 0 1px 0 #000, 0 2px 4px rgba(0, 0, 0, 0.5);
    }

    .patch-btn.color-1 { background: #ffaa33; } 
    .patch-btn.color-2 { background: #e85d22; } 
    .patch-btn.color-3 { background: #ebdcb9; } 

    /* Modals & Overlays */
    .modal-backdrop {
      position: fixed; top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0, 0, 0, 0.75); backdrop-filter: blur(4px);
      z-index: 2000; display: flex; justify-content: center; align-items: center; padding: 20px;
    }
    .retro-modal {
      background: #141518; border: 3px solid var(--border-light, #2e3037); border-radius: 8px;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.9); width: 100%; max-width: 650px;
      overflow: hidden; font-family: var(--font-sans);
      display: flex; flex-direction: column;
      max-height: 90vh;
    }
    .modal-header {
      background: #111214; padding: 10px 16px; display: flex;
      justify-content: space-between; align-items: center; border-bottom: 2px solid #2a2b30;
      flex-shrink: 0;
    }
    .modal-title { font-size: 0.8rem; font-weight: bold; color: #ff5d00; letter-spacing: 0.08em; }
    .close-btn { background: transparent; border: none; color: #fff; font-size: 1.4rem; cursor: pointer; transition: color 0.2s ease; }
    .close-btn:hover { color: #ff5d00; }
    
    .modal-body { 
      padding: 20px; 
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    
    .modal-body::-webkit-scrollbar { width: 8px; }
    .modal-body::-webkit-scrollbar-track { background: #0f0f11; border-left: 1px solid #232328; }
    .modal-body::-webkit-scrollbar-thumb { background: #3a3b40; border-radius: 5px; border: 2px solid #0f0f11; }
    .modal-body::-webkit-scrollbar-thumb:hover { background: #ff5d00; }

    .modal-section {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .modal-section-title {
      font-size: 0.7rem;
      font-weight: 900;
      color: #a4a5aa;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      border-bottom: 1px solid #23242a;
      padding-bottom: 6px;
    }

    .modal-list {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
    
    .modal-item-btn {
      background: var(--bg-element-dark, #1a1b20);
      border: 1px solid #2e3037;
      color: #fff;
      padding: 10px 14px;
      border-radius: 4px;
      cursor: pointer;
      font-family: var(--font-sans);
      font-size: 0.8rem;
      font-weight: bold;
      transition: all 0.1s ease;
      white-space: nowrap;
    }
    
    .modal-item-btn:hover {
      background: #23242a;
      border-color: #555861;
    }
    
    .modal-item-btn.selected {
      background: #ff5d00;
      color: #000;
      border-color: #ff7d33;
    }

    .set-list-btn {
      width: 100%;
      text-align: left;
      display: grid;
      grid-template-columns: 60px 1fr 1fr;
      gap: 16px;
      align-items: center;
    }
    .set-list-btn .s-num { color: #ff5d00; font-family: monospace; font-size: 1.1rem; }
    .set-list-btn .s-genre { color: #fff; }
      .set-list-btn .s-key { color: #a4a5aa; font-size: 0.7rem; text-align: right; }

    /* FADER CSS */
    .fader-group {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
    }
    .fader-label {
      font-size: 0.65rem;
      font-weight: 800;
      color: #a4a5aa;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .fader-track-wrapper {
      position: relative;
      padding: 0 10px;
    }
    .fader-track {
      width: 5px;
      height: 100px;
      background: #000000;
      border-radius: 2px;
      box-shadow: inset 0 2px 5px rgba(0,0,0,0.8);
      position: relative;
      cursor: pointer;
    }
    .fader-track::before, .fader-track::after {
      content: '';
      position: absolute;
      top: 0; bottom: 0; width: 4px;
      background: repeating-linear-gradient(180deg, #9e9a8e, #9e9a8e 1.5px, transparent 1.5px, transparent 10px);
      opacity: 0.55;
    }
    .fader-track::before { left: -8px; }
    .fader-track::after { right: -8px; }
    .fader-handle {
      width: 24px; height: 14px;
      background: linear-gradient(180deg, #44464f 0%, #1a1b1e 100%);
      border: 1.5px solid #0a0b0d; border-radius: 3px;
      box-shadow: 0 3px 6px rgba(0,0,0,0.7), inset 0 1px 1px rgba(255,255,255,0.1);
      position: absolute; left: calc(50% - 12px);
      cursor: ns-resize; transition: bottom 0.05s linear;
    }
    .fader-handle::before {
      content: ''; display: block; position: absolute;
      left: 1.5px; right: 1.5px; top: 5px; height: 1.5px;
      background: var(--text-primary);
      box-shadow: 0 0.5px 1px rgba(0,0,0,0.3);
    }
    .fader-val-label {
      font-family: monospace; font-size: 0.6rem; color: #5d5f66; margin-top: 8px;
    }
    .fader-scale-shared {
      font-family: monospace; font-size: 0.55rem; color: #a4a5aa;
      font-weight: bold; display: flex; flex-direction: column;
      justify-content: space-between; height: 100px; margin-top: 20px; padding: 0 2px;
    }
    .fader-scale-shared span { text-align: center; line-height: 1; }

    @media (max-width: 768px) {
      .top-row { flex-direction: column; }
      .set-header-row { flex-direction: column; align-items: flex-start; }
      .chords-row { padding: 24px 16px; gap: 12px; }
      .patch-btn { width: 38px; height: 38px; }
      .patch-legend { font-size: 0.65rem; }
    }
  `;

  render() {
    return html`
      <div class="juno-panel-container">
        
        <div class="top-row">

          <!-- SET INFO & SELECTION -->
          <div class="juno-block" style="flex: 1;">
            <div class="juno-header orange">SET INFO</div>
            <div class="juno-content">
              <div class="set-info-container">
                
                <div class="set-header-row">
                  <div class="led-screen set-display clickable" @click=${() => this.showSearchModal = true}>
                    <span class="led-text">
                      ${this.currentSet ? `SET ${this.currentSet.number.toString().padStart(2, '0')}` : 'NO SET'}
                    </span>
                  </div>
                  
                  <div class="set-controls">
                    <div class="cycle-group">
                      <div class="cycle-label">DEC</div>
                      <button class="retro-btn patch-bank-btn" ?disabled=${!this.currentSet} @click=${() => this.cycleSet(-1)}>▼</button>
                    </div>
                    <div class="cycle-group">
                      <div class="cycle-label">INC</div>
                      <button class="retro-btn patch-bank-btn" ?disabled=${!this.currentSet} @click=${() => this.cycleSet(1)}>▲</button>
                    </div>
                  </div>
                </div>

                ${this.currentSet ? html`
                  <div class="info-screen">
                    <div class="info-row">
                      <span class="info-label">GENRE</span>
                      <span style="color: #fff; font-weight: bold;">${this.currentSet.genre}</span>
                    </div>
                    ${this.currentSet.analysis ? html`
                      <div class="info-row">
                        <span class="info-label">KEY</span>
                        <span style="color: #fff; font-weight: bold;">${this.currentSet.analysis.bestKey}</span>
                      </div>
                      <div class="info-row">
                        <span class="info-label">PROGRESSION</span>
                        <span style="color: #fff;">${this.currentSet.analysis.recommendedProgression}</span>
                      </div>
                      ${this.currentSet.analysis.tags && this.currentSet.analysis.tags.length > 0 ? html`
                        <div class="info-row" style="margin-top: 4px;">
                          <span class="info-label">TAGS</span>
                          <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                            ${this.currentSet.analysis.tags.map(tag => html`<span class="tag-bubble">${tag}</span>`)}
                          </div>
                        </div>
                      ` : ''}
                    ` : ''}
                  </div>
                ` : html`
                  <div style="color: #5d5f66; font-weight: bold; font-size: 0.8rem;">
                    NO SETS MATCHING FILTER
                  </div>
                `}
                
              </div>
            </div>
          </div>
          
          <!-- PARAMETERS / COMPLEXITY -->
          <div class="juno-block" style="flex: 1;">
            <div class="juno-header blue">PARAMETERS</div>
            <div class="juno-content" style="gap: 24px; padding: 8px 16px;">
              <div class="fader-scale-shared">
                <span>10</span>
                <span>-</span>
                <span>0</span>
              </div>
              <div 
                class="fader-group"
                @mousedown=${(e: MouseEvent) => this.handleFaderMouseDown(e)}
                @touchstart=${(e: TouchEvent) => this.handleFaderTouchStart(e)}
              >
                <span class="fader-label">COMPLEX</span>
                <div class="fader-track-wrapper">
                  <div class="fader-track">
                    <div class="fader-handle" style="bottom: calc(${this.maxComplexity}% * 0.86)"></div>
                  </div>
                </div>
                <span class="fader-val-label">${this.maxComplexity}%</span>
              </div>
            </div>
          </div>

          <!-- SEARCH & FILTERS -->
          <div class="juno-block" style="flex: 1;">
            <div class="juno-header blue">DCO / FILTER SEARCH</div>
            <div class="juno-content" style="flex-direction: column; gap: 20px;">
              
              <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
                
                <div class="patch-btn-wrapper">
                  <div class="patch-legend" style="flex-direction: column; justify-content: flex-start; height: 28px; font-size: 0.65rem; min-width: 0; overflow: visible;">
                    <span>RND</span>
                    <span>POP</span>
                  </div>
                  <button class="patch-btn color-1" @click=${() => this.selectRandomSet('Pop')}></button>
                </div>

                <div class="patch-btn-wrapper">
                  <div class="patch-legend" style="flex-direction: column; justify-content: flex-start; height: 28px; font-size: 0.5rem; letter-spacing: 0; min-width: 0; overflow: visible;">
                    <span>RND</span>
                    <span>NEO SOUL</span>
                  </div>
                  <button class="patch-btn color-1" @click=${() => this.selectRandomSet('Neo Soul')}></button>
                </div>

                <div class="patch-btn-wrapper">
                  <div class="patch-legend" style="flex-direction: column; justify-content: flex-start; height: 28px; font-size: 0.65rem; min-width: 0; overflow: visible;">
                    <span>RND</span>
                    <span>JAZZ</span>
                  </div>
                  <button class="patch-btn color-1" @click=${() => this.selectRandomSet('Jazz')}></button>
                </div>

                <div class="patch-btn-wrapper">
                  <div class="patch-legend" style="flex-direction: column; justify-content: flex-start; height: 28px; font-size: 0.65rem; min-width: 0; overflow: visible;">
                    <span>RND</span>
                  </div>
                  <button class="patch-btn color-3" @click=${() => this.selectRandomSet()}></button>
                </div>

              </div>

              <div style="margin-top: auto; width: 100%;">
                <div class="led-screen clickable" style="width: 100%; box-sizing: border-box;" @click=${() => this.showSearchModal = true}>
                  <span class="led-text" style="font-size: 0.8rem; display: flex; align-items: center; gap: 8px; justify-content: center;">
                    <span style="font-size: 1.2rem; margin-top: -2px;">+</span> ADVANCED SEARCH
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        <!-- BOTTOM CHORDS ROW (PATCH BUTTONS) -->
        <div class="chords-block">
          <div class="juno-header red">CHORDS</div>
          <div class="chords-row">
            ${this.currentSet ? this.currentSet.chords.map((chord, index) => {
              const colorClass = index < 4 ? 'color-3' : index < 8 ? 'color-1' : 'color-2';
              const voicing = this.currentSet!.voicings?.[index];
              return html`
                <div class="patch-btn-wrapper" title="${voicing ? `Voicing: ${voicing.join(', ')}` : 'N/A'}">
                  <div class="patch-legend">${chord}</div>
                  <button class="patch-btn ${colorClass}" @click=${() => this.handleChordClick(chord, voicing)}></button>
                </div>
              `;
            }) : ''}
          </div>
        </div>

      </div>

      <!-- UNIFIED SEARCH MODAL -->
      ${this.showSearchModal ? html`
        <div class="modal-backdrop" @click=${(e: Event) => { if (e.target === e.currentTarget) this.showSearchModal = false; }}>
          <div class="retro-modal">
            <div class="modal-header">
              <div class="modal-title">BROWSE CHORD SETS</div>
              <button class="close-btn" @click=${() => this.showSearchModal = false}>&times;</button>
            </div>
            
            <div class="modal-body">
              
              <!-- QUERY INPUT -->
              <div class="modal-section">
                <div class="led-screen" style="padding: 12px;">
                  <input 
                    type="text" 
                    class="led-input-modal" 
                    placeholder="TYPE TO SEARCH..." 
                    .value=${this.searchQuery}
                    @input=${(e: Event) => { this.searchQuery = (e.target as HTMLInputElement).value; this.currentFilteredIndex = 0; }}
                  />
                </div>
              </div>

              <!-- GENRE FILTER -->
              <div class="modal-section">
                <div class="modal-section-title">Filter by Genre</div>
                <div class="modal-list">
                  ${this.uniqueGenres.map(g => html`
                    <button class="modal-item-btn ${this.selectedGenre === g ? 'selected' : ''}" @click=${() => this.selectFilterValue('genre', g)}>${g}</button>
                  `)}
                </div>
              </div>



              <!-- MATCHING SETS -->
              <div class="modal-section" style="margin-top: 12px;">
                <div class="modal-section-title" style="display:flex; justify-content:space-between;">
                  <span>Matching Sets</span>
                  <span style="color: #ff5d00;">${this.filteredSets.length} found</span>
                </div>
                <div style="display: flex; flex-direction: column; gap: 8px;">
                  ${this.filteredSets.map(set => html`
                    <button class="modal-item-btn set-list-btn ${this.currentSet?.number === set.number ? 'selected' : ''}" @click=${() => this.jumpToSet(set.number)}>
                      <span class="s-num">#${set.number.toString().padStart(2, '0')}</span>
                      <span class="s-genre">${set.genre}</span>
                      <span class="s-key">${set.analysis?.bestKey || ''}</span>
                    </button>
                  `)}
                </div>
              </div>

            </div>
          </div>
        </div>
      ` : ''}

    `;
  }

  private handleChordClick(chord: string, voicing?: string[]) {
    const text = voicing ? `Chord: ${chord}\nVoicing: ${voicing.join(', ')}` : `Chord: ${chord}`;
    navigator.clipboard.writeText(text).then(() => {
        // Output copied to clipboard
    });
  }
}
