import { describe, it, expect, vi, beforeEach } from 'vitest';
import { sendMessage } from '../src/services/geminiApi.js';

describe('Integración con API de IA (Chat)', () => {
    beforeEach(() => {
        vi.restoreAllMocks();
    });

    it('debería manejar una respuesta exitosa de la API', async () => {
        // Simulamos la respuesta de la Vercel Function ({ reply: '...' })
        const mockResponse = {
            ok: true,
            json: async () => ({ reply: '¡Hola! Soy tu ídolo favorito.' })
        };
        vi.stubGlobal('fetch', vi.fn().mockResolvedValue(mockResponse));

        const result = await sendMessage('Hola', 'Rumi');
        
        expect(fetch).toHaveBeenCalled();
        // Validamos la estructura real que devuelve tu servicio: { success, reply }
        expect(result.success).toBe(true);
        expect(result.reply).toBe('¡Hola! Soy tu ídolo favorito.');
    });

    it('debería manejar un error de servidor sin romper la app', async () => {
        // Simulamos un fallo del servidor (response.ok = false)
        const mockResponse = {
            ok: false,
            json: async () => ({ error: 'Error en el servidor' })
        };
        vi.stubGlobal('fetch', vi.fn().mockResolvedValue(mockResponse));

        const result = await sendMessage('Hola', 'Rumi');
        
        // Verificamos que maneja el error de forma controlada gracias al try/catch
        expect(result.success).toBe(false);
        expect(result.reply).toBeDefined();
    });
});