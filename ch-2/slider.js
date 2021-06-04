class Slider extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="bg-overlay"></div>
    <div class="thumb"></div>

    <style>
      wcia-slider {
        background-image: linear-gradient(45deg, #ccc 25%, transparent 25%),linear-gradient(-45deg, #ccc 25%,transparent 25%),linear-gradient(45deg, transparent 75%, #ccc 75%),linear-gradient(-45deg, transparent 75%, #ccc 75%);
        background-position: 0 0, 0 8px, 8px -8px, -8px 0px;
        background-size: 16px 16px;
        border-radius: 3px;
        display: inline-block;
        position: relative;
        width: 500px;
        height: 50px
      }

      .bg-overlay {
        width: 100%;
        height: 100%;
        position: absolute;
        background: linear-gradient(to right, #ff0000 0%, #ff000000 100%);
      }

      .thumb {
        margin-top: -1px;
        left: 250px;
        width: 5px;
        height: calc(100% - 5px);
        position: absolute;
        border: 3px solid white;
        border-radius: 3px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        pointer-events: none;
      }
    </style>
    `;
  }
}
if (!customElements.get('wcia-slider')) {
  customElements.define('wcia-slider', Slider);
}

export default Slider