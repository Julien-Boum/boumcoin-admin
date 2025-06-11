import React, { useState, useEffect } from 'react';

function SocialLinksManager() {
  const [links, setLinks] = useState({
    tiktok: '',
    instagram: '',
    x: '',
    facebook: '',
    discord: '',
    telegram: ''
  });

  useEffect(() => {
    fetch('/texts.json')
      .then((res) => res.json())
      .then((data) => {
        if (data.socials) {
          setLinks(data.socials);
        }
      });
  }, []);

  const handleChange = (e) => {
    setLinks({ ...links, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const updated = { socials: links };
    const blob = new Blob([JSON.stringify(updated, null, 2)], {
      type: 'application/json',
    });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'texts.json';
    a.click();
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>🌐 Liens des réseaux sociaux</h2>
      {Object.keys(links).map((key) => (
        <div key={key} style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', fontWeight: 'bold' }}>{key}</label>
          <input
            type="text"
            name={key}
            value={links[key]}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
      ))}
      <button onClick={handleSave} style={{ marginTop: '10px' }}>
        💾 Sauvegarder les liens
      </button>
    </div>
  );
}

export default SocialLinksManager;
