/*

// About

*/

import React, { useState } from 'react';

import Accordion from '../natura11y-components/accordion/Accordion';
import Alert from '../natura11y-components/alerts/Alert';
import Modal from '../natura11y-components/modal/Modal'

const Examples = () => {
	const [showAlert, setShowAlert] = useState(true);

	const handleAlertClose = () => {
		setShowAlert(false);
	};

	return (
		<>
			<div className='container narrow margin-y-5'>
                <h1>Hello</h1>
				<Accordion />
			</div>
		</>
	);
};

export default Examples;