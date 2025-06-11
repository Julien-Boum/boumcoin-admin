import React, { useState, useEffect } from 'react';

function BuyButtonManager() {
  const [link, setLink] = useState('');

  useEffect(() => {
    fetch('/texts.json')
      .then(res => res.json())
      .then(data => {
        if (data.buyLink) {
          setLink(data.buyLink);
        }
      });
  }, []);

  const handleChange = (e) => {
    setLink(e.target.value);
  };

  const handleSave = () => {
    const updated = { buyLink: link };
    const blob = new Blob([JSON.stringify(updated, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'texts.json';
    a.click();
  };

  return (
    <div style={{ marginBottom: '30px' }}>
      <h2>🔗 Lien du bouton "Acheter Boumcoin"</h2>
      <input
        type="text"
        value={link}
        onChange={handleChange}
        style={{ width: '60%' }}
        placeholder="https://..."
      />
      <button onClick={handleSave} style={{ marginLeft: '10px' }}>
        💾 Sauvegarder le lien
      </button>
    </div>
  );
}

export default BuyButtonManager;// placeholder
