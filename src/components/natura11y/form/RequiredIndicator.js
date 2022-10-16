import React from 'react';

import Icon from '../icon/Icon';

const RequiredIndicator = ({text = 'Required fields indicated with'}) => {
	return (
		<p class='required-indicator' aria-hidden='true'>
			<span class='required-indicator__text'>
				{text}
			</span>
            <Icon iconHandle='asterisk' />
		</p>
	);
};

export default RequiredIndicator;