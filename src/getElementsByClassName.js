function getElementsByClassName(className){
	/*Global Variables*/
	var elements = document.body;
	var matches = [];

	/*Search Body Element*/
	if (document.body.classList === undefined) {

	} else {
		for (var k = 0; k < document.body.classList.length; k++) {
			if (document.body.classList[k] === className) {
				matches.push(document.body);
			}
		}
	}
	
	/*Recursive Function - Search Child Nodes of Body*/
	function findClasses(node) {
		/*Traverse Nested Children*/
		for (var i = 0; i < node.childNodes.length; i++) {
			if (node.childNodes[i].childNodes.length) {
				findClasses(node.childNodes[i]);
			}

		/*Check Current Node for Class Attributes*/
			if (node.childNodes[i].classList === undefined) {
			} else {
				for (var j = 0; j < node.childNodes[i].classList.length; j++) {
					if (node.childNodes[i].classList[j] === className) { matches.push(node.childNodes[i]); }
				}
			}

		}		

	}

	/*Call Recursive Function and Return Output*/
	findClasses(elements);
	return matches;
}

