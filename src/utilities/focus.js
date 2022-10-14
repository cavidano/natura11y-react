/*

In this file:

// A. Focusable Elements
// B. Get Filtered Elements

*/

//////////////////////////////////////////////
// A. Get Focusable Elements
//////////////////////////////////////////////

export const getFocusableElements = (element = document) => {
    
    const els = [
      'a[href]',
      'button',
      'input',
      'textarea',
      'select',
      'details',
      '[tabindex]:not([tabindex="-1"])'
    ];

    return [...element.querySelectorAll(els)].filter(el => !el.hasAttribute('disabled') && !el.getAttribute("aria-hidden"));
}

//////////////////////////////////////////////
// B. Get Filtered Elements
//////////////////////////////////////////////

export const getFilteredElements = (
	elementParent = document,
	classFilter = null
	) => {
    
	let nodeList = [];
	
	const getNodes = function (node) {

		if (node.classList.contains(classFilter)) {
			return NodeFilter.FILTER_ACCEPT;
		} else {
			return NodeFilter.FILTER_Reject;
		}
	};

	const treeWalker = document.createTreeWalker(
		elementParent,
		NodeFilter.SHOW_ELEMENT,
		classFilter !== null && getNodes
	);

	let node = treeWalker.nextNode;

	while (node) {
		nodeList.push(node);
		node = treeWalker.nextNode();
	}
	
	return nodeList.filter(node => node.classList);
}