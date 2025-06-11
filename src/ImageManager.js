import React, { useState, useEffect } from 'react';

function ImageManager() {
  const [logo, setLogo] = useState(null);
  const [background, setBackground] = useState(null);

  useEffect(() => {
    // Charger les images existantes (si déjà présentes sur le serveur)
    fetch('/images.json')
      .then(res => res.json())
      .then(data => {
        setLogo(data.logo || null);
        setBackground(data.background || null);
      })
      .catch(() => {
        console.log('Pas encore de fichier images.json');
      });
  }, []);

  const handleUpload = (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      const updated = {
        logo: type === 'logo' ? base64 : logo,
        background: type === 'background' ? base64 : background,
      };

      const blob = new Blob([JSON.stringify(updated, null, 2)], {
        type: 'application/json',
      });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'images.json';
      a.click();
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <label>🧨 Logo :</label>
        <input type="file" accept="image/*" onChange={(e) => handleUpload(e, 'logo')} />
        {logo && <img src={logo} alt="Logo" style={{ maxWidth: '150px', marginTop: '10px' }} />}
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label>🌅 Fond d’écran :</label>
        <input type="file" accept="image/*" onChange={(e) => handleUpload(e, 'background')} />
        {background && <img src={background} alt="Background" style={{ maxWidth: '100%', marginTop: '10px' }} />}
      </div>
    </div>
  );
}

export default ImageManager;
