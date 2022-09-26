/*

// Modal

*/

const Modal = ( props ) => {

	const {
		scrollAll = false,
		closeOutside = false,
		title = 'Modal Title',
		children = <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

	} = props;

  	let classScrolAll = scrollAll === true ? ' modal--scroll-all' : '';

	return (
		<div
			className={`modal ${classScrolAll} padding-2`}
			id='modal-example-01'
			role='dialog'
			data-modal-close-outside={closeOutside}>
			<div
				className='modal__content narrow border-radius box-shadow-3'
				aria-labelledby='modal-example-01-title'
			>
				<header className='modal__content__head border-bottom'>
					<h2 className='h6' id='modal-example-01-title'>
						{title}
					</h2>
					<button className='button button--icon-only' data-modal-close>
						<span className='icon icon-close' aria-hidden='true'></span>
					</button>
				</header>

				<main className='modal__content__body' id='modal-example-01-content'>
					<p>
						The <strong>meerkat</strong> (Suricata suricatta) or suricate is a
						small <a href='#1'>mongoose</a> found in southern Africa. It is
						characterised by a broad head, large eyes, a pointed snout, long
						legs, a thin tapering tail, and a brindled coat pattern. The
						head-and-body length is around 24–35 cm (9.4–13.8 in), and the
						weight is typically between 0.62 and 0.97 kg (1.4 and 2.1 lb). The
						coat is light grey to yellowish brown with alternate, poorly defined
						light and dark bands on the back. Meerkats have foreclaws adapted
						for digging and have the ability to thermoregulate to survive in
						their harsh, dry habitat. Three subspecies are recognised.
					</p>
				</main>

				<footer className='modal__content__foot border-top text-color-link'>
					<ul className='nav nav--horizontal justify-content-between'>
						<li>
							<a href='#1'>Secondary Action</a>
						</li>
						<li>
							<a className='button rounded-pill' href='#1'>
								Primary Action
							</a>
						</li>
					</ul>
				</footer>
			</div>
		</div>
	);
};

export default Modal;