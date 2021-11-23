


/*

Find the most common letter (not space) in the string(always lowercase and 2 < words) and replace it with the letter.

If such letters are two or more, choose the one that appears in the string( earlier.

For example:

('my mom loves me as never did', 't') => 'ty tot loves te as never did'
('real talk bro', 'n') => 'neal talk bno'
('great job go ahead', 'k') => 'grekt job go khekd'

*/


function replaceCommon(s, l) {
	let obj = {};

	for (let letter of s) {
		obj[letter] = (obj[letter] || 0) + 1;
	}

	let max = 0;
	let change;
	for (let [key, value] of Object.entries(obj)) {
		if (key != ' ' && value > max) {
			max = value;
			change = key;
		}
	}
	let reg = new RegExp(change, 'g');

	return s.replace(reg, l);
}