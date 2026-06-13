import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

// Assume presetsData is imported from your static clean JSON file
import { presetsData as rawPresetsData } from './presets-data.js';
import './j6-preset-list.js';
import './j6-preset-detail.js';

// Map raw data to standard property names expected by the app components
const presetsData = rawPresetsData.map((p: any) => ({
  ...p,
  id: p.bankPatch,
  name: p.soundNameCategory,
  notes: p.notesDescription || '',
  delayEffects: p.delayReverb
}));

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
    @media (min-width: 768px) {
      .layout {
        grid-template-columns: 400px 1fr;
      }
    }
  `;

  @state() private searchSearch = '';
  @state() private activeCategory = 'All';
  @state() private selectedPreset = presetsData[0]; // Default to 1-1

  get filteredPresets() {
    return presetsData.filter(preset => {
      const matchesSearch = preset.name.toLowerCase().includes(this.searchSearch.toLowerCase()) || 
                            preset.notes.toLowerCase().includes(this.searchSearch.toLowerCase());
      const matchesCategory = this.activeCategory === 'All' || preset.category === this.activeCategory;
      return matchesSearch && matchesCategory;
    });
  }

  render() {
    return html`
      <header>
        <h1>Roland J-6 Preset Explorer</h1>
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