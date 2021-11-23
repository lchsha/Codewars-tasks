




/*

Write a function that checks if a given string (case insensitive) is a palindrome.

*/


function isPalindrome(str) {
	str = str.toLowerCase();
	let res = str.split('').reverse().join('');
	return str == res ? true : false;
}