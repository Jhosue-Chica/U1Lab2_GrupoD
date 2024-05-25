class RedHeader extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      let shadowRoot = this.attachShadow({ mode: 'open' });
      const template = document.querySelector('#header-template');
      const instance = template.content.cloneNode(true);
      shadowRoot.appendChild(instance);
    }
  }
  
  window.customElements.define('header-fastfood', RedHeader);
  