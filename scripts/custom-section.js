class CustomSection extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                section {
                    padding: 60px 0;
                    border-bottom: 1px solid #ddd;
                    position: relative;
                }
                section h1 {
                    margin-top: 10;
                    text-align: left;
                    padding-bottom: 10px;
                    position: relative;
                }
                section h1::before {
                    content: "";
                    display: block;
                    width: 100%;
                    height: 2px;
                    background-color: #717171;
                    position: absolute;
                    top: 0;
                    left: 0;
                }
            </style>
            <section>
                <h1></h1>
                <div class="content">
                    <slot></slot>
                </div>
            </section>
        `;

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.shadowRoot.querySelector('h1').textContent = this.getAttribute('title');
    }
}

customElements.define('custom-section', CustomSection);

