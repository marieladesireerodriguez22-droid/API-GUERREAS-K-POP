import { setupChat } from './chat.js';

const views = {
    '/home': `
        <div class="view">
            <h2>Bienvenido a K-Pop Warriors Chat</h2>
            <p>Selecciona a tu guerrera:</p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <div class="char-card" data-char="Rumi" style="cursor: pointer; text-align: center; border: 1px solid #ddd; padding: 10px; border-radius: 8px;">
                    <img src="/images/Rumi.png" alt="Rumi" style="width:100px; display: block; margin: 0 auto;">
                    <p>Rumi</p>
                </div>
                <div class="char-card" data-char="Mira" style="cursor: pointer; text-align: center; border: 1px solid #ddd; padding: 10px; border-radius: 8px;">
                    <img src="/images/MIRA.png" alt="Mira" style="width:100px; display: block; margin: 0 auto;">
                    <p>Mira</p>
                </div>
                <div class="char-card" data-char="Zoey" style="cursor: pointer; text-align: center; border: 1px solid #ddd; padding: 10px; border-radius: 8px;">
                    <img src="/images/Zoey.png" alt="Zoey" style="width:100px; display: block; margin: 0 auto;">
                    <p>Zoey</p>
                </div>
                <div class="char-card" data-char="Capuchina" style="cursor: pointer; text-align: center; border: 1px solid #ddd; padding: 10px; border-radius: 8px;">
                    <img src="/images/Capuchina..png" alt="Capuchina" style="width:100px; display: block; margin: 0 auto;">
                    <p>Capuchina</p>
                </div>
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
            <p>Esta aplicación es una SPA interactiva desarrollada con JavaScript vainilla y conectada a Google Gemini mediante Vercel Serverless Functions.</p>
        </div>
    `
};

const render = (path, search = '') => {
    const app = document.getElementById('app');
    if (!app) return;
    
    const cleanPath = path.split('?')[0];
    app.innerHTML = views[cleanPath] || views['/home'];
    
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

document.addEventListener('click', (e) => {
    // Interceptar clics en la barra de navegación superior
    const link = e.target.closest('a[data-link]');
    if (link) {
        e.preventDefault();
        const href = link.getAttribute('href');
        navigate(href);
        return;
    }

    // Interceptar clics en las tarjetas de personajes de forma robusta
    const card = e.target.closest('.char-card');
    if (card) {
        const characterName = card.getAttribute('data-char');
        navigate(`/chat?character=${characterName}`);
    }
});

window.addEventListener('popstate', () => {
    render(window.location.pathname, window.location.search);
});

document.addEventListener('DOMContentLoaded', () => {
    render(window.location.pathname, window.location.search);
});