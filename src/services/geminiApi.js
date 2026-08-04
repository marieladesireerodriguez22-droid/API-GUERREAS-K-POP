// src/services/geminiApi.js
export async function sendMessage(message, character = 'Rumi') {
    const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, character })
    });
    
    if (!response.ok) throw new Error('Error en el servidor');
    return await response.json();
}