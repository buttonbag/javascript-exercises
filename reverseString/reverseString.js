const reverseString = function (word) {
	const letters = word.split('').reverse();
	return letters.join('');
};

module.exports = reverseString;
