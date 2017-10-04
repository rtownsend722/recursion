//add a parameter node to tell our function which node to look at it
var getElementsByClassName = function(className, node) {

  //nodes is local to every invocation of class name
	var nodes = [];
	//document.body is only invoked if the first half is falsey (default assignment)
  node = node || document.body;

	//compare node's classname with className
	var parts = node.className.split(' ');
	if (parts.indexOf(className) >= 0) {
    // if matched, save node
    nodes.push(node);
	}
  // iterate over children of node
  for (var i = 0; i < node.children.length; i++) {
  	// for each child, invoke searchNodes **MAGIC**
  	var childResults = getElementsByClassName(className, node.children[i]);
  	//this allows us to save child results and concat to nodes
  	nodes = nodes.concat(childResults);
  }
  // invoke searchNodes and define node as document.body to begin with
	return nodes
}