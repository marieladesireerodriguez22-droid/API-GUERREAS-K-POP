// src/router/router.js
import { renderHome } from '../views/home.js';
import { renderChat } from '../views/chat.js';
import { renderAbout } from '../views/about.js';
import { setupChat } from '../ui/chatUi.js';

const routes = {
    '/home': renderHome,
    '/chat': renderChat,
    '/about': renderAbout
};

export function render(path, search = '') {
    const app = document.getElementById('app');
    if (!app) return;
    
    const cleanPath = path.split('?')[0];
    const renderView = routes[cleanPath] || routes['/home'];
    
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