var stringifyJSON = function(obj) {

	/*Object is Null*/
	if (obj === null) {
		return "null";
	}

	/*Failure Cases*/
	if (obj === undefined || typeof obj === "function") {
		return;
	}

	/*Primitive Cases*/
	if (typeof obj === "boolean" || typeof obj === "number") {
		return obj.toString();
	}

	if (typeof obj === "string") {
		return '"' + obj + '"';
	}


	/*Object Cases*/
	/*Array Object*/
	if (Array.isArray(obj)) {
		if (obj.length) {
			var stringified = '';
			for (var i = 0; i < obj.length; i++) {
				if (i === obj.length - 1) {
					stringified += stringifyJSON(obj[i]);
				} else {
					stringified += stringifyJSON(obj[i]) + ',';
				}
			}
			return '[' + stringified + ']';
		} else {
			return '[]';
		}
	}

	/*"Object" Object*/
	if (typeof obj === "object") {
		var keys = Object.keys(obj);
		if (keys.length) {
			var stringified = '';
			for (var i = 0; i < keys.length; i++) {
				var key = keys[i];
				if (typeof key === "function" || typeof obj[key] === "function" || key === undefined || obj[key] === undefined) {

				} else if (i === keys.length - 1) {
					stringified += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
				} else {
					stringified += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
				}
			}
			return '{' + stringified + '}';
		} else {
			return '{}';
		}
	} 
};

