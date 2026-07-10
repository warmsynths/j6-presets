import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import stylesDataRaw from '../data/styles.json';
import { StylesData, StyleCategory, StyleEntry } from './types.js';

const stylesData = (stylesDataRaw as unknown) as StylesData;

@customElement('j6-styles-view')
export class J6StylesView extends LitElement {
  @state() private selectedCategoryIndex: number = 0;
  @state() private selectedStyleIndex: number = 0;
  @state() private selectedVariationIndex: number = 0;

  private get currentCategory(): StyleCategory {
    return stylesData.style_categories[this.selectedCategoryIndex];
  }

  private get currentStyle(): StyleEntry {
    return this.currentCategory.styles[this.selectedStyleIndex];
  }

  private get currentVariation() {
    return this.currentStyle.variations[this.selectedVariationIndex];
  }

  private setCategory(index: number) {
    this.selectedCategoryIndex = index;
    this.selectedStyleIndex = 0;
    this.selectedVariationIndex = 0;
  }

  private cycleStyle(direction: 1 | -1) {
    const total = this.currentCategory.styles.length;
    if (total <= 1) return;
    let nextIdx = this.selectedStyleIndex + direction;
    if (nextIdx < 0) nextIdx = total - 1;
    if (nextIdx >= total) nextIdx = 0;
    this.selectedStyleIndex = nextIdx;
    this.selectedVariationIndex = 0;
  }

  private cycleVariation(direction: 1 | -1) {
    const total = this.currentStyle.variations.length;
    if (total <= 1) return;
    let nextIdx = this.selectedVariationIndex + direction;
    if (nextIdx < 0) nextIdx = total - 1;
    if (nextIdx >= total) nextIdx = 0;
    this.selectedVariationIndex = nextIdx;
  }

  private renderStepGrid(patternStr: string | undefined, category: string, subdivision: string | undefined) {
    const p = (patternStr || '').toUpperCase();
    const cat = category.toLowerCase();
    const sub = (subdivision || '').toLowerCase();
    const rows = 8;

    // Determine columns from subdivision
    let cols = 8;
    if (sub.includes('16th')) {
      cols = 16;
    } else if (sub.includes('variable') || sub.includes('spacious')) {
      cols = 4;
    }
    // Triplet variations: use 12 columns (4 groups of 3)
    if (p.includes('TRIPLET')) {
      cols = 12;
    }

    const grid: boolean[][] = Array.from({ length: rows }, () => Array(cols).fill(false));

    if (cat.includes('chord') || cat.includes('phrase')) {
      if (p.includes('STRUM')) {
        const hitCols = [0, 1, Math.floor(cols/2), Math.floor(cols/2)+1];
        for (const col of hitCols) {
          if (col < cols) { grid[2][col] = true; grid[3][col] = true; grid[4][col] = true; grid[5][col] = true; }
        }
      } else if (p.includes('RHYTHMIC') || p.includes('GROOVE')) {
        const spacing = Math.max(1, Math.floor(cols / 4));
        for (let i = 0; i < 4; i++) {
          const col = i * spacing;
          if (col < cols) { grid[2][col] = true; grid[3][col] = true; grid[4][col] = true; grid[5][col] = true; }
        }
      } else {
        const spacing = Math.max(1, Math.floor(cols / 4));
        for (let i = 0; i < 4; i++) {
          const col = i * spacing;
          if (col < cols) { grid[2][col] = true; grid[3][col] = true; grid[4][col] = true; grid[5][col] = true; }
        }
      }
    } else if (cat.includes('beat')) {
      if (p.includes('SYNC') || p.includes('SYNCO')) {
        for (let i = 0; i < cols; i++) {
          if (i % 2 === 1) grid[3][i] = true;
          if (i % 2 === 0) grid[4][i] = true;
        }
      } else if (p.includes('_O')) {
        for (let i = 1; i < cols; i += Math.max(2, Math.floor(cols/4))) {
          grid[3][i] = true; grid[4][i] = true;
        }
      } else {
        const spacing = Math.max(1, Math.floor(cols / 4));
        for (let i = 0; i < cols; i += spacing) {
          grid[3][i] = true; grid[4][i] = true;
        }
      }
    } else {
      // Arpeggio patterns — scale sequence to fit column count
      if (p.includes('UP&DOWN') || p.includes('U/D') || p.includes('ALT')) {
        const half = Math.floor(cols / 2);
        for (let i = 0; i < cols; i++) {
          const pitch = i < half ? 7 - Math.floor((i / half) * 6) : 1 + Math.floor(((i - half) / (cols - half - 1 || 1)) * 6);
          grid[Math.min(7, Math.max(0, pitch))][i] = true;
        }
      } else if (p.includes('DOWN&UP') || p.includes('D/U')) {
        const half = Math.floor(cols / 2);
        for (let i = 0; i < cols; i++) {
          const pitch = i < half ? 1 + Math.floor((i / half) * 6) : 7 - Math.floor(((i - half) / (cols - half - 1 || 1)) * 6);
          grid[Math.min(7, Math.max(0, pitch))][i] = true;
        }
      } else if (p.includes('DOWN')) {
        for (let i = 0; i < cols; i++) {
          const pitch = Math.min(7, Math.floor((i / (cols - 1)) * 7));
          grid[pitch][i] = true;
        }
      } else if (p.includes('UP')) {
        for (let i = 0; i < cols; i++) {
          const pitch = Math.min(7, 7 - Math.floor((i / (cols - 1)) * 7));
          grid[pitch][i] = true;
        }
      } else if (p.includes('RANDOM') || p.includes('RND')) {
        const rndSeq = [2, 6, 1, 5, 3, 7, 0, 4, 3, 5, 1, 6, 2, 7, 4, 0];
        for (let i = 0; i < cols; i++) {
          grid[rndSeq[i % rndSeq.length]][i] = true;
        }
      } else if (p.includes('TRIPLET')) {
        // Triplet groupings across 12 columns
        const seq = [7, 5, 3, 6, 4, 2, 5, 3, 1, 4, 2, 0];
        seq.forEach((row, col) => { if (col < cols) grid[row][col] = true; });
      } else if (p.includes('UNPUBLISHED') || p === '') {
        grid[1][Math.floor(cols/2)-1] = true; grid[1][Math.floor(cols/2)] = true;
        grid[2][Math.floor(cols/2)+1] = true; grid[3][Math.floor(cols/2)] = true;
        grid[4][Math.floor(cols/2)-1] = true;
        grid[6][Math.floor(cols/2)-1] = true; grid[6][Math.floor(cols/2)] = true;
      } else {
        for (let i = 0; i < cols; i++) {
          const pitch = Math.min(7, 7 - Math.floor((i / (cols - 1)) * 7));
          grid[pitch][i] = true;
        }
      }
    }

    return html`
      <div class="step-grid" style="grid-template-columns: repeat(${cols}, 1fr)">
        ${grid.map(row => html`
          ${row.map(active => html`
            <div class="step-cell ${active ? 'on' : ''}"></div>
          `)}
        `)}
      </div>
    `;
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .synth-panel {
      background: #111216;
      border: 1px solid #2e3037;
      border-radius: 6px;
      padding: 32px;
      display: grid;
      grid-template-columns: 240px 1fr;
      gap: 40px;
      box-shadow: inset 0 2px 10px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.6);
      position: relative;
    }

