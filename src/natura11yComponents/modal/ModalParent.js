import React, { useState, useRef, useEffect } from 'react';

import Modal from './Modal';

const ModalParent = () => {

    const [isOpen, setIsOpen] = useState(false);

	const [modalExample, setModalExample] = useState(null);

	const lastFocused = useRef(null);

    const modalOpenHandler = (e) => {
		setModalExample(e.target.dataset.modal);
		setIsOpen(true);

		console.log(`Which modal? ${modalExample}`);

		lastFocused.current = e.target;
	};

    const modalCloseHandler = () => {
        setIsOpen(false);
		lastFocused.current.focus();
    };

	const modalBody = () => {

		switch (modalExample) {

			case 'one':
				return (
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
					</div>
				);

				break;

			case 'two':
				return (
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
					</div>
				);

				break;
			
			default:
				// do nothing
				return;
		}
	};

	useEffect(() => {

	console.log(`hello? ${modalExample}`);

	}, [modalExample]);

	return (
		<>
			<div className='grid grid--column-2 gap-3'>
				<button
					className='button width-100 theme-primary'
					data-modal-open='modal-example-01'
					onClick={modalOpenHandler}
					data-modal='one'
				>
					Modal One
				</button>

				<button
					className='button width-100 theme-primary'
					data-modal-open='modal-example-01'
					onClick={modalOpenHandler}
					data-modal='two'
				>
					Modal Two
				</button>
			</div>

			<Modal
				isOpen={isOpen}
				modalCloseHandler={modalCloseHandler}
				closeOutside={true}
				scrollAll={false}
				title={modalExample === 'one' ? 'Modal One' : 'Modal Two' }
			>
			{modalBody()}
			</Modal>
		</>
	);
};

export default ModalParent;