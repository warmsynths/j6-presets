var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let J6PresetDetail = class J6PresetDetail extends LitElement {
    constructor() {
        super(...arguments);
        this.preset = null;
    }
    static { this.styles = css `
    :host {
      display: block;
      background: #1e1e1e;
      border: 1px solid #333;
      border-radius: 8px;
      padding: 1.5rem;
    }
    .envelope-visualizer {
      background: #000;
      border-radius: 4px;
      padding: 0.5rem;
      margin: 1rem 0;
    }
    svg {
      width: 100%;
      height: 120px;
    }
    path {
      stroke: #ff5500; /* Roland orange vibe */
      stroke-width: 3;
      fill: none;
    }
    .params-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      margin-bottom: 1rem;
    }
    .param-group {
      background: #2a2a2a;
      padding: 1rem;
      border-radius: 4px;
    }
    .param-group h4 {
      margin-top: 0;
      color: #ff5500;
      border-bottom: 1px solid #444;
      padding-bottom: 0.5rem;
    }
    .param-group p {
      margin: 0.5rem 0;
    }
  `; }
    // Map text descriptors to standard X/Y spacing points for an SVG path
    getEnvelopePath() {
        if (!this.preset)
            return 'M 0 100 L 100 100';
        // Default base coordinates: Start at bottom left (0, 100)
        let attackX = this.preset.attack === 'Fast' ? 10 : this.preset.attack === 'Mid' ? 40 : 80;
        let decayX = this.preset.decay === 'Fast' ? attackX + 20 : attackX + 50;
        let sustainY = this.preset.sustain === 'Max' ? 10 : this.preset.sustain === 'Mid' ? 50 : 90;
        let releaseX = this.preset.release === 'Fast' ? decayX + 20 : decayX + 70;
        // Build the SVG path string: Move to start, line to Peak, line to Sustain, line to End
        return `M 10 100 L ${attackX} 10 L ${decayX} ${sustainY} L ${releaseX - 20} ${sustainY} L ${releaseX} 100`;
    }
    render() {
        if (!this.preset)
            return html `<p>Select a preset to see details</p>`;
        return html `
      <h2>[${this.preset.id}] ${this.preset.name}</h2>
      <p class="description">${this.preset.notes}</p>
      
      <h3>Amp Envelope Visualizer</h3>
      <div class="envelope-visualizer">
        <svg viewBox="0 0 300 120">
          <line x1="0" y1="100" x2="300" y2="100" stroke="#222" />
          <path d=${this.getEnvelopePath()} />
        </svg>
        <div style="display: flex; justify-content: space-between; font-size: 12px; color: #888;">
          <span>A: ${this.preset.attack}</span>
          <span>D: ${this.preset.decay}</span>
          <span>S: ${this.preset.sustain}</span>
          <span>R: ${this.preset.release}</span>
        </div>
      </div>

      <div class="params-grid">
        <div class="param-group">
          <h4>Oscillator</h4>
          <p><strong>Waveform:</strong> ${this.preset.waveformOscType}</p>
        </div>
        <div class="param-group">
          <h4>Filter</h4>
          <p><strong>Cutoff:</strong> ${this.preset.filterFreq}</p>
          <p><strong>Resonance:</strong> ${this.preset.resonance}</p>
          <p><strong>Env Mod:</strong> ${this.preset.envMod}</p>
        </div>
        <div class="param-group" style="grid-column: 1 / -1;">
          <h4>Effects</h4>
          <p><strong>Delay/Reverb:</strong> ${this.preset.delayEffects || 'Off'}</p>
          <p><strong>Chorus:</strong> ${this.preset.chorus || 'Off'}</p>
        </div>
      </div>
    `;
    }
};
__decorate([
    property({ type: Object })
], J6PresetDetail.prototype, "preset", void 0);
J6PresetDetail = __decorate([
    customElement('j6-preset-detail')
], J6PresetDetail);
export { J6PresetDetail };
