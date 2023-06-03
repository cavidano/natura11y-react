//////////////////////////////////////////////
// B. Get Filtered Elements
//////////////////////////////////////////////

export const getFilteredElements = (
		elementParent = document,
		classFilter = ''
	) => {
    
	const nodeIterator = document.createNodeIterator(
		elementParent,
		NodeFilter.SHOW_ELEMENT,
		(node) => node.classList.contains(classFilter)
			? NodeFilter.FILTER_ACCEPT
			: NodeFilter.FILTER_REJECT
	);

	const elementList = [];

	let currentNode;

	while (currentNode = nodeIterator.nextNode()) {
		elementList.push(currentNode);
	}

	return elementList.filter(node => node.classList);
}