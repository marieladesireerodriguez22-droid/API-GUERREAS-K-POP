// src/router/router.js
import { renderHome } from '../views/home.js';
import { renderChat } from '../views/chat.js';
import { renderAbout } from '../views/about.js';
import { setupChat } from '../ui/chatUi.js';

// Vista 404 personalizada solicitada por el profesor (sin navbar rota, solo botón para volver al Home)
function renderNotFound() {
    return `
        <div class="view not-found-view" style="text-align: center; padding: 60px 20px;">
            <h1 style="font-size: 4rem; margin-bottom: 10px;">404</h1>
            <h2>Página no encontrada</h2>
            <p>La ruta que intentaste visitar no existe.</p>
            <br>
            <a href="/home" data-link class="btn-home" style="padding: 12px 24px; background: #ff4081; color: white; text-decoration: none; border-radius: 6px; font-weight: bold;">Volver al Home</a>
        </div>
    `;
}

const routes = {
    '/home': renderHome,
    '/chat': renderChat,
    '/about': renderAbout
};

export function render(path, search = '') {
    const app = document.getElementById('app');
    if (!app) return;
    
    const cleanPath = path.split('?')[0];
    const renderView = routes[cleanPath];

    // Si la ruta no está en las válidas, mostramos la 404 personalizada
    if (!renderView) {
        app.innerHTML = renderNotFound();
        return;
    }
    
    app.innerHTML = renderView();
    
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
}

export function navigate(url) {
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
}

export function initRouter() {
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a[data-link]');
        if (link) {
            e.preventDefault();
            const href = link.getAttribute('href');
            navigate(href);
            return;
        }

        const card = e.target.closest('.char-card');
        if (card) {
            const characterName = card.getAttribute('data-char');
            navigate(`/chat?character=${characterName}`);
        }
    });

    window.addEventListener('popstate', () => {
        render(window.location.pathname, window.location.search);
    });

    render(window.location.pathname, window.location.search);
}