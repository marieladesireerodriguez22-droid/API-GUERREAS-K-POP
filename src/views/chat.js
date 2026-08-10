// src/views/chat.js
export function renderChat() {
    const character = sessionStorage.getItem('selectedCharacter') || 'Rumi';
    
    return `
        <div class="view chat-view">
            <div class="chat-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <div class="char-info">
                    <h2>Sala de Chat</h2>
                    <span id="active-character-badge" class="badge" style="font-weight: bold; color: #ff4081;">
                        💬 Chateando con: ${character}
                    </span>
                </div>
                <button id="clear-chat-btn" class="btn-clear" title="Borrar historial de esta charla" style="padding: 6px 12px; background: #e0e0e0; border: none; border-radius: 4px; cursor: pointer;">
                    🗑️ Limpiar Chat
                </button>
            </div>
            
            <div id="chat-container" class="chat-messages-container" style="border: 1px solid #ccc; border-radius: 8px; padding: 15px; height: 350px; overflow-y: auto; margin-bottom: 15px; background: #fafafa;"></div>
            
            <div id="status" class="chat-status" style="margin-bottom: 10px; font-style: italic; color: #666;"></div>
            
            <div class="chat-input-area" style="display: flex; gap: 10px;">
                <input type="text" id="message-input" placeholder="Escribe un mensaje..." autocomplete="off" style="flex: 1; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
                <button id="send-btn" style="padding: 10px 20px; background: #ff4081; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">Enviar</button>
            </div>
        </div>
    `;
}