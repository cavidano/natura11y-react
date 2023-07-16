import React, { useEffect, useState, useRef } from 'react';

import { handleOverlayOpen, handleOverlayClose } from '../../utilities/overlay';

const Lightbox = () => {

	const images = [
		{
			src: 'https://picsum.photos/id/29/1600/900',
			alt: 'First random image',
			lbType: 'image',
			imgCaption: 'First random image caption',
		},
		{
			src: 'https://picsum.photos/id/287/1600/900',
			alt: 'Second random image',
			lbType: 'image',
			imgCaption: 'Second random image caption',
		},
	];

	const [currentLB, setCurrentLB] = useState(0);
	const [lightboxVisible, setLightboxVisible] = useState(false);

	const lightbox = useRef(null);
	const lbPreviuos = useRef(null);
	const lbNext = useRef(null);
	const lbClose = useRef(null);
	const lbContent = useRef(null);

	// useEffect(() => {
	// 	document.addEventListener('keydown', handleLightboxUpdate);

	// 	return () => {
	// 		document.removeEventListener('keydown', handleLightboxUpdate);
	// 	};
	// }, [lightboxVisible]);

	const handleLightboxOpen = (index) => {
		setCurrentLB(index);
		handleOverlayOpen(lightbox.current);
		setLightboxVisible(true);
	};

	const handleLightboxClose = () => {
		handleOverlayClose(lightbox.current);
		setLightboxVisible(false);
	};

	const handleLightboxUpdate = (e) => {
		console.log(e.code);
		switch (e.code) {
			case 'ArrowLeft':
				updateDirection(-1);
				lbPreviuos.current.focus();
				break;
			case 'ArrowRight':
				updateDirection(1);
				lbNext.current.focus();
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
		if (newLB < 0) newLB = images.length - 1;
		else if (newLB >= images.length) newLB = 0;
		setCurrentLB(newLB);
	};

	const handleCloseOutside = (event) => {

		const lightboxContentClick = lbContent.current.contains(event.target);

		if (
			!lightboxContentClick
			&& event.target !== lbPreviuos.current
			&& event.target !== lbNext.current
			&& event.target !== lbClose.current) {
			handleLightboxClose();
		}
	};

	const lightboxImages = images.map(({ src, alt, lbType }, index) => (
		<button
			key={index}
			className='lightbox-element'
			onClick={() => handleLightboxOpen(index)}
		>
			<img src={src} data-lightbox={lbType} alt={alt} />
		</button>
	));

	return (
		<>
			<div className='grid grid--column-2 gap-2'>{lightboxImages}</div>

			<div
				className='lightbox'
				ref={lightbox}
				aria-hidden={!lightboxVisible}
				onClick={handleCloseOutside}
				onKeyDown={handleLightboxUpdate}
			>
				<div className='button-group lightbox__buttons'>
					<button
						ref={lbPreviuos}
						className='button button--icon-only'
						onClick={() => handleNextPrevious(-1)}
					>
						<span className='icon icon-arrow-left' aria-label='Previous'></span>
					</button>
					<button
						ref={lbNext}
						className='button button--icon-only'
						onClick={() => handleNextPrevious(1)}
					>
						<span className='icon icon-arrow-right' aria-label='Next'></span>
					</button>
					<button
						ref={lbClose}
						className='button button--icon-only'
						onClick={handleLightboxClose}
					>
						<span className='icon icon-close' aria-label='Close'></span>
					</button>
				</div>

				<figure className='lightbox__container' ref={lbContent}>
					<div className='lightbox__image'>
						{images[currentLB].lbType === 'video' ? (
							<video controls>
								<source src={images[currentLB].src} type='video/mp4' />
							</video>
						) : (
							<img src={images[currentLB].src} alt={images[currentLB].alt} />
						)}
					</div>
					<figcaption className='lightbox__caption'>
						{images[currentLB].imgCaption || images[currentLB].alt}
					</figcaption>
				</figure>
			</div>
		</>
	);
};

export default Lightbox;