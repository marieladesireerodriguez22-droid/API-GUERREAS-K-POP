// tests/utils.test.js
import { describe, it, expect } from 'vitest';
import { sanitizeInput, getCurrentTime } from '../src/utils.js';

describe('Utilidades del Chat', () => {
    it('debería sanitizar el texto eliminando etiquetas HTML básicas', () => {
        const input = '<script>alert("hack")</script>Hola';
        const result = sanitizeInput(input);
        expect(result).not.toContain('<script>');
        expect(result).toContain('&lt;script&gt;');
    });

    it('debería retornar una cadena de tiempo con formato válido (HH:MM)', () => {
        const time = getCurrentTime();
        expect(time).toMatch(/^\d{2}:\d{2}$/);
    });
});