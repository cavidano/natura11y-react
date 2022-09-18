/*

// About

*/

const About = () => {
	return (
		<>
			<button
				className='button width-100 theme-primary display-block border-radius'
				data-toggle='collapse'
				data-target-toggle='#target-id'
			>
				Navigation
			</button>

			<div className='collapse border border-radius margin-y-3' id='target-id'>
				<ul className='nav nav--divider' role='navigation'>
					<li>
						<a href='#1'>Link</a>
					</li>
					<li>
						<a href='#1'>Link</a>
					</li>
					<li>
						<a href='#1'>Link</a>
					</li>
				</ul>
			</div>

			<div className="accordion">

    <button
        className="accordion__button h5"
        id="acc-button-example-01"
        data-accordion="button"
        aria-controls="acc-panel-example-01"
        aria-expanded="false">
            Danaus Plexippus
    </button>

    <div
        className="accordion__panel"
        id="acc-panel-example-01"
        data-accordion="panel"
        aria-labelledby="acc-button-example-01"
        role="region">

        <div className="accordion__panel__content">
            <p>
                The monarch butterfly or simply monarch is a milkweed butterfly in the family Nymphalidae. Other common names, depending on region, include milkweed, common tiger, wanderer, and black veined brown. It may be the most familiar <a href="#1">North American</a> butterfly, and is considered an iconic pollinator species.
            </p>
        </div>

    </div>

</div>
		</>
	);
};

export default About;
