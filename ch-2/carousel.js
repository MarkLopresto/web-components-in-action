class PhotoCarousel extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <h2>${this.getAttribute('title')}</h2>
    <h4>by: ${this.getAttribute('author')}</h4>
    <div class="image-container"></div>
    <button class="back">&lt</button>
    <button class="forward">&gt</button>

    <style>
      wcia-photo-carousel {
        width: 500px;
        height: 300px;
        display: flex;
        padding-top: 10px;
        flex-direction: column;
        border-color: black;
        border-width: 1px;
        border-style: solid;
      }

      wcia-photo-carousel h2, h4 {
        margin-bottom: 0;
        margin-top: 0;
        margin-left: 10px;
      }

      wcia-photo-carousel .image-container {
        margin-top: 15px;
        flex: 1;
        background-color: black;
      }
    </style>
    `;
  }
}
if (!customElements.get(
  'wcia-photo-carousel')) {
    customElements.define('wcia-photo-carousel', PhotoCarousel);
}

export default PhotoCarousel
