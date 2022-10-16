const BackdropStack = ( props ) => {

    const { 
		title = 'Backdrop Title',
		breakpoint = 'lg',
		imageOpacity = '20',
		imageURL = 'https://via.placeholder.com/1500x750',
		imageAlt = 'Placeholder'
	} = props;

	let classStack = `backdrop--stack--${breakpoint}`;

	return (
		<div className={`backdrop ${classStack}`}>

			<div className='backdrop__image'>
				<img
					className={`opacity-${imageOpacity}--${breakpoint}`}
					src={imageURL}
					alt={imageAlt}
				/>
			</div>

			<div className='backdrop__cover'>
				<div className='container medium margin-y-4'>
					<h1 className='text-shadow'>
						{title}
					</h1>
				</div>
			</div>
		
		</div>
	);
}

export default BackdropStack;