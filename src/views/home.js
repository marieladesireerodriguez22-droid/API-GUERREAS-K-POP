export function renderHome() {
    return `
        <div class="view" style="text-align: center; padding: 20px;">
            <h2>Bienvenido a K-Pop Warriors Chat</h2>
            <p>Selecciona a tu guerrera:</p>
            <div style="display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap;">
                
                <div class="char-card" data-char="Rumi" style="cursor: pointer; text-align: center; border: 1px solid #ddd; padding: 15px; border-radius: 8px; width: 200px; background: #fafafa;">
                    <img src="images/Rumi.png" alt="Rumi" style="width:100px; height: 100px; object-fit: cover; display: block; margin: 0 auto; border-radius: 50%;">
                    <h3 style="margin: 10px 0 5px 0;">Rumi</h3>
                    <p style="font-size: 0.85rem; color: #555; margin: 0;">Líder y estratega en el escenario. Siempre lista para dar el 100%.</p>
                </div>

                <div class="char-card" data-char="Mira" style="cursor: pointer; text-align: center; border: 1px solid #ddd; padding: 15px; border-radius: 8px; width: 200px; background: #fafafa;">
                    <img src="images/MIRA.png" alt="Mira" style="width:100px; height: 100px; object-fit: cover; display: block; margin: 0 auto; border-radius: 50%;">
                    <h3 style="margin: 10px 0 5px 0;">Mira</h3>
                    <p style="font-size: 0.85rem; color: #555; margin: 0;">Amante de los ritmos rápidos y dueña de una energía imparable.</p>
                </div>

                <div class="char-card" data-char="Zoey" style="cursor: pointer; text-align: center; border: 1px solid #ddd; padding: 15px; border-radius: 8px; width: 200px; background: #fafafa;">
                    <img src="images/Zoey.png" alt="Zoey" style="width:100px; height: 100px; object-fit: cover; display: block; margin: 0 auto; border-radius: 50%;">
                    <h3 style="margin: 10px 0 5px 0;">Zoey</h3>
                    <p style="font-size: 0.85rem; color: #555; margin: 0;">La melodía es su refugio y marca tendencia con su estilo único.</p>
                </div>

                <div class="char-card" data-char="Capuchina" style="cursor: pointer; text-align: center; border: 1px solid #ddd; padding: 15px; border-radius: 8px; width: 200px; background: #fafafa;">
                    <img src="images/Capuchina.png" alt="Capuchina" style="width:100px; height: 100px; object-fit: cover; display: block; margin: 0 auto; border-radius: 50%;">
                    <h3 style="margin: 10px 0 5px 0;">Capuchina</h3>
                    <p style="font-size: 0.85rem; color: #555; margin: 0;">Creativa, divertida y lista para charlar de todo un poco.</p>
                </div>

            </div>
        </div>
    `;
}