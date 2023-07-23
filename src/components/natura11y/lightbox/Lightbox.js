import React, { useContext } from 'react';

import { LightboxContext } from '../../../context/LightboxContext';

import ButtonIconOnly from '../button/ButtonIconOnly';

const mediaTypes = {
  video: lbSrc => (
    <video controls key={lbSrc}>
      <source src={lbSrc} type='video/mp4' />
    </video>
  ),
  youtube: lbSrc => (
    <iframe
      key={lbSrc}
      title='YouTube Video'
      src={`https://www.youtube.com/embed/${lbSrc}`}
      frameBorder='0'
      allow='autoplay; fullscreen;'
      allowFullScreen
    />
  ),
  vimeo: lbSrc => (
    <iframe
      key={lbSrc}
      title='Vimeo Video'
      src={`https://player.vimeo.com/video/${lbSrc}`}
      frameBorder='0'
      allow='autoplay; fullscreen;'
      allowFullScreen
    />
  ),
  default: lbSrc => <img src={lbSrc} alt='Lightbox content' key={lbSrc} />
};

const Lightbox = () => {

  const {
    mediaArray, 
    lightboxData, 
    handleLightboxClose,
    handleNextPrevious,
    handleCloseOutside,
    lbContainer,
    lbPrevious,
    lbNext,
    lbClose
  } = useContext(LightboxContext);

  const {
    isOpen, 
    lbType, 
    lbSrc, 
    lbCaption 
  } = lightboxData;

  const updateLightboxContent = () => {
    return (mediaTypes[lbType] || mediaTypes.default)(lbSrc);
  };

  return (
    <div
      className='lightbox'
      ref={lbContainer}
      aria-hidden={!isOpen}
      onClick={handleCloseOutside}
    >
      <figure className='lightbox__container'>
        <div className='lightbox__media' tabIndex={0}>{updateLightboxContent()}</div>
        {lbCaption && <figcaption className='lightbox__caption'>{lbCaption}</figcaption>}
      </figure>
      
      <div className='lightbox__controls'>

        {mediaArray.length > 1 && (
          <>
          
            <ButtonIconOnly
              ref={lbPrevious}
              buttonType='button'
              iconHandle='arrow-left'
              clickHandler={() => handleNextPrevious(-1)}
            />

            <ButtonIconOnly
              ref={lbNext}  
              buttonType='button'
              iconHandle='arrow-right'
              clickHandler={() => handleNextPrevious(-1)}
            />

          </>
        )}

        <ButtonIconOnly
          ref={lbClose}  
          buttonType='button'
          iconHandle='close'
          clickHandler={handleLightboxClose}
        />

      </div>

    </div>
  );
};

export default Lightbox;