const repeatString = function (text, num) {
	if (num <= -1) {
		return 'ERROR';
	}
	let words = '';
	for (let i = 0; i < num; i++) {
		words += text;
	}
	return words;
};

module.exports = repeatString;
