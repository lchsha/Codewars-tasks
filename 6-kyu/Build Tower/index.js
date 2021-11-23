


/*

Build Tower
Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

Python: return a list;
JavaScript: returns an Array;
C#: returns a string[];
PHP: returns an array;
C++: returns a vector<string>;
Haskell: returns a [String];
Ruby: returns an Array;
Lua: returns a Table;
Have fun!

for example, a tower of 3 floors looks like below

[
  '  *  ',
  ' *** ',
  '*****'
]
and a tower of 6 floors looks like below

[
  '     *     ',
  '    ***    ',
  '   *****   ',
  '  *******  ',
  ' ********* ',
  '***********'
]

*/


function towerBuilder(n) {
	let q = n + n - 1;
	let result = [];
	let count = 0;
	for (let i = 0; i < n; i++) {
		let str = '';
		for (let i = 0; i < q; i++) {
			str += '*';
		}
		count++;
		str = str.split('');
		for (let k = 0; k < count - 1; k++) {
			str.push(' ');
			str.unshift(' ');
		}
		str = str.join('');
		q -= 2;
		result.push(str);
	}
	return result.reverse();
}