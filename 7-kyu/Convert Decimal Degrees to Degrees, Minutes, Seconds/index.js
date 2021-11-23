



/*

Convert Decimal Degrees to Degrees, Minutes, Seconds.

Remember: 1 degree = 60 minutes; 1 minute = 60 seconds.

Input: Positive number.

Output: Array [degrees, minutes, seconds]. E.g [30, 25, 25]

Trailing zeroes should be omitted in the output. E.g

convert (50)
//correct output -> [50]
//wrong output -> [50, 0, 0]

convert(80.5)
//correct output -> [ 80, 30 ]
//wrong output -> [80, 30, 0]

convert(0.0001388888888888889)
//correct output -> [ 0, 0, 1 ]
//wrong output -> [1]
Round the seconds to the nearest integer.

*/



function convert(degrees) {
	let result = [];
	if (degrees == 0) {
		result.push(0);
		return result;
	} else if (isInteger(degrees)) {
		result.push(degrees);
		return result;
	}
	let d = Math.floor(degrees);

	let interM = degrees - d;
	let m = interM * 60;
	let realM = Math.floor(m);

	let interS = m - realM;
	let s = interS * 60;
	let realS = Math.round(s);

	if (d == 0 && realM == 0 && realS == 0) {
		result.push(realS);
	} else if (realS == 0) {
		result.push(d, realM);
	} else {
		result.push(d, realM, realS);
	}

	return result;
}

function isInteger(num) {
	return (num ^ 0) === num;
}



































