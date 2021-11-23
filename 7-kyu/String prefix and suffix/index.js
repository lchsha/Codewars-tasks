

/*

In this Kata, you will be given a string and your task will be to return the length of the longest prefix that is also a suffix. A prefix is the start of a string while the suffix is the end of a string. For instance, the prefixes of the string "abcd" are ["a","ab","abc"]. The suffixes are ["bcd", "cd", "d"]. You should not overlap the prefix and suffix.

for example:

solve("abcd") = 0, because no prefix == suffix.
solve("abcda") = 1, because the longest prefix which == suffix is "a".
solve("abcdabc") = 3. Longest prefix which == suffix is "abc".
solve("aaaa") = 2. Longest prefix which == suffix is "aa". You should not overlap the prefix and suffix
solve("aa") = 1. You should not overlap the prefix and suffix.
solve("a") = 0. You should not overlap the prefix and suffix.
All strings will be lowercase and string lengths are 1 <= length <= 500

More examples in test cases. Good luck!

*/



function solve(s) {
	s = s.split('');
	let half = Math.round(s.length / 2);
	let arr1 = s.slice(0, half);
	let arr2 = s.slice(half);
	if (arr1.length > arr2.length) arr1.pop();

	let count = 0;
	let k = 0;
	for (let i = 0; i < arr2.length; i++) {
		if (arr1[i] == arr2[i]) {
			count++;
		} else {
			arr2.splice(0, 1);
			i = -1;
		}
	}
	return arr2.length;
}




































