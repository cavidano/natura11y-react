import React, { Fragment, useEffect, useState, useRef } from 'react';

import { handleOverlayOpen, handleOverlayClose } from '../../utilities/overlay';

const Lightbox = () => {

  const [images, setImages] = useState([]);
  const [currentLB, setCurrentLB] = useState(0);
  const [lightboxVisible, setLightboxVisible] = useState(false);

	const lightbox = useRef(null);
  const lbPrevious = useRef(null);
	const lbNext = useRef(null);
	const lbClose = useRef(null);
	const lbContent = useRef(null);

  useEffect(() => {
    const lightboxElements = Array.from(document.querySelectorAll('[data-lightbox]'));

    const newImages = lightboxElements.map(el => ({
      src: el.getAttribute('data-lightbox-src'),
      alt: el.getAttribute('alt'),
      lbType: el.getAttribute('data-lightbox'),
      lbCaption: el.getAttribute('data-lightbox-caption'),
    }));

    setImages(newImages);
  }, []);

  const handleLightboxOpen = (event) => {
    const newCurrentLB = images.findIndex(image => image.src === event.currentTarget.getAttribute('data-lightbox-src'));

    setCurrentLB(newCurrentLB);
		handleOverlayOpen(lightbox.current);
    setLightboxVisible(true);
  };
  
  const handleLightboxClose = () => {
		handleOverlayClose(lightbox.current);
    setLightboxVisible(false);
  };

  const handleNextPrevious = (dir) => {
    let newLB = currentLB + dir;
    if (newLB < 0) newLB = images.length - 1;
    else if (newLB >= images.length) newLB = 0;
    setCurrentLB(newLB);
  };

  const handleCloseOutside = (event) => {
    if (event.target.classList.contains('lightbox')) {
      handleLightboxClose();
    }
  };

  useEffect(() => {
    
    const handleKeyPress = (event) => {

      if (!lightboxVisible) return;

      switch (event.code) {
        case 'ArrowLeft':
          handleNextPrevious(-1);
          lbPrevious.current.focus();
          break;
        case 'ArrowRight':
          handleNextPrevious(1);
          lbNext.current.focus();
          break;
        case 'Escape':
          handleLightboxClose();
          break;
        default:
          break;
      }
    };

    if (lightboxVisible) {
      document.addEventListener('keydown', handleKeyPress);
    } else {
      document.removeEventListener('keydown', handleKeyPress);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [lightboxVisible, currentLB, handleNextPrevious, handleLightboxClose]);

  const updateLightboxContent = () => {

    const lbType = images[currentLB].lbType;
    const lbSrc = images[currentLB].lbSrc;

    if (lbType === 'video') {
      return (
        <video controls>
          <source src={lbSrc} type='video/mp4' />
        </video>
      );
    } else if (lbType === 'youtube') {
      return (
        <iframe
          title='YouTube Video'
          src={`https://www.youtube.com/embed/${lbSrc}`}
          frameBorder='0'
          allow='autoplay; fullscreen;'
          allowFullScreen
        ></iframe>
      );
    } else if (lbType === 'vimeo') {
      return (
        <iframe
          title='Vimeo Video'
          src={`https://player.vimeo.com/video/${lbSrc}`}
          frameBorder='0'
          allow='autoplay; fullscreen;'
          allowFullScreen
        ></iframe>
      );
    } else {
      return (
        <img src={images[currentLB].src} alt={images[currentLB].alt} />
      );
    }
  };

  return (
    <Fragment>

      <div className='grid grid--column-2 gap-2'>
        {images.map(({ src, alt, lbType, lbSrc }, index) => (
          <button
            key={index}
            className={`lightbox-button ${
              currentLB === index ? 'active' : ''
            }`}
            onClick={() => handleLightboxOpen(index)}
          >

            <img
              src={src}
              data-lightbox={lbType}
              data-lightbox-src={lbSrc ? lbSrc : null}
              alt={alt}
            />

          </button>
        ))}
      </div>

      <div
        className='lightbox'
        ref={lightbox}
        aria-hidden={!lightboxVisible}
        onClick={handleCloseOutside}
      >
        <div className='button-group lightbox__buttons'>
          <button
            ref={lbPrevious}
            className='button button--icon-only lightbox__button'
            onClick={() => handleNextPrevious(-1)}
          >
            <span
              className='icon icon-arrow-left'
              aria-label='Previous'
            ></span>
          </button>
          <button
            ref={lbNext}
            className='button button--icon-only lightbox__button'
            onClick={() => handleNextPrevious(1)}
          >
            <span
              className='icon icon-arrow-right'
              aria-label='Next'
            ></span>
          </button>
          <button
            ref={lbClose}
            className='button button--icon-only lightbox__button'
            onClick={handleLightboxClose}
          >
            <span className='icon icon-close' aria-label='Close'></span>
          </button>
        </div>

        <figure className='lightbox__container' ref={lbContent}>
          <div className='lightbox__media'>{updateLightboxContent()}</div>
          <figcaption className='lightbox__caption'>
            {images[currentLB].lbCaption || images[currentLB].alt}
          </figcaption>
        </figure>
      </div>
    
    </Fragment>
  
  );

};

export default Lightbox;