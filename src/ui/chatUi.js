// src/ui/chatUi.js
import { sendMessage } from '../services/geminiApi.js';

// Obtiene la clave única de localStorage según el personaje actual
function getStorageKey() {
    const character = sessionStorage.getItem('selectedCharacter') || 'Rumi';
    return `chat_history_${character}`;
}

// Carga el historial guardado en localStorage
function loadHistory() {
    const chatContainer = document.getElementById('chat-container');
    if (!chatContainer) return;
    
    chatContainer.innerHTML = '';
    const historyJson = localStorage.getItem(getStorageKey());
    
    if (historyJson) {
        try {
            const history = JSON.parse(historyJson);
            history.forEach(msg => {
                appendMessageToDOM(msg.text, msg.className, msg.time, false);
            });
        } catch (e) {
            console.error("Error al cargar el historial", e);
        }
    }
}

// Guarda un mensaje en el localStorage del personaje
function saveMessageToStorage(text, className, time) {
    const key = getStorageKey();
    const historyJson = localStorage.getItem(key);
    let history = historyJson ? JSON.parse(historyJson) : [];
    
    history.push({ text, className, time });
    localStorage.setItem(key, JSON.stringify(history));
}

export function setupChat() {
    const messageInput = document.getElementById('message-input');
    const sendBtn = document.getElementById('send-btn');
    const clearBtn = document.getElementById('clear-chat-btn');
    
    if (!sendBtn || !messageInput) return;

    // Cargar el historial correspondiente al personaje al entrar a la sala
    loadHistory();

    // Botón para limpiar el chat a voluntad
    if (clearBtn) {
        clearBtn.onclick = () => {
            if (confirm("¿Estás segura de que quieres borrar el historial de esta charla?")) {
                localStorage.removeItem(getStorageKey());
                const chatContainer = document.getElementById('chat-container');
                if (chatContainer) chatContainer.innerHTML = '';
            }
        };
    }

    const handleSendMessage = async () => {
        const text = messageInput.value.trim();
        if (!text) return;

        const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        appendMessage(text, 'user-message', timeNow);
        messageInput.value = '';
        showTypingIndicator();

        const currentCharacter = sessionStorage.getItem('selectedCharacter') || 'Rumi';
        const data = await sendMessage(text, currentCharacter);
        
        removeTypingIndicator();
        const replyTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        appendMessage(data.reply, 'bot-message', replyTime);
    };

    sendBtn.addEventListener('click', handleSendMessage);
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSendMessage();
        }
    });
}

// Función pública para añadir y opcionalmente guardar mensajes
export function appendMessage(text, className, customTime = null, save = true) {
    const time = customTime || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    appendMessageToDOM(text, className, time, true);

    if (save) {
        saveMessageToStorage(text, className, time);
    }
}

// Renderiza visualmente el mensaje en el DOM
function appendMessageToDOM(text, className, time, scrollToBottom = true) {
    const chatContainer = document.getElementById('chat-container');
    if (!chatContainer) return;

    const messageDiv = document.createElement('div');
    messageDiv.className = className;
    
    const textP = document.createElement('p');
    textP.style.margin = '0';
    textP.textContent = text;
    messageDiv.appendChild(textP);

    const timeSpan = document.createElement('span');
    timeSpan.textContent = time;
    timeSpan.style.display = 'block';
    timeSpan.style.fontSize = '0.7rem';
    timeSpan.style.marginTop = '4px';
    timeSpan.style.textAlign = 'right';
    timeSpan.style.opacity = '0.7';
    messageDiv.appendChild(timeSpan);
    
    messageDiv.style.margin = '0.5rem 0';
    messageDiv.style.padding = '0.6rem 1rem';
    messageDiv.style.borderRadius = '10px';
    messageDiv.style.maxWidth = '80%';

    if (className === 'user-message') {
        messageDiv.style.background = '#ff2a75';
        messageDiv.style.color = 'white';
        messageDiv.style.marginLeft = 'auto';
    } else {
        messageDiv.style.background = '#e9ecef';
        messageDiv.style.color = '#333';
        messageDiv.style.marginRight = 'auto';
    }

    chatContainer.appendChild(messageDiv);
    if (scrollToBottom) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
}

export function showTypingIndicator() {
    const chatContainer = document.getElementById('chat-container');
    if (!chatContainer) return;

    const typingDiv = document.createElement('div');
    typingDiv.id = 'typing-indicator';
    typingDiv.className = 'bot-message';
    typingDiv.style.margin = '0.5rem 0';
    typingDiv.style.padding = '0.6rem 1rem';
    typingDiv.style.borderRadius = '10px';
    typingDiv.style.background = '#e9ecef';
    typingDiv.style.color = '#555';
    typingDiv.style.marginRight = 'auto';
    typingDiv.style.fontStyle = 'italic';
    typingDiv.innerHTML = 'La guerrera está escribiendo<span class="dots">...</span>';
    
    chatContainer.appendChild(typingDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

export function removeTypingIndicator() {
    const typingDiv = document.getElementById('typing-indicator');
    if (typingDiv) typingDiv.remove();
}