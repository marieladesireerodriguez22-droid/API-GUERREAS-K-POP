import { setupChat } from './chat.js';

const views = {
    '/home': `
        <div class="view">
            <h2>Bienvenido a K-Pop Warriors Chat</h2>
            <p>Selecciona a tu guerrera:</p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <a href="/chat?character=Rumi" data-link>
                    <img src="/images/Rumi.png" alt="Rumi" style="width:100px;">
                    <p>Rumi</p>
                </a>
                <a href="/chat?character=Mira" data-link>
                    <img src="/images/MIRA.png" alt="Mira" style="width:100px;">
                    <p>Mira</p>
                </a>
                <a href="/chat?character=Zoey" data-link>
                    <img src="/images/Zoey.png" alt="Zoey" style="width:100px;">
                    <p>Zoey</p>
                </a>
                <a href="/chat?character=Capuchina" data-link>
                    <img src="/images/Capuchina.png" alt="Capuchina" style="width:100px;">
                    <p>Capuchina</p>
                </a>
            </div>
        </div>
    `,
    '/chat': `
        <div class="view">
            <h2>Sala de Chat</h2>
            <div id="chat-container"></div>
            <input type="text" id="message-input" placeholder="Mensaje...">
            <button id="send-btn">Enviar</button>
        </div>
    `,
    '/about': `
        <div class="view">
            <h2>Acerca del Proyecto</h2>
            <p>Esta aplicación es una SPA interactiva desarrollada con JavaScript vainilla, History API y conectada de forma segura a Google Gemini mediante Vercel Serverless Functions.</p>
        </div>
    `
};

const render = (path, search = '') => {
    const app = document.getElementById('app');
    if (!app) return;
    
    const cleanPath = path.split('?')[0];
    app.innerHTML = views[cleanPath] || views['/home'];
    
    // Procesar parámetros de URL (ej: ?character=Rumi) tanto de la navegación como de la búsqueda actual
    const queryString = search || window.location.search;
    if (queryString) {
        const urlParams = new URLSearchParams(queryString);
        const char = urlParams.get('character');
        if (char) {
            sessionStorage.setItem('selectedCharacter', char);
        }
    }

    if (cleanPath === '/chat') {
        setupChat();
    }
};

const navigate = (url) => {
    const [path, search] = url.split('?');
    
    if (search) {
        const urlParams = new URLSearchParams(search);
        const char = urlParams.get('character');
        if (char) {
            sessionStorage.setItem('selectedCharacter', char);
        }
    }

    window.history.pushState({}, '', url);
    render(path, search ? '?' + search : '');
};

// Manejo de clics para la SPA usando History API
document.addEventListener('click', (e) => {
    const link = e.target.closest('[data-link]');
    if (link) {
        e.preventDefault();
        const href = link.getAttribute('href');
        navigate(href);
    }
});

// Manejo de los botones de navegación del navegador (Back / Forward)
window.addEventListener('popstate', () => {
    render(window.location.pathname, window.location.search);
});

document.addEventListener('DOMContentLoaded', () => {
    render(window.location.pathname, window.location.search);
});