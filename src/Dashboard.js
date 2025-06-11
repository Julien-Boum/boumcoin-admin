import React from 'react';
import ImageManager from './ImageManager';
import SocialLinksManager from './SocialLinksManager';
import TranslateManager from './TranslateManager';
import BuyButtonManager from './BuyButtonManager';

function Dashboard() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ marginBottom: '30px' }}>🛠️ Panneau d’administration Boumcoin</h1>

      <section style={{ marginBottom: '40px' }}>
        <h2>🖼️ Gestion des images</h2>
        <ImageManager />
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>🔗 Liens des réseaux sociaux</h2>
        <SocialLinksManager />
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>🌐 Textes multilingues</h2>
        <TranslateManager />
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>💰 Lien du bouton "Acheter Boumcoin"</h2>
        <BuyButtonManager />
      </section>

      <p style={{ fontStyle: 'italic', color: '#999' }}>
        🚧 Prochaine étape : gestion des messages du formulaire de contact...
      </p>
    </div>
  );
}

export default Dashboard;
