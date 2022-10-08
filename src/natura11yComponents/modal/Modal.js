/*

// Modal

*/

import React, { useEffect, useRef } from 'react';

import { getFocusableElements } from '../../utilities/focus';

const Modal = ( props ) => {

	const modalRef = useRef();

	const {
		scrollAll = false,
		closeOutside = false,
		title = 'Modal Title',
		modalOpen = modalOpen,
		modalCloseHandler = modalCloseHandler,
		children = <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

	} = props;

  	let classScrolAll = scrollAll === true ? ' modal--scroll-all' : '';

	useEffect(() => {

		const modalTarget = modalRef.current;
		const modalContent = modalTarget.querySelector('.modal__content');

		let lastFocusedElement;

		 lastFocusedElement = document.activeElement;
		if (modalOpen) {
		

			console.log('last focused ========== ', lastFocusedElement);
		
			document.querySelector('body').classList.add('modal-open');

			modalContent.setAttribute('tabindex', 0);
			modalContent.focus();
			modalContent.setAttribute('tabindex', -1);

			const focusableElements = getFocusableElements(modalTarget);

			const firstElementOfModal = focusableElements[0];
			const lastElementOfModal = focusableElements[focusableElements.length - 1];

			modalTarget.addEventListener('keydown', (event) => {

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
				
			});

		} else {
			console.log(lastFocusedElement, 'helllo???????')
			document.querySelector('body').classList.remove('modal-open');
			lastFocusedElement.focus();
		}

	}, [modalOpen]);

	return (
		<div
			className={`modal ${classScrolAll} padding-2`}
			id='modal-example-01'
			role='dialog'
			aria-hidden={modalOpen ? false : true}
			data-modal-close-outside={closeOutside}
			ref={modalRef}
			>
			<div
				className='modal__content narrow border-radius box-shadow-3'
				aria-labelledby='modal-example-01-title'
			>
				<header className='modal__content__head border-bottom'>
					<h2 className='h6' id='modal-example-01-title'>
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