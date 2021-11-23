


/*

Task
You will be given a string of English digits "stuck" together, like this:

"zeronineoneoneeighttwoseventhreesixfourtwofive"

Your task is to split the string into separate digits:

"zero nine one one eight two seven three six four two five"

Examples
"three"              -->  "three"
"eightsix"           -->  "eight six"
"fivefourseven"      -->  "five four seven"
"ninethreesixthree"  -->  "nine three six three"
"fivethreefivesixthreenineonesevenoneeight"  -->  "five three five six three nine one seven one eight"

*/


function uncollapse(digits) {
	let numArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	let result = [];
	let digitsStr = digits;

	for (let i = 0; i < numArr.length; i++) {
		let l = numArr[i].length;
		if (numArr[i] == digitsStr.substr(0, l)) {
			result.push(digitsStr.substr(0, l));
			let str1 = digitsStr.split('');
			str1.splice(0, l);
			digitsStr = str1.join('');
			i = -1;
		}
	}

	return result.join(' ');
}