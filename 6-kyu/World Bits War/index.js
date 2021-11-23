


/*

Variation of this nice kata, the war has expanded and become dirtier and meaner; both even and odd numbers will fight with their pointy 1s. And negative integers are coming into play as well, with, ça va sans dire, a negative contribution (think of them as spies or saboteurs).

A number's strength is determined by the number of set bits (1s) in its binary representation. Negative integers work against their own side so their strength is negative. For example -5 = -101 has strength -2 and +5 = +101 has strength +2.

The side with the largest cumulated strength wins.

Again, three possible outcomes: odds win, evens win and tie.

Examples:

bitsWar([1,5,12]) => "odds win" //1+101 vs 1100, 3 vs 2
bitsWar([7,-3,20]) => "evens win" //111-11 vs 10100, 3-2 vs 2
bitsWar([7,-3,-2,6]) => "tie" //111-11 vs -1+110, 3-2 vs -1+2

*/


function bitsWar(nums) {
	if (nums.length == 0) {
		return 'tie';
	}

	let even = [];
	let odd = [];
	for (let i = 0; i < nums.length; i++) {
		nums[i] % 2 == 0 ? even.push(nums[i].toString(2)) : odd.push(nums[i].toString(2));
	}

	let sumEven = even.map(e => e.split('').reduce(function (acc, el) {
		return el == '1' ? acc + +el : acc;
	}, 0));;
	let sumOdd = odd.map(e => e.split('').reduce(function (acc, el) {
		return el == '1' ? acc + +el : acc;
	}, 0));

	for (let j = 0; j < odd.length; j++) {
		if (odd[j][0] == '-') {
			sumOdd[j] = -sumOdd[j];

		}
	}

	for (let u = 0; u < even.length; u++) {
		if (even[u][0] == '-') {
			sumEven[u] = -sumEven[u];
		}
	}

	sumOdd = sumOdd.reduce((acc, el) => acc + el, 0);
	sumEven = sumEven.reduce((acc, el) => acc + el, 0);

	if (sumEven == sumOdd) {
		return 'tie';
	} else if (sumEven > sumOdd) {
		return "evens win";
	} else if (sumEven < sumOdd) {
		return "odds win";
	}
}