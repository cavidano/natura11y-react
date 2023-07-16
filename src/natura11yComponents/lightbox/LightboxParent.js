import React, { useState, useEffect } from 'react';

import LightboxButton from './LightboxButton';
import Lightbox from './Lightbox';

const LightboxParent = () => {

    const [mediaArray, setMediaArray] = useState([]);
	const [currentLB, setCurrentLB] = useState(0);

    const [lightboxState, setLightboxState] = useState({
        isOpen: false,
        src: '',
        caption: '',
        type: '',
    });

    const handleClick = (src, caption, type) => {
        setLightboxState({ isOpen: true, src, caption, type });
    };

    const handleClose = () => {
        setLightboxState({ isOpen: false, src: '', caption: '', type: '' });
    };

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowRight') {
            const currentIndex = mediaArray.findIndex(media => media.src === lightboxState.src);
            const nextIndex = (currentIndex + 1) % mediaArray.length;
            const nextMedia = mediaArray[nextIndex];

            setLightboxState({
                isOpen: true,
                src: nextMedia.src,
                caption: nextMedia.caption,
                type: nextMedia.type
            });
        }

        if (e.key === 'ArrowLeft') {
            const currentIndex = mediaArray.findIndex(media => media.src === lightboxState.src);
            const previousIndex = currentIndex - 1 < 0 ? mediaArray.length - 1 : currentIndex - 1;
            const previousMedia = mediaArray[previousIndex];

            setLightboxState({
                isOpen: true,
                src: previousMedia.src,
                caption: previousMedia.caption,
                type: previousMedia.type
            });
        }
    };

    const handleMount = (media) => {
        setMediaArray((prevArray) => [...prevArray, media]);
    };


	const handleLightboxUpdate = (e) => {
		
        console.log(e.code);

		switch (e.code) {
			case 'ArrowLeft':
				updateDirection(-1);
				// lbPreviuos.current.focus();
				break;
			case 'ArrowRight':
				updateDirection(1);
				// lbNext.current.focus();
				break;
			default:
				return;
		}
	};

	const handleNextPrevious = (dir) => {
		updateDirection(dir);
	};

    const updateDirection = (dir) => {
        let newLB = currentLB + dir;

        if (newLB < 0) {
            newLB = mediaArray.length - 1;
        } else if (newLB >= mediaArray.length) {
            newLB = 0;
        }
        
        setCurrentLB(newLB);
    };
    
    useEffect(() => {
        console.log(currentLB, 'currentLB');

        const currentMedia = mediaArray[currentLB];

        if (currentMedia) {
            setLightboxState({
                isOpen: true,
                src: currentMedia.src,
                caption: currentMedia.caption,
                type: currentMedia.type
            });
        }
    }, [currentLB]);

    useEffect(() => {
        console.log(mediaArray, 'mediaArray');
		document.addEventListener('keydown', handleLightboxUpdate);

		return () => {
			document.removeEventListener('keydown', handleLightboxUpdate);
		};
	}, [lightboxState, mediaArray]);

    return (
        <div>
            <LightboxButton
                type='image'
                src='https://picsum.photos/id/29/1600/900'
                caption='Caption for example 1'
                onClick={handleClick}
                onMount={handleMount}
            />

            <LightboxButton
                type='image'
                src='https://picsum.photos/id/30/1600/900'
                caption='Caption for example 2'
                onClick={handleClick}
                onMount={handleMount}
            />

            <Lightbox
                isOpen={lightboxState.isOpen}
                src={lightboxState.src}
                caption={lightboxState.caption}
                type={lightboxState.type}
                onNext={() => handleNextPrevious(1)}
                onPrevious={() => handleNextPrevious(-1)}
                onClose={handleClose}
            />
        </div>
    );
};

export default LightboxParent;
