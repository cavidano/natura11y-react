import React from 'react';

const Backdrop = ( props ) => {

    const { 
		title = 'Backdrop Title',
		imageURL = 'https://via.placeholder.com/1500x750',
		imageAlt = 'Placeholder',
		fixedHeight = false
	} = props

	return (
		<article className={`backdrop theme-dark ${fixedHeight ? 'backdrop--fixed' : ''}`}>

			<div className='backdrop__image'>
				<img className='opacity-40' src={imageURL} alt={imageAlt} />
			</div>

			<div className='backdrop__cover align-content-end'>
				<div className='container medium margin-y-4'>
					<h1 className='text-shadow'>{title}</h1>
				</div>
			</div>
		
		</article>
	);
}

export default Backdrop;