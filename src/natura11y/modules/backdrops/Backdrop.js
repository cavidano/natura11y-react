import React from 'react';

const Backdrop = ( props ) => {

    const { 
		title = 'Backdrop Title',
		imageURL = 'https://via.placeholder.com/1500x750',
		imageAlt = 'Placeholder',
		fixedHeight = false
	} = props

	return (
		<div class={`backdrop theme-dark ${fixedHeight ? 'backdrop--fixed' : ''}`}>

			<div class='backdrop__image'>
				<img class='opacity-40' src={imageURL} alt={imageAlt} />
			</div>

			<div class='backdrop__cover align-content-end'>
				<div class='container medium margin-y-4'>
					<h1 class='text-shadow'>
						{title}
					</h1>
				</div>
			</div>
		
		</div>
	);
}

export default Backdrop;