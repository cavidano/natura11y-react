import React, { useState, useRef } from 'react';

import Modal from './Modal';

const ModalParent = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [lastFocused, setLastFocused] = useState(null);

    const modalOpenHandler = (e) => {
		setModalOpen(true);

		setLastFocused(e.target);
		console.log('last-focused-is', lastFocused);
	};

    const modalCloseHandler = () => {
        setModalOpen(false);
		lastFocused.focus()
    };

	return (
		<>
			<button
				className='button width-100 theme-primary'
				data-modal-open='modal-example-01'
				onClick={modalOpenHandler}
			>
				Open Modal
			</button>

			<Modal
                modalOpen={modalOpen}
                modalCloseHandler={modalCloseHandler}
            />
		</>
	);
};

export default ModalParent;