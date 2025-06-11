import React, { useState, useEffect } from 'react';
import { storage } from './firebase';
import { ref, uploadBytes, getDownloadURL, listAll } from 'firebase/storage';

const ImageManager = () => {
  const [logo, setLogo] = useState(null);
  const [background, setBackground] = useState(null);
  const [logoURL, setLogoURL] = useState('');
  const [backgroundURL, setBackgroundURL] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const logoRef = ref(storage, 'images/logo.png');
        const bgRef = ref(storage, 'images/background.png');
        const [logoURL, backgroundURL] = await Promise.all([
          getDownloadURL(logoRef),
          getDownloadURL(bgRef),
        ]);
        setLogoURL(logoURL);
        setBackgroundURL(backgroundURL);
      } catch (error) {
        console.log('Images non trouvées ou non encore uploadées.');
      }
    };

    fetchImages();
  }, []);

  const handleUpload = async (file, type) => {
    if (!file) return;
    const path = `images/${type}.png`;
    const fileRef = ref(storage, path);
    await uploadBytes(fileRef, file);
    const url = await getDownloadURL(fileRef);
    if (type === 'logo') setLogoURL(url);
    else setBackgroundURL(url);
    alert(`${type} mis à jour avec succès !`);
  };

  return (
    <div>
      <h2>🖼️ Gestion des Images</h2>
      <div style={{ marginBottom: '20px' }}>
        <p>Logo actuel :</p>
        {logoURL && <img src={logoURL} alt="Logo" style={{ height: 100 }} />}
        <input type="file" onChange={(e) => setLogo(e.target.files[0])} />
        <button onClick={() => handleUpload(logo, 'logo')}>Mettre à jour le logo</button>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <p>Arrière-plan actuel :</p>
        {backgroundURL && (
          <img src={backgroundURL} alt="Background" style={{ width: 200 }} />
        )}
        <input type="file" onChange={(e) => setBackground(e.target.files[0])} />
        <button onClick={() => handleUpload(background, 'background')}>
          Mettre à jour le fond
        </button>
      </div>
    </div>
  );
};

export default ImageManager;
