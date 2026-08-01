import { setupChat } from './chat.js';

const views = {
    '/home': `
        <div class="view">
            <h2>Bienvenido a K-Pop Warriors Chat</h2>
            <p>Selecciona a tu guerrera:</p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <a href="/chat?character=rumi" data-link>
                    <img src="/images/Rumi.png" alt="Rumi" style="width:100px;">
                    <p>Rumi</p>
                </a>
                <a href="/chat?character=mira" data-link>
                    <img src="/images/MIRA.png" alt="Mira" style="width:100px;">
                    <p>Mira</p>
                </a>
                <a href="/chat?character=zoey" data-link>
                    <img src="/images/Zoey.png" alt="Zoey" style="width:100px;">
                    <p>Zoey</p>
                </a>
                <a href="/chat?character=capuchina" data-link>
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
    `
};

const render = (path) => {
    const app = document.getElementById('app');
    if (!app) return;
    
    const cleanPath = path.split('?')[0];
    app.innerHTML = views[cleanPath] || views['/home'];
    
    if (cleanPath === '/chat') {
        setupChat();
    }
};

const navigate = (url) => {
    if (url.includes('?')) {
        const urlParams = new URLSearchParams(url.split('?')[1]);
        const char = urlParams.get('character');
        if (char) sessionStorage.setItem('selectedCharacter', char);
    }
    window.history.pushState({}, '', '/chat');
    render('/chat');
};

document.addEventListener('click', (e) => {
    const link = e.target.closest('[data-link]');
    if (link) {
        e.preventDefault();
        const href = link.getAttribute('href');
        navigate(href);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    render(window.location.pathname);
});