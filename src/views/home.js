export function renderHome() {
    return `
        <div class="view" style="padding: 20px; text-align: center;">
            <h2>Bienvenido a K-Pop Warriors Chat</h2>
            <p>Selecciona a tu guerrera y prepárate para una charla llena de exigencia y carácter.</p>
            <div style="display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap; margin-top: 20px;">
                <div class="char-card" data-char="Rumi" style="cursor: pointer; text-align: center; border: 1px solid #ddd; padding: 15px; border-radius: 8px; width: 200px; background: white;">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300" alt="Rumi" style="width:100px; height: 100px; object-fit: cover; display: block; margin: 0 auto; border-radius: 50%;">
                    <h3 style="margin: 10px 0 5px 0;">Rumi</h3>
                    <p style="font-size: 12px; color: #666;">Líder del grupo</p>
                </div>
                <div class="char-card" data-char="Mira" style="cursor: pointer; text-align: center; border: 1px solid #ddd; padding: 15px; border-radius: 8px; width: 200px; background: white;">
                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300" alt="Mira" style="width:100px; height: 100px; object-fit: cover; display: block; margin: 0 auto; border-radius: 50%;">
                    <h3 style="margin: 10px 0 5px 0;">Mira</h3>
                    <p style="font-size: 12px; color: #666;">Vocalista principal</p>
                </div>
                <div class="char-card" data-char="Zoey" style="cursor: pointer; text-align: center; border: 1px solid #ddd; padding: 15px; border-radius: 8px; width: 200px; background: white;">
                    <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300" alt="Zoey" style="width:100px; height: 100px; object-fit: cover; display: block; margin: 0 auto; border-radius: 50%;">
                    <h3 style="margin: 10px 0 5px 0;">Zoey</h3>
                    <p style="font-size: 12px; color: #666;">Maknae / Enérgica</p>
                </div>
                <div class="char-card" data-char="Capuchina" style="cursor: pointer; text-align: center; border: 1px solid #ddd; padding: 15px; border-radius: 8px; width: 200px; background: white;">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300" alt="Capuchina" style="width:100px; height: 100px; object-fit: cover; display: block; margin: 0 auto; border-radius: 50%;">
                    <h3 style="margin: 10px 0 5px 0;">Capuchina</h3>
                    <p style="font-size: 12px; color: #666;">Espía táctica</p>
                </div>
            </div>
        </div>
    `;
}