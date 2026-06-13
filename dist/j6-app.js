var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
// Assume presetsData is imported from your static clean JSON file
import { presetsData as rawPresetsData } from './presets-data.js';
import './j6-preset-list.js';
import './j6-preset-detail.js';
// Map raw data to standard property names expected by the app components
const presetsData = rawPresetsData.map((p) => ({
    ...p,
    id: p.bankPatch,
    name: p.soundNameCategory,
    notes: p.notesDescription || '',
    delayEffects: p.delayReverb
}));
let J6App = class J6App extends LitElement {
    constructor() {
        super(...arguments);
        this.searchSearch = '';
        this.activeCategory = 'All';
        this.selectedPreset = presetsData[0]; // Default to 1-1
    }
    static { this.styles = css `
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
    @media (min-width: 768px) {
      .layout {
        grid-template-columns: 400px 1fr;
      }
    }
  `; }
    get filteredPresets() {
        return presetsData.filter(preset => {
            const matchesSearch = preset.name.toLowerCase().includes(this.searchSearch.toLowerCase()) ||
                preset.notes.toLowerCase().includes(this.searchSearch.toLowerCase());
            const matchesCategory = this.activeCategory === 'All' || preset.category === this.activeCategory;
            return matchesSearch && matchesCategory;
        });
    }
    render() {
        return html `
      <header>
        <h1>Roland J-6 Preset Explorer</h1>
      </header>
      
      <div class="layout">
        <j6-preset-list 
          .presets=${this.filteredPresets}
          .selectedId=${this.selectedPreset.id}
          @preset-selected=${(e) => this.selectedPreset = e.detail}>
        </j6-preset-list>

        <j6-preset-detail 
          .preset=${this.selectedPreset}>
        </j6-preset-detail>
      </div>
    `;
    }
};
__decorate([
    state()
], J6App.prototype, "searchSearch", void 0);
__decorate([
    state()
], J6App.prototype, "activeCategory", void 0);
__decorate([
    state()
], J6App.prototype, "selectedPreset", void 0);
J6App = __decorate([
    customElement('j6-app')
], J6App);
export { J6App };
