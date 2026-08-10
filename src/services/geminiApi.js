// src/services/geminiApi.js
export async function sendMessage(message, character = 'Rumi') {
    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message, character })
        });
        
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Error en el servidor');
        }
        
        return { success: true, reply: data.reply };
    } catch (error) {
        console.error("Error al conectar con Gemini:", error);
        // Devolvemos una respuesta controlada para que la app NO se rompa
        return { success: false, reply: "¡Hmpf! No me pude conectar con el servidor, pero sigo aquí." };
    }
}