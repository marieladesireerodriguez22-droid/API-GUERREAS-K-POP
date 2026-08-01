/* STREAMING_CHUNK:Actualizando la prueba para validar la estructura del objeto de respuesta */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { sendMessage } from '../src/chat.js'; 

describe('Integración con API de IA (Chat)', () => {
    beforeEach(() => {
        vi.restoreAllMocks();
    });

    it('debería manejar una respuesta exitosa de la API', async () => {
        // Simulamos la estructura JSON que espera tu frontend (un objeto con 'response')
        const mockResponse = {
            ok: true,
            json: async () => ({ response: '¡Hola! Soy tu ídolo favorito.' })
        };
        vi.stubGlobal('fetch', vi.fn().mockResolvedValue(mockResponse));

        const result = await sendMessage('Hola', 'Rumi');
        
        expect(fetch).toHaveBeenCalled();
        // Verificamos la propiedad específica 'response' del objeto devuelto
        expect(result.response).toBe('¡Hola! Soy tu ídolo favorito.');
    });

    it('debería lanzar un error cuando la respuesta no es ok', async () => {
        // Simulamos un fallo del servidor (500)
        vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
            ok: false
        }));

        await expect(sendMessage('Hola', 'Rumi')).rejects.toThrow('Error en el servidor');
    });
});