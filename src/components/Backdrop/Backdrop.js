import React from 'react';


import { Link } from 'react-router-dom';

const Backdrop = ( props ) => {

    const { 
		title = 'Backdrop Title',
		imageURL = 'https://via.placeholder.com/1500x750',
		imageAlt = 'Placeholder',
		fixedHeight = null
	} = props;

	let classFixed = fixedHeight !== null ? ' backdrop--fixed': '';
	let styleFixed = {'--backdrop-fixed-height': fixedHeight !== null ? `${fixedHeight}px` : null };
	
	return (
		<Link
			to="/"
			className={`backdrop${classFixed}`}
			style={styleFixed}>

			<div className='backdrop__image'>
				<img className='opacity-40' src={imageURL} alt={imageAlt} />
			</div>

			<div className='backdrop__cover'>
				<div className='container medium margin-y-4'>
					<h1 className='text-shadow'>{title}</h1>
				</div>
			</div>
		
		</Link>
	);
}

export default Backdrop;