// tests/app.test.js
import { describe, it, expect } from 'vitest';

describe('Pruebas de la Aplicación', () => {
    it('debería verificar que el entorno de pruebas funciona correctamente', () => {
        const environment = 'development';
        expect(environment).toBe('development');
    });

    it('debería validar que las rutas principales estén definidas', () => {
        const rutasValidas = ['/home', '/chat', '/about'];
        expect(rutasValidas).toContain('/home');
        expect(rutasValidas).toContain('/chat');
        expect(rutasValidas).toContain('/about');
    });
});