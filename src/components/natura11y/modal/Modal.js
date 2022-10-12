/*

// Modal

*/

import React, { useEffect, useRef } from 'react';

import { getFocusableElements } from '../../../utilities/focus';

const Modal = ( props ) => {

	const {
		scrollAll = false,
		closeOutside = false,
		title = 'Modal Title',
		isOpen = isOpen,
		modalCloseHandler = modalCloseHandler,
		children = <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

	} = props;

	const modalContainer = useRef();
	const modalContent = useRef();

  	let classScrolAll = scrollAll === true ? ' modal--scroll-all' : '';

	const handleKeyDown = (event) => {

		const focusableElements = getFocusableElements(modalContent.current);
		const firstElementOfModal = focusableElements[0];
		const lastElementOfModal = focusableElements[focusableElements.length - 1];

		switch (event.code) {
		
			case 'Tab':
				if (document.activeElement === lastElementOfModal) {
					if (!event.shiftKey) {
						event.preventDefault();
						firstElementOfModal.focus();
					}
				}

				if (document.activeElement === firstElementOfModal) {
					if (event.shiftKey) {
						event.preventDefault();
						lastElementOfModal.focus();
					}
				}

				if (document.activeElement === modalContent) {
					if (event.shiftKey) {
						event.preventDefault();
						firstElementOfModal.focus();
					}
				}

				break;

			case 'Escape':
				modalCloseHandler();
				break;
			
			default:
			// do nothing
		}

	};

	const handleCloseOutside = (event) => {

		const modalContentClick = modalContent.current.contains(event.target);

		if (closeOutside && !modalContentClick) {
			modalCloseHandler();
		}
	};

	useEffect(() => {

		if (isOpen) {
			document.querySelector('body').classList.add('modal-open');

			modalContent.current.setAttribute('tabindex', 0);
			modalContent.current.focus();
			modalContent.current.setAttribute('tabindex', -1);
			
			modalContainer.current.scrollTop = 0;
		} else {
			document.querySelector('body').classList.remove('modal-open');
		}
	}, [isOpen]);

	return (
		<div
			className={`modal ${classScrolAll} padding-4`}
			ref={modalContainer}
			id='modal-example-01'
			role='dialog'
			aria-hidden={isOpen ? false : true}
			onClick={handleCloseOutside}
		>
			<div
				className='modal__content narrow border-radius box-shadow-3'
				aria-labelledby='modal-example-01-title'
				ref={modalContent}
				onKeyDown={handleKeyDown}
			>
				<header className='modal__content__head border-bottom'>
					<h2 id='modal-example-01-title'>
						{title}
					</h2>
					<button
						className='button button--icon-only'
						onClick={modalCloseHandler}
					>
						<span className='icon icon-close' aria-hidden='true'></span>
					</button>
				</header>

				<main className='modal__content__body' id='modal-example-01-content'>
					{children}
				</main>

				<footer className='modal__content__foot border-top text-color-link'>
					<ul className='nav nav--horizontal justify-content-between'>
						<li>
							<a href='#1'>Secondary Action</a>
						</li>
						<li>
							<a className='button rounded-pill' href='#1'>
								Primary Action
							</a>
						</li>
					</ul>
				</footer>
			</div>
		</div>
	);
};

export default Modal;