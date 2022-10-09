import React, { useState, useRef } from 'react';

import Modal from './Modal';

const ModalParent = () => {

    const [modalOpen, setModalOpen] = useState(false);

	const lastFocused = useRef(null);

    const modalOpenHandler = (e) => {
		setModalOpen(true);
		lastFocused.current = e.target;
	};

    const modalCloseHandler = () => {
        setModalOpen(false);
		lastFocused.current.focus();
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

			<Modal modalOpen={modalOpen} modalCloseHandler={modalCloseHandler}>
				<div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
						veritatis harum quibusdam. Sapiente doloremque, earum reiciendis
						nesciunt ipsa placeat quod laudantium eum, perspiciatis eos, soluta
						deleniti dolorum inventore delectus amet.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
						veritatis harum quibusdam. Sapiente doloremque, earum reiciendis
						nesciunt ipsa placeat quod laudantium eum, perspiciatis eos, soluta
						deleniti dolorum inventore delectus amet.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
						veritatis harum quibusdam. Sapiente doloremque, earum reiciendis
						nesciunt ipsa placeat quod laudantium eum, perspiciatis eos, soluta
						deleniti dolorum inventore delectus amet.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
						veritatis harum quibusdam. Sapiente doloremque, earum reiciendis
						nesciunt ipsa placeat quod laudantium eum, perspiciatis eos, soluta
						deleniti dolorum inventore delectus amet.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
						veritatis harum quibusdam. Sapiente doloremque, earum reiciendis
						nesciunt ipsa placeat quod laudantium eum, perspiciatis eos, soluta
						deleniti dolorum inventore delectus amet.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
						veritatis harum quibusdam. Sapiente doloremque, earum reiciendis
						nesciunt ipsa placeat quod laudantium eum, perspiciatis eos, soluta
						deleniti dolorum inventore delectus amet.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
						veritatis harum quibusdam. Sapiente doloremque, earum reiciendis
						nesciunt ipsa placeat quod laudantium eum, perspiciatis eos, soluta
						deleniti dolorum inventore delectus amet.
					</p>
				</div>
			</Modal>
		</>
	);
};

export default ModalParent;