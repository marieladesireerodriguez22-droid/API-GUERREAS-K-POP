// src/utils.js

/**
 * Sanitiza el texto ingresado por el usuario para evitar problemas de inyección o formato básico.
 * @param {string} text - El texto a limpiar.
 * @returns {string} El texto limpio.
 */
export const sanitizeInput = (text) => {
    if (!text) return '';
    return text.trim().replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

/**
 * Formatea la hora actual para mostrarla en los mensajes del chat.
 * @returns {string} Hora formateada (ej: 14:35).
 */
export const getCurrentTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
};