import React, { useState, useRef } from 'react';

import Modal from './Modal';

const ModalParent = () => {

    const [isOpen, setIsOpen] = useState(false);

	const lastFocused = useRef(null);

    const modalOpenHandler = (e) => {
		setIsOpen(true);
		lastFocused.current = e.target;
	};

    const modalCloseHandler = () => {
        setIsOpen(false);
		lastFocused.current.focus();
    };

	const modalExampleBodyA = (
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
	);

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
				isOpen={isOpen}
				modalCloseHandler={modalCloseHandler}
				closeOutside={true}
				scrollAll={true}
				
			>
			{modalExampleBodyA}
			</Modal>
		</>
	);
};

export default ModalParent;