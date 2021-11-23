




/*

Your function takes two arguments:

1. current father's age (years)
2. current age of his son (years)

Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

*/


function twiceAsOld(dad, son) {
	if (dad / son > 2) {
		for (let i = 0; i < dad; i++) {
			dad++;
			son++;
			if (dad / son == 2) {
				return i + 1;
			}
		}
	} else {
		for (let i = 0; i < dad; i++) {
			dad--;
			son--;
			if (dad / son == 2) {
				return i + 1;
			}
		}
	}
	return 0;
}