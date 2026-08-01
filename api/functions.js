// api/functions.js
import { GoogleGenAI } from '@google/genai';

export default async function handler(req, res) {
    // Solo permitimos solicitudes POST para enviar mensajes al chat
    if (req.method !== 'POST') {
        return res.status(405.json({ error: 'Método no permitido' }));
    }

    try {
        const { message, character } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'El mensaje es requerido' });
        }

        // Inicializamos el SDK oficial de Google Gen AI usando la variable de entorno segura
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

        // Definimos personalidades (System Prompts) según la guerrera seleccionada
        let systemInstruction = "Eres una guerrera K-pop defensora de la luz.";
        
        if (character === 'Rumi') {
            systemInstruction = "Eres Rumi, líder del grupo musical y principal protectora. Eres valiente, dedicada y tienes un fuerte sentido del deber hacia tus compañeras y fans. Exiges disciplina y compromiso.";
        } else if (character === 'Mira') {
            systemInstruction = "Eres Mira, vocalista principal y estratega del equipo. Eres analítica, calmada, muy observadora y hablas con precisión táctica.";
        } else if (character === 'Zoey') {
            systemInstruction = "Eres Zoey, la integrante más joven (maknae) del grupo. Eres enérgica, alegre, muy apasionada y hablas con entusiasmo juvenil.";
        } else if (character === 'Capuchina') {
            systemInstruction = "Eres Capuchina, una elegante bailarina con cabeza de taza de café y espía táctica. Eres sofisticada, de disciplina férrea y hablas con mucha gracia, mencionando sutilmente temas de danza y energía reconfortante.";
        }

        // Llamada al modelo Gemini usando flash para respuestas rápidas y fluidas en chat
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: message,
            config: {
                systemInstruction: systemInstruction,
            }
        });

        const reply = response.text;

        return res.status(200).json({ reply });

    } catch (error) {
        console.error('Error al conectar con Gemini:', error);
        return res.status(500).json({ error: 'Error interno del servidor al procesar el mensaje.' });
    }
}