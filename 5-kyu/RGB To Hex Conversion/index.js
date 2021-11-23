


/*

The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/


function rgb(r, g, b) {
	let arr = [];
	arr.push(r, g, b);

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < 0) {
			arr[i] = 0;
		} else if (arr[i] > 255) {
			arr[i] = 255;
		}
	}

	let newArr = arr.map((item) => {
		item < 0 ? 0 : item;
		item > 255 ? 255 : item;
		return item.toString(16);
	});

	for (let i = 0; i < newArr.length; i++) {
		if (newArr[i].length == 1) {
			newArr[i] = "0" + newArr[i];
		}
	}

	return newArr.join('').toUpperCase();
}