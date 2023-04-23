import { html } from "lit-html";
import "./index.ts";
import "@spectrum-web-components/theme/sp-theme.js";
import "@spectrum-web-components/theme/src/themes.js";
import "@spectrum-web-components/theme/src/express/themes.js";

const customStyles = html`
  <style>
  sp-theme {
              overflow-x: hidden;
              display: block;
              box-sizing: border-box;
              width: 100%;
              min-height: 40vh;
              padding: var(--spectrum-global-dimension-size-100)
                  var(--spectrum-global-dimension-size-100)
                  calc(
                      2 * var(--spectrum-alias-focus-ring-size) +
                          var(--spectrum-alias-item-height-m)
                  );
              box-sizing: border-box;
              background-color: var(--spectrum-global-color-gray-100);
              color: var(
                  --spectrum-body-text-color,
                  var(--spectrum-alias-text-color)
              );
            }
  </style>
`;

export const story1 = () => html`
${customStyles}
  <sp-theme
    theme="spectrum"
    color="lightest"
    scale="medium"
    dir="ltr"
  >
    <my-progress-bar></my-progress-bar>
  </sp-theme>

  <sp-theme
    theme="spectrum"
    color="light"
    scale="medium"
    dir="ltr"
    part="container"
  >
    <my-progress-bar></my-progress-bar>
  </sp-theme>

  <sp-theme
    theme="spectrum"
    color="dark"
    scale="medium"
    dir="ltr"
    part="container"
  >
    <my-progress-bar></my-progress-bar>
  </sp-theme>

  <sp-theme
    theme="spectrum"
    color="darkest"
    scale="medium"
    dir="ltr"
    part="container"
  >
    <my-progress-bar></my-progress-bar>
  </sp-theme>
`;
