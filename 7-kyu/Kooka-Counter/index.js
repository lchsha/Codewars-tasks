




/*

A family of kookaburras are in my backyard.

I can't see them all, but I can hear them!

How many kookaburras are there?

Hint
The trick to counting kookaburras is to listen carefully

The males go HaHaHa...

The females go hahaha...

And they always alternate male/female

*/


var kookaCounter = function (laugh) {

	let result = [];

	for (let i = 0; i < laugh.length; i += 2) {
		if (result[result.length - 1] != laugh.substr(i, 2)) {
			result.push(laugh.substr(i, 2))
		}
	}
	return result.length
}




































