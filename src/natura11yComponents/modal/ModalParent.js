import React, { useState } from 'react';

import Modal from './Modal';

const ModalParent = () => {

    const [modalOpen, setModalOpen] = useState(false);

    const modalOpenHandler = () => {
        setModalOpen(true);
    };

    const modalCloseHandler = () => {
        setModalOpen(false);
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