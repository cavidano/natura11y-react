import React, { useEffect, useContext } from 'react';
import classNames from 'classnames';

// import { LightboxContext } from '../../context/LightboxContext';

const LightboxButton = (props) => {
  const { 
    lbType, 
    lbSrc, 
    lbCaption, 
    onMount, 
    utilities = null, 
    children = 'Lightbox Button', 
    lightboxOpenHandler 
  } = props;
  
  // const { openLightbox } = useContext(LightboxContext);

  useEffect(() => {
    onMount({ lbType, lbSrc, lbCaption });
  }, []);

  const componentClasses = classNames({
    [`${utilities}`]: utilities !== null,
  });

  return (
    <button
      data-lightbox-type={lbType}
      className={componentClasses}
      onClick={() => lightboxOpenHandler(lbType, lbSrc, lbCaption)} // Updated here
    >
      {children}
    </button>
  );
};

export default LightboxButton;
