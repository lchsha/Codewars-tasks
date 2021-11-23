


/*

Funny Dots
You will get two integers n (width) and m (height) and your task is to draw the following pattern. Each line is seperated with a newline (\n)

Both integers are equal or greater than 1; no need to check for invalid parameters.

Examples

														  +---+---+---+
				 +---+                          | o | o | o |
dot(1, 1) => | o |            dot(3, 2) =>  +---+---+---+
				 +---+                          | o | o | o |
														  +---+---+---+

*/


function dot(n, m) {
	let res = '+' + '---+'.repeat(n);

	for (let i = 0; i < m; i++) {
		res = res + '\n' + '| o '.repeat(n) + '|' + '\n' + '+' + '---+'.repeat(n);
	}
	return res
}