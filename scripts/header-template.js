class RedHeader extends HTMLElement {
    constructor() {
        super();
    }
  
    connectedCallback() {
        let shadowRoot = this.attachShadow({ mode: 'open' });
        const template = document.querySelector('#header-template');
        const instance = template.content.cloneNode(true);
        shadowRoot.appendChild(instance);
  
        let link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
        shadowRoot.appendChild(link);
  
        let script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
        script.onload = () => {
            // Añadir el evento de clic para abrir el modal
            const openModalLink = shadowRoot.querySelector('#open-modal-link');
            openModalLink.addEventListener('click', (e) => {
                e.preventDefault();
                const modalElement = shadowRoot.querySelector('#infoModal');
                const modal = new bootstrap.Modal(modalElement);
                modal.show();
            });
        };
        shadowRoot.appendChild(script);
    }
  }
  
  window.customElements.define('header-fastfood', RedHeader);