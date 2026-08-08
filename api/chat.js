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

        const apiKey = process.env.GEMINI_API_KEY;
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: message }] }],
                systemInstruction: { parts: [{ text: systemInstruction }] }
            })
        });

        const data = await response.json();

        if (!response.ok) {
            console.error('Error de la API de Gemini:', data);
            return res.status(500).json({ error: 'Error al comunicarse con Gemini' });
        }

        const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "No he podido responder.";

        return res.status(200).json({ reply });

    } catch (error) {
        console.error('Error interno:', error);
        return res.status(500).json({ error: 'Error interno del servidor al procesar el mensaje.' });
    }
}