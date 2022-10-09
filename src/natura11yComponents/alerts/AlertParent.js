/*

// Alert Parent

*/

import React, { useState } from 'react';

import Alert from './Alert';

const AlertParent = () => {

	const [showAlert, setShowAlert] = useState(true);

    const handleAlertClose = () => {
		setShowAlert(false);
	};

	return (
		<>
			{showAlert && (
				<Alert handleAlertClose={handleAlertClose}>
					<p>
						Thank you for your feedback. A confirmation message has been sent to
						your email. Return to our <a href='#1'>homepage</a>.
					</p>
				</Alert>
			)}
		</>
	);
};

export default AlertParent;