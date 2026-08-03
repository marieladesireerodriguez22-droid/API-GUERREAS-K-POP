import { setupChat } from './chat.js';

const views = {
    '/home': `
        <div class="view">
            <h2>Bienvenido a K-Pop Warriors Chat</h2>
            <p>Selecciona a tu guerrera:</p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <div onclick="window.appNavigate('/chat?character=Rumi')" style="cursor: pointer; text-align: center;">
                    <img src="/images/Rumi.png" alt="Rumi" style="width:100px; display: block; margin: 0 auto;">
                    <p>Rumi</p>
                </div>
                <div onclick="window.appNavigate('/chat?character=Mira')" style="cursor: pointer; text-align: center;">
                    <img src="/images/MIRA.png" alt="Mira" style="width:100px; display: block; margin: 0 auto;">
                    <p>Mira</p>
                </div>
                <div onclick="window.appNavigate('/chat?character=Zoey')" style="cursor: pointer; text-align: center;">
                    <img src="/images/Zoey.png" alt="Zoey" style="width:100px; display: block; margin: 0 auto;">
                    <p>Zoey</p>
                </div>
                <div onclick="window.appNavigate('/chat?character=Capuchina')" style="cursor: pointer; text-align: center;">
                    <img src="/images/Capuchina.png" alt="Capuchina" style="width:100px; display: block; margin: 0 auto;">
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
            <p>Esta aplicación es una SPA interactiva desarrollada con JavaScript vainilla, History API y conectada a Google Gemini mediante Vercel Serverless Functions.</p>
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

// Exponemos la función globalmente para que los onclick directos funcionen siempre
window.appNavigate = navigate;

document.addEventListener('click', (e) => {
    const link = e.target.closest('a[data-link]');
    if (link) {
        e.preventDefault();
        const href = link.getAttribute('href');
        navigate(href);
    }
});

window.addEventListener('popstate', () => {
    render(window.location.pathname, window.location.search);
});

document.addEventListener('DOMContentLoaded', () => {
    render(window.location.pathname, window.location.search);
});