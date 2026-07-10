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

  private renderOscilloscope(pattern: string) {
    const p = pattern.toUpperCase();
    let bars: number[] = [];
    
    if (p.includes('UP&DOWN') || p.includes('U/D') || p.includes('ALT')) {
      bars = [3, 6, 9, 12, 15, 18, 15, 12, 9, 6, 3];
    } else if (p.includes('DOWN&UP') || p.includes('D/U')) {
      bars = [18, 15, 12, 9, 6, 3, 6, 9, 12, 15, 18];
    } else if (p.includes('UP')) {
      bars = [3, 6, 9, 12, 15, 18];
    } else if (p.includes('DOWN')) {
      bars = [18, 15, 12, 9, 6, 3];
    } else if (p.includes('RANDOM') || p.includes('RND') || p.includes('R')) {
      bars = [6, 18, 3, 14, 9, 17, 4, 11];
    } else if (p.includes('CHORD') || p.includes('POLY') || p.includes('SYNC')) {
      bars = [15, 15, 0, 15, 15, 0, 15, 15];
    } else if (p.includes('BASS') || p.includes('ROOT')) {
      bars = [6, 6, 6, 6, 6, 6, 6, 6];
    } else {
      bars = [12, 3, 12, 3, 12, 3, 12, 3];
    }

    const maxBar = Math.max(...bars);
    const scale = 20 / (maxBar || 20);
    
    const svgWidth = bars.length * 16;

    return html`
      <svg width="${svgWidth}" height="80" viewBox="0 0 ${svgWidth} 80" class="osc-svg">
        <defs>
          <linearGradient id="osc-glow" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#ff3300" stop-opacity="0.3" />
            <stop offset="100%" stop-color="#ff6600" stop-opacity="1" />
          </linearGradient>
        </defs>
        ${bars.map((h, i) => html`
          <rect x="${i * 16}" y="${80 - (h * scale * 3.5)}" width="12" height="${h * scale * 3.5}" rx="2" fill="url(#osc-glow)" class="osc-bar" style="animation-delay: ${i * 0.05}s" />
        `)}
      </svg>
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

    /* Category Switch */
    .switch-container {
      background: #060608;
      border: 1px solid #1a1b20;
      border-radius: 4px;
      position: relative;
      height: 40px;
      display: flex;
      box-shadow: inset 0 2px 5px rgba(0,0,0,0.5);
    }

    .switch-indicator {
      position: absolute;
      top: 2px;
      bottom: 2px;
      width: calc(33.333% - 4px);
      background: #2a2b30;
      border: 1px solid #3d3e45;
      border-radius: 2px;
      transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
      box-shadow: 0 2px 6px rgba(0,0,0,0.8), inset 0 1px 1px rgba(255,255,255,0.1);
      pointer-events: none;
    }

    .switch-indicator::after {
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 4px; height: 12px;
      background: #ff5d00;
      border-radius: 2px;
      box-shadow: 0 0 4px #ff5d00;
    }

    .switch-indicator.pos-0 { transform: translateX(2px); }
    .switch-indicator.pos-1 { transform: translateX(calc(100% + 6px)); }
    .switch-indicator.pos-2 { transform: translateX(calc(200% + 10px)); }

    .switch-btn {
      flex: 1;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      font-weight: 800;
      color: #6a6b70;
      cursor: pointer;
      user-select: none;
      transition: color 0.2s;
    }

    .switch-btn.active {
      color: #fff;
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
      background: #060608;
      border-radius: 6px;
      border: 2px solid #000;
      box-shadow: inset 0 4px 16px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.05);
      height: 180px;
      position: relative;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .oscilloscope-screen::after {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.04), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.04));
      background-size: 100% 3px, 3px 100%;
      pointer-events: none;
    }

    /* Grid lines */
    .osc-grid {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background-image: 
        linear-gradient(#1a2b3c 1px, transparent 1px),
        linear-gradient(90deg, #1a2b3c 1px, transparent 1px);
      background-size: 20px 20px;
      opacity: 0.3;
    }

    @keyframes osc-pulse {
      0% { filter: drop-shadow(0 0 4px #ff5d00); opacity: 0.8; }
      50% { filter: drop-shadow(0 0 12px #ff5d00); opacity: 1; transform: scaleY(1.02); }
      100% { filter: drop-shadow(0 0 4px #ff5d00); opacity: 0.8; }
    }

    .osc-svg {
      z-index: 1;
      overflow: visible;
    }

    .osc-bar {
      animation: osc-pulse 2s infinite ease-in-out;
      transform-origin: bottom;
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
        
        <!-- Controls Column -->
        <div class="controls-section">
          
          <div class="control-block">
            <div class="control-label">CATEGORY</div>
            <div class="switch-container">
              <div class="switch-indicator pos-${this.selectedCategoryIndex}"></div>
              ${stylesData.style_categories.map((cat, idx) => html`
                <div 
                  class="switch-btn ${this.selectedCategoryIndex === idx ? 'active' : ''}"
                  @click=${() => this.setCategory(idx)}
                >
                  ${cat.category_name.split(' ')[0]}
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
            <div class="control-subtext" title="${currentVariation.pattern}">
              <strong>${currentVariation.pattern}</strong>
            </div>
          </div>

        </div>

        <!-- Display Column -->
        <div class="display-section">
          
          <div class="oscilloscope-screen">
            <div class="osc-grid"></div>
            ${this.renderOscilloscope(currentVariation.pattern)}
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

