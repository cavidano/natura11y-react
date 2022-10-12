/*

// Backdrop

*/

const Backdrop = ( props ) => {

    const { 
		title = 'Backdrop Title',
		fixedHeight = null,
		imageOpacity = '30',
		imageURL = 'https://via.placeholder.com/1500x750',
		imageAlt = 'Placeholder'
	} = props;

	let classFixed = fixedHeight !== null ? ' backdrop--fixed': '';
	let styleFixed = {'--backdrop-fixed-height': fixedHeight !== null ? `${fixedHeight}` : null };

	return (
		<div className={`backdrop ${classFixed}`} style={styleFixed}>

			<div className='backdrop__image'>
				<img
					className={`opacity-${imageOpacity}`}
					src={imageURL}
					alt={imageAlt}
				/>
			</div>

			<div className='backdrop__cover'>
				<div className='container medium margin-y-4'>
					<h1 className='banner-headline text-shadow'>
						{title}
					</h1>
				</div>
			</div>
		
		</div>
	);
}

export default Backdrop;