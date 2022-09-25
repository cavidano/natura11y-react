/*

// About

*/

import React, { useState } from 'react';

import Accordion from '../natura11y-components/accordion/Accordion';
import Alert from '../natura11y-components/alerts/Alert';
import Modal from '../natura11y-components/modal/Modal'

const About = () => {
	const [showAlert, setShowAlert] = useState(true);

	const handleAlertClose = () => {
		setShowAlert(false);
	};

	return (
		<>
			<div className='container narrow margin-y-5'>
				<Accordion />

				{showAlert && 
					<Alert handleAlertClose={handleAlertClose}>
						<p>
							Thank you for your feedback. A confirmation message has been sent to your email. Return to our <a href="#1">homepage</a>.
						</p>
					</Alert>
				}
			</div>
		</>
	);
};

export default About;