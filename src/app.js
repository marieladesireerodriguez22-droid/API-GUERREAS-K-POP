console.log("¡El app.js está vivo y escuchando!");

import { setupChat } from './chat.js';

const views = {
    '/home': `
        <div class="view">
            <h2>Bienvenido a K-Pop Warriors Chat</h2>
            <p>Selecciona a tu guerrera:</p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <a href="/chat?character=Rumi.png" data-link style="padding: 10px; background: #eee; border: 1px solid #000; cursor: pointer;">Rumi</a>
                <a href="/chat?character=MIRA.png" data-link style="padding: 10px; background: #eee; border: 1px solid #000; cursor: pointer;">Mira</a>
                <a href="/chat?character=Zoey.png" data-link style="padding: 10px; background: #eee; border: 1px solid #000; cursor: pointer;">Zoey</a>
                <a href="/chat?character=Capuchina.png" data-link style="padding: 10px; background: #eee; border: 1px solid #000; cursor: pointer;">Capuchina</a>
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

const navigate = (url) => {
    if (url.includes('?')) {
        const urlParams = new URLSearchParams(url.split('?')[1]);
        const char = urlParams.get('character');
        if (char) sessionStorage.setItem('selectedCharacter', char);
    }
    
    window.history.pushState({}, '', '/chat');
    render('/chat');
};

const render = (path) => {
    const cleanPath = path.split('?')[0];
    app.innerHTML = views[cleanPath] || views['/home'];
    
    if (cleanPath === '/chat') {
        setupChat();
    }
};

document.addEventListener('click', (e) => {
    const link = e.target.closest('[data-link]');
    if (link) {
        e.preventDefault();
        const href = link.getAttribute('href');
        console.log("Navegando a:", href);
        navigate(href);
    }
});

render(window.location.pathname);
1