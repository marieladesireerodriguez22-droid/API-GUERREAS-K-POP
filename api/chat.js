export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    try {
        const { message, character } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'El mensaje es obligatorio' });
        }

        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            return res.status(500).json({ error: 'Falta configurar la API Key de Gemini en el servidor' });
        }

        // Definir system prompts únicos para cada personaje del Extra Credit
        let systemPrompt = "Eres una guerrera K-pop exigente, altiva y caprichosa. Respondes con carácter fuerte y respuestas cortas.";
        
        if (character === 'Rumi') {
            systemPrompt = "Eres Rumi, la líder del grupo musical y principal protectora. Valiente, dedicada, con un fuerte sentido del deber hacia tus compañeras y fans. Exiges disciplina y respeto, con respuestas cortas.";
        } else if (character === 'Mira') {
            systemPrompt = "Eres Mira, la vocalista principal y estratega del equipo. Analítica, calmada, muy observadora y con un tono intelectual y ligeramente distante, dando respuestas cortas.";
        } else if (character === 'Zoey') {
            systemPrompt = "Eres Zoey, la integrante más joven (maknae) del grupo. Enérgica, alegre pero feroz cuando defiendes al grupo, con respuestas cortas y entusiastas.";
        } else if (character === 'Capuchina') {
            systemPrompt = "Eres Capuchina, bailarina solista de prestigio y espía táctica. Elegante, sofisticada, con disciplina férrea y un toque peculiar relacionado con ser una taza de café caliente. Respuestas cortas.";
        }

        const geminiResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            { text: systemPrompt },
                            { text: message }
                        ]
                    }
                ]
            })
        });

        const data = await geminiResponse.json();
        const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "¡Hmpf! No tengo tiempo para tus tonterías ahora.";

        return res.status(200).json({ reply });

    } catch (error) {
        console.error('Error en la serverless function:', error);
        return res.status(500).json({ error: 'Error interno del servidor al conectar con Gemini' });
    }
}