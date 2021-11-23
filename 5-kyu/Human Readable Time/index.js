


/*

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

*/

function humanReadable(sec) {
	let result = [];
	let hours = Math.floor(sec / (60 * 60));
	let minutes = Math.floor((sec / 60) - (hours * 60));

	let hours2 = sec / (60 * 60);
	let minutes2 = Math.floor(hours2 * 60);
	let tmp = minutes2 * 60;

	let seconds = sec - tmp;
	result.push(addZero(hours), addZero(minutes), addZero(seconds));

	return result.join(':');
}

function addZero(num) {
	if (num < 10) {
		return '0' + num;
	} else {
		return num;
	}
}