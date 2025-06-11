import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, set } from 'firebase/database';
import { app } from './firebase';

const platforms = [
  { key: 'facebook', label: ' Facebook' },
  { key: 'instagram', label: ' Instagram' },
  { key: 'x', label: ' X (ex-Twitter)' },
  { key: 'tiktok', label: ' TikTok' },
  { key: 'telegram', label: ' Telegram' },
  { key: 'discord', label: ' Discord' },
];

const SocialLinksManager = () => {
  const [links, setLinks] = useState({});
  const db = getDatabase(app);

  useEffect(() => {
    const linksRef = ref(db, 'socialLinks');
    onValue(linksRef, (snapshot) => {
      if (snapshot.exists()) {
        setLinks(snapshot.val());
      }
    });
  }, [db]);

  const handleChange = (key, value) => {
    setLinks((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    const linksRef = ref(db, 'socialLinks');
    set(linksRef, links)
      .then(() => alert('Liens mis à jour avec succès !'))
      .catch((error) => alert('Erreur : ' + error.message));
  };

  return (
    <div>
      <h2>🔗 Gestion des Réseaux Sociaux</h2>
      {platforms.map((platform) => (
        <div key={platform.key} style={{ marginBottom: '10px' }}>
          <label>{platform.label} : </label>
          <input
            type="text"
            value={links[platform.key] || ''}
            onChange={(e) => handleChange(platform.key, e.target.value)}
            style={{ width: '60%' }}
          />
        </div>
      ))}
      <button onClick={handleSave}>💾 Sauvegarder les liens</button>
    </div>
  );
};

export default SocialLinksManager;
