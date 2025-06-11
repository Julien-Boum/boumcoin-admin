import React from 'react';
import ImageManager from './ImageManager';
import SocialLinksManager from './SocialLinksManager';
import BuyButtonManager from './BuyButtonManager';
import MultilangTextManager from './MultilangTextManager';

function Dashboard() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center' }}>🛠️ Panneau d'administration Boumcoin</h1>

      <ImageManager />
      <SocialLinksManager />
      <BuyButtonManager />
      <MultilangTextManager />
    </div>
  );
}

export default Dashboard;
