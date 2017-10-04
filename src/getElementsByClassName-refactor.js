var getElementsByClassName = function(className) {
	//create container for saved nodes
	//everytime I call searchNodes I might be modifying the nodes array. This creates a side-effect, because it changes the value of a variable in the outer environment, so this is not ideal. How can we do this without an inner function?
  var nodes = [];
	//create an inner function
	var searchNodes = function(node) {
		// one line of pseudocode map to 1 line of code
		
		//compare node's classname with className
		var parts = node.className.split(' ');
		if (parts.indexOf(className) >= 0) {
      // if matched, save node
      nodes.push(node);
		}
    // iterate over children of node
    for (var i = 0; i < node.children.length; i++) {
    	// for each child, invoke searchNodes **MAGIC**
    	searchNodes(node.children[i]);
    }
	}

  // invoke searchNodes and define node as document.body to begin with
	searchNodes(document.body);
	return nodes;
}

