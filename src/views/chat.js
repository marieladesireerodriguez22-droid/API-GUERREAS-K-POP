// src/views/chat.js
export function renderChat() {
    return `
        <div class="view">
            <h2>Sala de Chat</h2>
            <div id="chat-container"></div>
            <div id="status" class="chat-status"></div>
            <div class="chat-input-area">
                <input type="text" id="message-input" placeholder="Escribe un mensaje...">
                <button id="send-btn">Enviar</button>
            </div>
        </div>
    `;
}