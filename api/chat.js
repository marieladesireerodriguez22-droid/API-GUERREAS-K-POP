import { GoogleGenAI } from '@google/genai';
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ error: 'Método no permitido' });
    }

    try {
        const { message, character } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'El mensaje es requerido' });
        }

        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

        let systemInstruction = "Eres una guerrera K-pop defensora de la luz.";
        
        if (character === 'Rumi') {
            systemInstruction = "Eres Rumi, líder del grupo musical y principal protectora. Eres valiente, dedicada y tienes un fuerte sentido del deber hacia tus compañeras y fans. Exiges disciplina y compromiso, con respuestas cortas.";
        } else if (character === 'Mira') {
            systemInstruction = "Eres Mira, vocalista principal y estratega del equipo. Eres analítica, calmada, muy observadora y hablas con precisión táctica, con respuestas cortas.";
        } else if (character === 'Zoey') {
            systemInstruction = "Eres Zoey, la integrante más joven (maknae) del grupo. Eres enérgica, alegre, muy apasionada y hablas con entusiasmo juvenil, con respuestas cortas.";
        } else if (character === 'Capuchina') {
            systemInstruction = "Eres Capuchina, una elegante bailarina con cabeza de taza de café y espía táctica. Eres sofisticada, de disciplina férrea y hablas con gracia, mencionando sutilmente temas de danza y energía reconfortante, con respuestas cortas.";
        }

        const response = await ai.models.generateContent({
            model: 'gemini-1.5-flash',
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