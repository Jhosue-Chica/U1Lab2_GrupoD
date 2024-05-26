class ProductoElement extends HTMLElement {
    constructor() {
        super();

        // Crea un shadow DOM para el elemento
        const shadowRoot = this.attachShadow({mode: 'open'});

        // Clona el contenido del template y lo agrega al shadow DOM
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                .producto {
                    border: 1px solid #ccc;
                    padding: 10px;
                    width: 250px;
                    text-align: center;
                    background-color: #ffffff;
                }
                .producto img {
                    width: 100px;
                    height: 100px;
                    object-fit: cover;
                    border-radius: 10%;
                    margin-bottom: 10px;
                }
            </style>
            <div class="producto">
                <img id="imagen" src="" alt="Imagen del producto">
                <h3 id="nombre">Nombre del Producto</h3>
                <p id="descripcion">Descripción del Producto</p>
            </div>
        `;
        shadowRoot.appendChild(template.content);
    }

    // Define getters y setters para los atributos del producto
    static get observedAttributes() {
        return ['imagen', 'nombre', 'descripcion'];
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.render();
        }
    }

    render() {
        this.shadowRoot.querySelector('#imagen').src = this.getAttribute('imagen');
        this.shadowRoot.querySelector('#nombre').textContent = this.getAttribute('nombre');
        this.shadowRoot.querySelector('#descripcion').textContent = this.getAttribute('descripcion');
    }
}

// Registra el nuevo elemento personalizado
customElements.define('producto-element', ProductoElement);

