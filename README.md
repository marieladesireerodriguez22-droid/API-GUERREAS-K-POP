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
* **SPA & History API:** Enrutamiento dinámico sin recargas de página (`/home`, `/chat`, `/about`).
* **Vercel Serverless Functions:** Conexión segura con la API de Google Gemini en el backend para evitar exponer credenciales.
* **Vitest:** Suite de pruebas unitarias para validar la lógica del sistema.
* **Responsive Design:** Diseño mobile-first adaptado para celulares, tablets y desktop.

## ⚙️ Configuración y Ejecución Local

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/marieladesireerodriguez22-droid/API-GUERREAS-K-POP.git](https://github.com/marieladesireerodriguez22-droid/API-GUERREAS-K-POP.git)
   cd API-GUERREAS-K-POP
   Instalar las dependencias:

Bash
npm install
Configurar las variables de entorno:

Crea un archivo .env en la raíz del proyecto tomando como referencia el archivo .env.example.

Añade tu clave de la API de Gemini:

Fragmento de código
GEMINI_API_KEY=tu_api_key_aqui
Ejecutar en entorno de desarrollo local:

Bash
vercel dev
🧪 Cómo Ejecutar los Tests
Para correr las pruebas unitarias implementadas con Vitest, ejecuta el siguiente comando en tu terminal:

Bash
npm test
🚀 Cómo Desplegar a Vercel
Conecta tu repositorio de GitHub a tu cuenta de Vercel.

En la configuración del proyecto en Vercel, ve a la sección de Environment Variables y añade:

Name: GEMINI_API_KEY

Value: Tu clave secreta de la API de Gemini.

Realiza el despliegue automático conectado a tu rama principal.

📱 Capturas de Pantalla
(Puedes agregar aquí o en una carpeta de imágenes las capturas de tu aplicación funcionando en móvil y desktop)

Vista Home / Galería: [Insertar imagen]

Vista de Chat: [Insertar imagen]

🤖 Registro del Uso de AI en el Proyecto
Durante el desarrollo de esta aplicación, se utilizó Inteligencia Artificial como herramienta de apoyo y consulta para:

Diseñar la estructura modular del código (separación de vistas, enrutador con History API y servicios de API).

Redactar y optimizar los system prompts de los diferentes personajes (Rumi, Mira, Zoey y Capuchina) para mantener interacciones coherentes, divertidas y en tono de chat.

Configurar correctamente las Serverless Functions en Vercel para proteger la clave de la API en el servidor.

Desarrollar y depurar los tests unitarios utilizando Vitest...