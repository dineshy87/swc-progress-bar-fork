// By Westbrook Johnson @westbrookj

import {
  LitElement,
  html,
  customElement,
  TemplateResult,
  css,
} from "lit-element";
import "@spectrum-web-components/progress-bar/sp-progress-bar.js";
import '@spectrum-web-components/progress-circle/sp-progress-circle.js';
import '@spectrum-web-components/meter/sp-meter.js';



@customElement("progress-and-meter")
export default class ProgressAndMeter extends LitElement {
  static styles = [
    css`
      :host {
        width: auto;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
      }

      sp-progress-bar, sp-meter { 
        padding: 18px;
      }

      

      h2 {padding-bottom: 0.5em;text-align: left;width:100%;background-color: var(--spectrum-global-color-gray-100);border-bottom:1px solid; border-bottom-color: var(--spectrum-body-text-color);}
    `,
  ];
  protected render(): TemplateResult {
    return html`
    <h2>Progress Bar</h2>
      <sp-progress-bar label="Using label" progress="71" small></sp-progress-bar>
      <sp-progress-bar label="Using label" indeterminate></sp-progress-bar>
      <sp-progress-bar aria-label="Using aria-label" indeterminate></sp-progress-bar>
      <sp-progress-bar progress="71" small>Using text within</sp-progress-bar>
      <sp-progress-bar label="Am from label" progress="79" small>Am text within</sp-progress-bar>
      
      <div
          style="width: var(--spectrum-global-dimension-size-3000); height: var(--spectrum-global-dimension-size-2000); display: flex; flex-direction: column; align-items: center; justify-content: space-around; background-color: var(--spectrum-alias-background-color-modal-overlay);"
      >
          <sp-progress-bar
              label="Load overbackground"
              progress="77"
              over-background
          ></sp-progress-bar>
      </div>

      <h2>Progress Circle</h2>

      <div style="width: 250px; height: 150px; display: flex; align-items: center; justify-content: space-around;">
        <sp-progress-circle label="Small progress circle" progress="71" size="s"></sp-progress-circle>
        <sp-progress-circle progress="22">Medium progress circle</sp-progress-circle>
        <sp-progress-circle label="Large progress circle" progress="86" size="l"></sp-progress-circle>
      </div>
      <div style="width: 250px; height: 150px; display: flex; align-items: center; justify-content: space-around;  background-color: rgba(0,0,0,0.4);">
        <sp-progress-circle label="Small progress circle" progress="42" static="white" size="s"></sp-progress-circle>
        <sp-progress-circle label="Medium progress circle" progress="7" static="white"></sp-progress-circle>
        <sp-progress-circle label="Large progress circle" progress="68" static="white" size="l"></sp-progress-circle>
      </div>
      <div style="width: 250px; height: 150px; display: flex; align-items: center; justify-content: space-around;">
        <sp-progress-circle label="Small progress circle" indeterminate size="s"></sp-progress-circle>
        <sp-progress-circle label="Medium progress circle" indeterminate></sp-progress-circle>
        <sp-progress-circle label="Large progress circle" indeterminate size="l"></sp-progress-circle>
      </div>
      <h2>Meter</h2>

      <sp-meter size="m" progress="71" label="Using label"></sp-meter>
      <sp-meter size="m" progress="71">Using text within</sp-meter>
      <div style="width: var(--spectrum-global-dimension-size-3000); height: var(--spectrum-global-dimension-size-2000); display: flex; flex-direction: column; align-items: center; justify-content: space-around; background-color: var(--spectrum-alias-background-color-modal-overlay); margin-top: 12px;">
        <sp-meter progress="42" over-background label="Tasks Completed">Using both</sp-meter>
      </div>
    `;
  }
}
