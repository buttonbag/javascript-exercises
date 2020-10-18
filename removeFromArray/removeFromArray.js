const removeFromArray = (...a) => {
	let myArray = a[0];

	for (i = 1; i < a.length; i++) {
		if (
			/* value not present */ typeof a[i] !== 'undefined'
		) {
			/* ignore */
			console.log(a[i]);
		} else {
			myArray.splice(myArray.indexOf(a[i]), 1);
		}
		return myArray;
	}
};

module.exports = removeFromArray;
