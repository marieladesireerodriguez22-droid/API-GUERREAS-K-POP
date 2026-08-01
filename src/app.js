console.log("¡El app.js se está ejecutando correctamente!");

import { setupChat } from './chat.js';

const views = {
    '/home': `
        <div class="view">
            <h2>Bienvenido a K-Pop Warriors Chat</h2>
            <p>Selecciona a tu guerrera:</p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <a href="/chat?character=rumi" data-link class="char-link">Rumi</a>
                <a href="/chat?character=mira" data-link class="char-link">Mira</a>
                <a href="/chat?character=zoey" data-link class="char-link">Zoey</a>
                <a href="/chat?character=capuchina" data-link class="char-link">Capuchina</a>
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
    // Si la URL contiene parámetros, guardamos el personaje
    if (url.includes('?')) {
        const urlParams = new URLSearchParams(url.split('?')[1]);
        const char = urlParams.get('character');
        if (char) sessionStorage.setItem('selectedCharacter', char);
    }
    
    // Navegamos a la ruta /chat internamente
    window.history.pushState({}, '', '/chat');
    render('/chat');
};

const render = (path) => {
    // Limpiamos la ruta por si tiene parámetros
    const cleanPath = path.split('?')[0];
    app.innerHTML = views[cleanPath] || views['/home'];
    
    if (cleanPath === '/chat') {
        setupChat();
    }
};

// Captura de clics para navegación SPA
document.addEventListener('click', (e) => {
    const link = e.target.closest('[data-link]');
    
    if (link) {
        e.preventDefault();
        const href = link.getAttribute('href');
        console.log("Navegando a:", href);
        navigate(href);
    }
});

window.onpopstate = () => render(window.location.pathname);
render(window.location.pathname);