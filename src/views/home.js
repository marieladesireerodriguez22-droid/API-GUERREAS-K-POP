export function renderHome() {
    return `
        <div class="view">
            <h2>Bienvenido a K-Pop Warriors Chat</h2>
            <p>Selecciona a tu guerrera:</p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <div class="char-card" data-char="Rumi" style="cursor: pointer; text-align: center; border: 1px solid #ddd; padding: 10px; border-radius: 8px;">
                    <img src="/images/Rumi.png" alt="Rumi" style="width:100px; display: block; margin: 0 auto;">
                    <p>Rumi</p>
                </div>
                <div class="char-card" data-char="Mira" style="cursor: pointer; text-align: center; border: 1px solid #ddd; padding: 10px; border-radius: 8px;">
                    <img src="/images/MIRA.png" alt="Mira" style="width:100px; display: block; margin: 0 auto;">
                    <p>Mira</p>
                </div>
                <div class="char-card" data-char="Zoey" style="cursor: pointer; text-align: center; border: 1px solid #ddd; padding: 10px; border-radius: 8px;">
                    <img src="/images/Zoey.png" alt="Zoey" style="width:100px; display: block; margin: 0 auto;">
                    <p>Zoey</p>
                </div>
                <div class="char-card" data-char="Capuchina" style="cursor: pointer; text-align: center; border: 1px solid #ddd; padding: 10px; border-radius: 8px;">
                    <img src="/images/Capuchina..png" alt="Capuchina" style="width:100px; display: block; margin: 0 auto;">
                    <p>Capuchina</p>
                </div>
            </div>
        </div>
    `;
}