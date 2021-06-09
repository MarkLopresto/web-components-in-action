class WCIAHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <h1 class="centered">${this.title}</h1>
      </header>
    `;
  }
}

if (!customElements.get(
  'header')) {
    customElements.define('wcia-header', WCIAHeader);
}

export default WCIAHeader