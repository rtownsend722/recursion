// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
	/*Input Cases*/

	/*Special Cases*/
	//obj is null or undefined
		//return nothing or error message
	if (obj === null) {
		return "null";
	}

	/*Failure Cases*/
		//return
	if (obj === undefined || typeof obj === "function") {
		return;
	}

	/*Simple Case*/
	//obj is a primitive 
	//convert obj to string if it isn't already a string
	if (typeof obj === "boolean" || typeof obj === "number") {
		return obj.toString();
	}
	//convert obj to string with double quotes if already a string
	if (typeof obj === "string") {
		return '"' + obj + '"';
	}


	/*Object Cases*/
	//obj is an array
		//convert each element to string (as long as it isn't a failure case)
	if (Array.isArray(obj)) {
		//Make sure array has values
		if (obj.length) {
			//create var to store stringified result
			var stringified = '';
			//iterate through and stringify each element
			for (var i = 0; i < obj.length; i++) {
				if (i === obj.length - 1) {
					stringified += stringifyJSON(obj[i]);
				} else {
					stringified += stringifyJSON(obj[i]) + ',';
				}
			}
			//wrap stringified array elements in brackets
			return '[' + stringified + ']';
		} else {
			return '[]';
		}
	}

	//obj is an "object"
		//convert each key to string (as long as it isn't a failure case)
		//convert each value to string (as long as it isn't a failure case)
	if (typeof obj === "object") {
		//create an array of keys to iterate through
		var keys = Object.keys(obj);
		//make sure keys array has values
		if (keys.length) {
			//creat var to store stringified obj
			var stringified = '';
			//iterate through keys and stringify each key and it's value
			for (var i = 0; i < keys.length; i++) {
				//create var to store current key
				var key = keys[i];
				//check that the current key or val is not a fn or undefined
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

