class FooterComponent extends HTMLElement {
    constructor() {
        super();
        const template = document.getElementById('footer-template').content;
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(template.cloneNode(true));
    }
}

customElements.define('footer-component', FooterComponent);
