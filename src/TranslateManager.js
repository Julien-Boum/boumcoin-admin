import React, { useState, useEffect } from 'react';

function TranslateManager() {
  const [translations, setTranslations] = useState({
    fr: '',
    en: '',
    es: '',
    it: '',
    de: '',
    pt: ''
  });

  useEffect(() => {
    fetch('/translations.json')
      .then((res) => res.json())
      .then((data) => setTranslations(data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTranslations({ ...translations, [name]: value });
  };

  const handleSave = () => {
    const blob = new Blob([JSON.stringify(translations, null, 2)], {
      type: 'application/json',
    });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'translations.json';
    a.click();
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>🌍 Gestion des textes multilingues</h2>
      {Object.entries(translations).map(([lang, value]) => (
        <div key={lang} style={{ marginBottom: '15px' }}>
          <label style={{ fontWeight: 'bold' }}>{lang.toUpperCase()}</label>
          <textarea
            name={lang}
            value={value}
            onChange={handleChange}
            rows={3}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
      ))}
      <button onClick={handleSave} style={{ marginTop: '10px' }}>
        💾 Sauvegarder les traductions
      </button>
    </div>
  );
}

export default TranslateManager;
