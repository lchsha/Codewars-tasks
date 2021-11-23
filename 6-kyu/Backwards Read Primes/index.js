


/*

Backwards Read Primes are primes that when read backwards in base 10 (from right to left) are a different prime. (This rules out primes which are palindromes.)

Examples:
13 17 31 37 71 73 are Backwards Read Primes
13 is such because it's prime and read from right to left writes 31 which is prime too. Same for the others.

Task
Find all Backwards Read Primes between two positive given numbers (both inclusive), the second one always being greater than or equal to the first one. The resulting array or the resulting string will be ordered following the natural order of the prime numbers.

Examples (in general form):
backwardsPrime(2, 100) => [13, 17, 31, 37, 71, 73, 79, 97] backwardsPrime(9900, 10000) => [9923, 9931, 9941, 9967] backwardsPrime(501, 599) => []

See "Sample Tests" for your language.

Notes
Forth Return only the first backwards-read prime between start and end or 0 if you don't find any
Ruby Don't use Ruby Prime class, it's disabled.

*/


function backwardsPrime(start, stop) {
	let result = [];
	for (let i = start; i <= stop; i++) {
		let numReverse = +i.toString().split('').reverse().join('');
		if (isPrime(i, numReverse) && i !== numReverse) {
			result.push(i);
		}
	}
	return result.sort((a, b) => a - b);
}

function isPrime(num1, num2) {
	if (num1.length != num2.length) {
		return false;
	}
	let flag1 = true;
	let flag2 = true;
	for (let i = 2; i <= Math.sqrt(num1); i++) {
		if (num1 % i == 0) {
			flag1 = false;
		}
	}
	for (let i = 2; i <= Math.sqrt(num2); i++) {
		if (num2 % i == 0) {
			flag2 = false;
		}
	}
	return flag1 && flag2;
}