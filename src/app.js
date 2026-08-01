/* STREAMING_CHUNK:Importando funciones y definiendo las vistas */
import { setupChat } from './chat.js';

const views = {
    '/home': `
        <div class="view">
            <h2>Bienvenido a K-Pop Warriors Chat</h2>
            <p>Selecciona a tu guerrera:</p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <a href="/chat?character=rumi" data-link>Rumi</a>
                <a href="/chat?character=mira" data-link>Mira</a>
                <a href="/chat?character=zoey" data-link>Zoey</a>
                <a href="/chat?character=capuchina" data-link>Capuchina</a>
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
    `
};

const app = document.getElementById('app');

/* STREAMING_CHUNK:Definiendo lógica de navegación */
const navigate = (href) => {
    if (href.includes('?')) {
        const urlParams = new URLSearchParams(href.split('?')[1]);
        const char = urlParams.get('character');
        if (char) sessionStorage.setItem('selectedCharacter', char);
        href = '/chat';
    }
    window.history.pushState({}, '', href);
    render(href);
};

const render = (path) => {
    const cleanPath = path.split('?')[0];
    app.innerHTML = views[cleanPath] || views['/home'];
    if (cleanPath === '/chat') setupChat();
};

/* STREAMING_CHUNK:Interceptando clics para evitar recargas */
document.addEventListener('click', (e) => {
    const link = e.target.closest('[data-link]');
    if (link) {
        e.preventDefault();
        navigate(link.getAttribute('href'));
    }
});

window.onpopstate = () => render(window.location.pathname);
render(window.location.pathname);