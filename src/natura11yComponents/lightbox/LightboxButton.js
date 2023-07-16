import React, { useEffect } from 'react';

const LightboxButton = ({ type, src, caption, onClick, onMount }) => {
  
  useEffect(() => {
    onMount({ type, src, caption });
  }, []);

  return (
    <button
      className="lightbox-button"
      onClick={() => onClick(src, caption, type)}
    >
      Open {type}
    </button>
  );
};

export default LightboxButton;