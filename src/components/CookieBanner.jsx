// src/components/CookieBanner.js
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set('cookie_consent', 'accepted', { expires: 365 }); // Set cookie for 1 year
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div style={styles.banner}>
        <p>This website uses cookies to enhance your experience. By continuing to browse, you consent to our use of cookies.</p>
        <button onClick={handleAccept} style={styles.button}>Accept</button>
      </div>
    )
  );
};

const styles = {
  banner: {
    position: 'fixed',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
  },
  button: {
    marginLeft: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
  },
};

export default CookieBanner;
