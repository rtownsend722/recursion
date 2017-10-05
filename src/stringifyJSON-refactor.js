var stringifyJSON = function(obj) {


	/*Failure Cases*/
	if (obj === undefined || typeof obj === "function") {
		return;
	}

	if (typeof obj === "string") {
		return '"' + obj + '"';
	}

	/*Object Cases*/
	/*Array Object*/
	if (Array.isArray(obj)) {
			var stringified = [];
			for (var i = 0; i < obj.length; i++) {
				stringified.push(stringifyJSON(obj[i]));
			}
			return '[' + stringified.join(',') + ']';
	}

	/*"Object" Object*/
	//Object can not be null
	if (obj && typeof obj === "object") {
		var stringified = [];
		for (var key in obj) {
			if (obj[key] === undefined || typeof (obj[key]) === 'function') {
				// loop iteration control. Doesn't terminate loop, just iterate on next value and stop invocation of subsequent lines of code
				continue;
			}
			stringified.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
		}
		return '{' + stringified.join(',') + '}';
	} 

	/*Null and Primitive Cases*/
	//Type coersion allows us to group these cases together. They just coerce to string. Boom.
	return '' + obj;
};

