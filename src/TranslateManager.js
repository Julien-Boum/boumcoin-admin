import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, set } from 'firebase/database';
import { app } from './firebase';

const supportedLanguages = ['fr', 'en', 'es', 'it', 'de', 'pt'];

const textKeys = [
  'hero_title',
  'hero_subtitle',
  'about_title',
  'about_content',
  'faq_title',
  'faq_content',
  'contact_title',
  'contact_subtitle',
  'buy_button_label',
];

const TextsManager = () => {
  const [texts, setTexts] = useState({});
  const db = getDatabase(app);

  useEffect(() => {
    const textsRef = ref(db, 'siteTexts');
    onValue(textsRef, (snapshot) => {
      if (snapshot.exists()) {
        setTexts(snapshot.val());
      }
    });
  }, []);

  const handleChange = (lang, key, value) => {
    setTexts((prev) => ({
      ...prev,
      [lang]: {
        ...prev[lang],
        [key]: value,
      },
    }));
  };

  const handleSave = () => {
    const textsRef = ref(db, 'siteTexts');
    set(textsRef, texts)
      .then(() => alert('📝 Textes enregistrés !'))
      .catch((error) => alert('❌ Erreur : ' + error.message));
  };

  return (
    <div>
      <h2>🌍 Gestion des textes multilingues</h2>
      {supportedLanguages.map((lang) => (
        <div key={lang} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
          <h3>Langue : {lang.toUpperCase()}</h3>
          {textKeys.map((key) => (
            <div key={key} style={{ marginBottom: '10px' }}>
              <label>{key} :</label>
              <input
                type="text"
                value={(texts[lang] && texts[lang][key]) || ''}
                onChange={(e) => handleChange(lang, key, e.target.value)}
                style={{ width: '70%' }}
              />
            </div>
          ))}
        </div>
      ))}
      <button onClick={handleSave}>💾 Sauvegarder les textes</button>
    </div>
  );
};

export default TextsManager;
