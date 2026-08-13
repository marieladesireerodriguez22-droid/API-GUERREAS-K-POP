# 💬 K-Pop Chat SPA

Aplicación web de página única (SPA) mobile-first desarrollada para interactuar mediante un chat interactivo con personajes de K-Pop, impulsada por la API de Google Gemini y respaldada por Serverless Functions en Vercel.

## 🚀 Enlaces del Proyecto
* **Aplicación Desplegada:** [https://proyect-k-pop-chat.vercel.app](https://proyect-k-pop-chat.vercel.app)
* **Repositorio en GitHub:** [https://github.com/marieladesireerodriguez22-droid/API-GUERREAS-K-POP.git](https://github.com/marieladesireerodriguez22-droid/API-GUERREAS-K-POP.git)

## 🌟 Descripción de los Personajes y Galería
La aplicación cuenta con una galería interactiva que permite elegir entre distintos personajes inspirados en el mundo del K-Pop, cada uno con su respectiva personalidad y *system prompt* único:
* **Rumi:** Líder y estratega en el escenario. Siempre lista para dar el 100%.
* **Mira:** Amante de los ritmos rápidos y dueña de una energía imparable.
* **Zoey:** La melodía es su refugio y marca tendencia con su estilo único.
* **Capuchina:** Creativa, divertida y lista para charlar de todo un poco.

## 🛠️ Tecnologías y Características
* **HTML5, CSS3 y JavaScript (ES Modules):** Arquitectura modular basada en vistas y componentes.
* **SPA & History API:** Enrutamiento dinámico sin recargas de página (`/home`, `/chat`, `/about`), incluyendo manejo de rutas no encontradas (Vista 404 personalizada).
* **Vercel Serverless Functions:** Conexión segura con la API de Google Gemini en el backend para evitar exponer credenciales.
* **Historial Persistente:** Almacenamiento independiente de la conversación para cada guerrera en el `localStorage`, con opción de limpieza a voluntad.
* **Vitest:** Suite de pruebas unitarias para validar la lógica del sistema.
* **Responsive Design:** Diseño mobile-first adaptado para celulares, tablets y desktop.

## ⚙️ Configuración y Ejecución Local

Para levantar este proyecto en tu entorno local de manera correcta, sigue estos pasos:

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/marieladesireerodriguez22-droid/API-GUERREAS-K-POP.git](https://github.com/marieladesireerodriguez22-droid/API-GUERREAS-K-POP.git)
   cd API-GUERREAS-K-POP
Instalar las dependencias del proyecto:

Bash
npm install
Instalar Vercel CLI de forma global (necesario para ejecutar las Serverless Functions localmente):

Bash
npm install -g vercel
Configurar las variables de entorno:

Crea un archivo llamado exactamente .env en la raíz del proyecto (puedes guiarte del archivo .env.example).

Añade tu clave secreta de la API de Gemini con el siguiente formato:

Fragmento de código
GEMINI_API_KEY=tu_api_key_aqui
Ejecutar el entorno de desarrollo local con Vercel:
Usa el comando de Vercel para levantar tanto el frontend como la Serverless Function en conjunto:

Bash
vercel dev
🧪 Cómo Ejecutar los Tests
Para correr las pruebas unitarias implementadas con Vitest, ejecuta el siguiente comando en tu terminal:

Bash
npm test
🚀 Cómo Desplegar a Vercel
Conecta tu repositorio de GitHub a tu cuenta de Vercel.

En la configuración del proyecto en el panel de Vercel, dirígete a la sección Environment Variables y añade:

Name: GEMINI_API_KEY

Value: Tu clave secreta de la API de Gemini.

Realiza el despliegue conectado a tu rama principal.

📱 Capturas de Pantalla de la Aplicación (en la carpeta assets estan las imagenes)
A continuación se muestran las vistas principales de la aplicación funcionando:

1. Vista Principal (Selección de Personajes):
Se observa la navegación (Home, Chat, About) y las tarjetas de las cuatro guerreras K-Pop.

2. Vista de Chat en Funcionamiento:
Se muestra la conversación activa con el personaje 'Rumi', incluyendo la interfaz de chat, la respuesta de la IA y la barra de entrada de texto.

🤖 Registro del Uso de AI en el Proyecto
Durante el desarrollo de esta aplicación, se utilizó Inteligencia Artificial como herramienta de apoyo y consulta para:

Diseñar la estructura modular del código (separación de vistas, enrutador con History API y servicios de API).

Redactar y optimizar los system prompts de los diferentes personajes (Rumi, Mira, Zoey y Capuchina) para mantener interacciones coherentes, divertidas y en tono de chat.

Configurar correctamente las Serverless Functions en Vercel para proteger la clave de la API en el servidor.

Desarrollar y depurar los tests unitarios utilizando Vitest.