    .beta-badge {
      position: absolute;
      top: 12px;
      right: 16px;
      font-size: 0.55rem;
      font-weight: 900;
      color: #ff5d00;
      opacity: 0.4;
      letter-spacing: 0.15em;
      border: 1.5px solid rgba(255, 93, 0, 0.4);
      padding: 2px 6px;
      border-radius: 3px;
      text-transform: uppercase;
      pointer-events: none;
      font-family: system-ui, -apple-system, sans-serif;
    }

    @media (max-width: 800px) {
      .synth-panel {
        grid-template-columns: 1fr;
        gap: 24px;
      }
    }

    /* Left Side: Controls */
    .controls-section {
      display: flex;
      flex-direction: column;
      gap: 32px;
    }

    .control-block {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .control-label {
      font-size: 0.7rem;
      font-weight: 800;
      color: #6a6b70;
      letter-spacing: 0.15em;
    }

    /* Hardware Category Buttons */
    .hw-category-container {
      display: flex;
      gap: 20px;
      align-items: flex-end;
      justify-content: center;
    }

    .hw-btn-group {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      cursor: pointer;
    }

    .hw-btn-label {
      font-size: 0.65rem;
      font-weight: 800;
      color: #a4a5aa;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      transition: color 0.2s;
    }

    .hw-btn-group:hover .hw-btn-label {
      color: #fff;
    }

    .hw-btn-led {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #2a0000;
      box-shadow: inset 0 1px 2px rgba(0,0,0,0.8);
      margin-bottom: 4px;
    }

    .hw-btn-led.on {
      background: #ffaa00;
      box-shadow: 0 0 6px #ffaa00, 0 0 12px #ff5d00, inset 0 1px 2px rgba(255,255,255,0.8);
    }

    .hw-btn-square {
      width: 44px;
      height: 40px;
      background: #e0dbba; /* cream */
      border-radius: 2px;
      border-bottom: 4px solid #111;
      box-shadow: inset 0 1px 1px rgba(255,255,255,0.4), 0 3px 6px rgba(0,0,0,0.5);
      transition: all 0.1s;
    }

    .hw-btn-square.active {
      background: #f4a236; /* orange */
    }

    .hw-btn-group:active .hw-btn-square {
      transform: translateY(2px);
      border-bottom: 2px solid #111;
    }

    /* Stepper Controls */
    .stepper {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .btn-rubber {
      background: #2a2b30;
      border: 1px solid #111;
      border-top: 1px solid #3d3e45;
      border-radius: 4px;
      color: #dcdad2;
      width: 40px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.1rem;
      cursor: pointer;
      box-shadow: 0 3px 5px rgba(0,0,0,0.4);
      transition: all 0.05s;
    }
    
    .btn-rubber:active {
      transform: translateY(2px);
      box-shadow: 0 1px 2px rgba(0,0,0,0.6);
      background: #232429;
    }

    .stepper-readout {
      background: #060608;
      border: 2px solid #000;
      border-radius: 3px;
      color: #ff3333;
      text-shadow: 0 0 6px #ff3333;
      font-family: 'Courier New', Courier, monospace;
      font-weight: bold;
      font-size: 1.25rem;
      height: 36px;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: inset 0 2px 8px rgba(0,0,0,0.8);
      position: relative;
      overflow: hidden;
    }

    .stepper-readout::after {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%);
      background-size: 100% 3px;
      pointer-events: none;
    }

    .control-subtext {
      color: #a4a5aa;
      font-size: 0.8rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      min-height: 1.2rem;
    }

    .control-subtext strong {
      color: #fff;
    }

    /* Right Side: Oscilloscope */
    .display-section {
      display: flex;
      flex-direction: column;
      gap: 24px;
      min-width: 0; /* Prevent flex blowout */
    }

    .oscilloscope-screen {
      background-color: #0a0a0c;
      border: 2px solid #09090b;
      box-shadow: inset 0 2px 8px rgba(0,0,0,0.98), 0 1px 1px rgba(255,255,255,0.05);
      border-radius: 3px;
      padding: 16px;
      box-sizing: border-box;
      overflow: hidden;
    }

    .step-grid {
      display: grid;
      grid-template-rows: repeat(8, 14px);
      gap: 2px;
      width: 100%;
    }

    .step-cell {
      background: #1a1a1e;
      border-radius: 2px;
      border: 1px solid #222228;
    }

    .step-cell.on {
      background: #ff5d00;
      border-color: #ff7a2e;
      box-shadow: 0 0 6px rgba(255, 93, 0, 0.6), 0 0 12px rgba(255, 93, 0, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.3);
    }

    /* Details Panel */
    .details-panel {
      background: rgba(42, 43, 48, 0.4);
      border: 1px solid #2e3037;
      border-radius: 4px;
      padding: 16px;
    }

    .details-header {
      color: #6a6b70;
      font-size: 0.7rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      margin-bottom: 8px;
    }

    .details-desc {
      color: #fff;
      font-size: 1.05rem;
      line-height: 1.4;
      margin-bottom: 12px;
    }

    .details-usecase {
      color: #398bb5;
      font-size: 0.9rem;
      line-height: 1.5;
      border-top: 1px dashed #3d3e45;
      padding-top: 12px;
    }
  `;

  render() {
    const currentCategory = this.currentCategory;
    const currentStyle = this.currentStyle;
    const currentVariation = this.currentVariation;

    return html`
      <div class="synth-panel">
        <div class="beta-badge">Beta v0.9</div>
        
        <!-- Controls Column -->
        <div class="controls-section">
          
          <div class="control-block">
            <div class="hw-category-container">
              ${stylesData.style_categories.map((cat, idx) => html`
                <div class="hw-btn-group" @click=${() => this.setCategory(idx)}>
                  <div class="hw-btn-label">${cat.category_name.split(' ')[0]}</div>
                  <div class="hw-btn-led ${this.selectedCategoryIndex === idx ? 'on' : ''}"></div>
                  <div class="hw-btn-square ${this.selectedCategoryIndex === idx ? 'active' : ''}"></div>
                </div>
              `)}
            </div>
          </div>

          <div class="control-block">
            <div class="control-label">STYLE</div>
            <div class="stepper">
              <button class="btn-rubber" @click=${() => this.cycleStyle(-1)}>&lt;</button>
              <div class="stepper-readout">[${currentStyle.style_number}]</div>
              <button class="btn-rubber" @click=${() => this.cycleStyle(1)}>&gt;</button>
            </div>
            <div class="control-subtext" title="${currentStyle.style_name}">
              ${currentStyle.style_name}
            </div>
          </div>

          <div class="control-block">
            <div class="control-label">VARIATION</div>
            <div class="stepper">
              <button class="btn-rubber" @click=${() => this.cycleVariation(-1)}>&lt;</button>
              <div class="stepper-readout" style="color: #ff5d00; text-shadow: 0 0 6px #ff5d00;">
                [${currentVariation.var}]
              </div>
              <button class="btn-rubber" @click=${() => this.cycleVariation(1)}>&gt;</button>
            </div>
            <div class="control-subtext" title="${currentVariation.pattern || currentVariation.note_value}">
              <strong>${currentVariation.pattern || currentVariation.note_value || 'Unpublished'}</strong>
            </div>
          </div>

        </div>

        <!-- Display Column -->
        <div class="display-section">
          
          <div class="oscilloscope-screen">
            ${this.renderStepGrid(currentVariation.pattern || currentVariation.note_value, currentCategory.category_name, currentStyle.subdivision)}
          </div>

          <div class="details-panel">
            <div class="details-header">VARIATION INFO</div>
            <div class="details-desc">${currentVariation.description}</div>
            <div class="details-usecase">${currentVariation.use_case}</div>
          </div>

        </div>

      </div>
    `;
  }
}



