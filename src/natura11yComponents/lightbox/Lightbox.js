import React, { Fragment, useEffect, useState, useRef } from 'react';

import { handleOverlayOpen, handleOverlayClose } from '../../utilities/overlay';

const Lightbox = (props) => {

    const { 
        isOpen,
        src,
        caption,
        type,
        onClose,
        onNext,
        onPrevious
    } = props;

	return (

        <div
            className='lightbox'
            aria-hidden={!isOpen}
        >
            <div className='button-group lightbox__buttons'>
                <button
                    className='button button--icon-only'
                    onClick={onPrevious}
                >
                    <span className='icon icon-arrow-left' aria-label='Previous'></span>
                </button>
                <button
                    className='button button--icon-only'
                    onClick={onNext}
                >
                    <span className='icon icon-arrow-right' aria-label='Next'></span>
                </button>
                <button
                    className='button button--icon-only'
                    onClick={onClose}
                >
                    <span className='icon icon-close' aria-label='Close'></span>
                </button>
            </div>

            <figure className='lightbox__container'>
                <div className='lightbox__image'>
                    {type === 'image' && <img src={src} alt={caption} />}
                </div>
                <figcaption className='lightbox__caption'>
                    {caption}
                </figcaption>
            </figure>
        </div>
    
    );
};

export default Lightbox;
