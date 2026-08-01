# 💬 K-Pop Chat SPA

Aplicación web de página única (SPA) mobile-first desarrollada para interactuar mediante un chat interactivo con personajes de K-Pop, impulsada por la API de Google Gemini y respaldada por Serverless Functions en Vercel.

## 🚀 Objetivos del Proyecto
* **Interfaz SPA Mobile-First:** Navegación fluida basada en JavaScript puro y History API, diseñada prioritariamente para dispositivos móviles con diseño responsive.
* **Galería de Personajes:** Selección de perfiles únicos (como Rumi, Mira, Zoey y Capuchina) con descripciones de personalidad e interacciones personalizadas.
* **Seguridad con Serverless Functions:** Conexión segura con la API de Google Gemini a través de una función serverless (`api/functions.js`) para evitar la exposición de credenciales en el cliente.
* **Interfaz de Chat Diferenciada:** Estilos visuales claros para distinguir los mensajes del usuario y los del personaje.
* **Calidad y Testing:** Pruebas unitarias robustas utilizando **Vitest** para validar la lógica de utilidades y la aplicación.

## 🛠️ Tecnologías Utilizadas
* **HTML5, CSS3 y JavaScript (ES Modules)**
* **Vercel Serverless Functions** (Node.js)
* **Google Gen AI SDK / Gemini API**
* **Vitest** para testing unitario

## ⚙️ Configuración y Ejecución Local

1. Clonar el repositorio e instalar las dependencias:
   ```bash
   npm install