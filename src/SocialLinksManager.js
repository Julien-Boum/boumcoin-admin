
import React, { useState } from 'react';

function SocialLinksManager() {
  const [links, setLinks] = useState({
    tiktok: '',
    instagram: '',
    x: '',
    facebook: '',
    discord: '',
    telegram: ''
  });

  const handleChange = (e) => {
    setLinks({ ...links, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const blob = new Blob([JSON.stringify(links, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'socials.json';
    a.click();
  };

  return (
    <div>
      <h2>Liens des réseaux sociaux</h2>
      {Object.keys(links).map((key) => (
        <div key={key}>
          <label>{key}</label>
          <input name={key} value={links[key]} onChange={handleChange} style={{ width: '80%' }} />
        </div>
      ))}
      <button onClick={handleSave}>Télécharger le JSON</button>
    </div>
  );
}

export default SocialLinksManager;
