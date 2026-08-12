// src/services/tokenEstimator.js

/**
 * Estima de forma aproximada la cantidad de tokens que consumirá un texto.
 * Regla estándar aproximada: 1 token ~= 4 caracteres (o 0.75 palabras).
 * @param {string} text - El texto del mensaje del usuario.
 * @returns {number} - Cantidad estimada de tokens.
 */
export function estimateTokens(text) {
    if (!text || typeof text !== 'string') return 0;
    // Estimación basada en caracteres
    return Math.ceil(text.length / 4);
}

/**
 * Valida si un mensaje excede un límite máximo de tokens permitido por seguridad.
 * @param {string} text - El texto a evaluar.
 * @param {number} maxTokens - Límite máximo (por defecto 500 tokens para respuestas cortas).
 * @returns {boolean} - True si es válido, False si excede el límite.
 */
export function validateTokenLimit(text, maxTokens = 500) {
    const estimated = estimateTokens(text);
    return estimated <= maxTokens;
}