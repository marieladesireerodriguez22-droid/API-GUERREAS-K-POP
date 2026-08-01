// Lógica para enviar mensajes a la API de forma aislada para poder testearla
export async function sendMessage(message, character = 'Rumi') {
    const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, character })
    });
    
    if (!response.ok) throw new Error('Error en el servidor');
    return await response.json();
}

// Función que inicializa los eventos del chat en la interfaz
export function setupChat() {
    const messageInput = document.getElementById('message-input');
    const sendBtn = document.getElementById('send-btn');
    if (!sendBtn || !messageInput) return;

    const handleSendMessage = async () => {
        const text = messageInput.value.trim();
        if (!text) return;

        appendMessage(text, 'user-message');
        messageInput.value = '';
        showTypingIndicator();

        try {
            const data = await sendMessage(text, sessionStorage.getItem('selectedCharacter') || 'Rumi');
            removeTypingIndicator();
            appendMessage(data.reply, 'bot-message');
        } catch (error) {
            removeTypingIndicator();
            appendMessage('¡Hmpf! No me pude conectar con el servidor.', 'bot-message');
        }
    };

    sendBtn.addEventListener('click', handleSendMessage);
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSendMessage();
        }
    });
}

function appendMessage(text, className) {
    const chatContainer = document.getElementById('chat-container');
    if (!chatContainer) return;

    const messageDiv = document.createElement('div');
    messageDiv.className = className;
    
    const textP = document.createElement('p');
    textP.style.margin = '0';
    textP.textContent = text;
    messageDiv.appendChild(textP);

    const timeSpan = document.createElement('span');
    const now = new Date();
    timeSpan.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
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
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function showTypingIndicator() {
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

function removeTypingIndicator() {
    const typingDiv = document.getElementById('typing-indicator');
    if (typingDiv) typingDiv.remove();
}