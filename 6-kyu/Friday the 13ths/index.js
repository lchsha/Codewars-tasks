


/*

Create the function fridayTheThirteenths that accepts a start year and an end year (inclusive), and returns all of the dates where the 13th of a month lands on a Friday in the given range of year(s).

The return value should be a string where each date is seperated by a space. The date should be formatted like 9/13/2014 where months do not have leading zeroes and are separated with forward slashes.

If no end year is given, only return friday the thirteenths during the start year.

Examples
fridayTheThirteenths(1999, 2000)
  // returns "8/13/1999 10/13/2000"

fridayTheThirteenths(2014, 2015)
  // returns "6/13/2014 2/13/2015 3/13/2015 11/13/2015"

fridayTheThirteenths(2000)
  // returns "10/13/2000"
This kata was designed to use the built-in Date object. Dates can often be finicky, so while there are other methods to get the correct dates, I can't gurantee they will work.

*/


function fridayTheThirteenths(start, end) {
	let st;
	let ed;
	if (end == undefined) {
		st = new Date(start, 0);
		ed = new Date(start + 1, 0);
	} else {
		st = new Date(start, 0);
		ed = new Date(end + 1, 0);
	}
	let str = [];

	let yearSt = st.getFullYear();
	let yearEd = ed.getFullYear();

	for (let i = yearSt; i < yearEd; i++) {
		for (let j = 0; j < 12; j++) {
			let days = getDays(i, j);
			for (let k = 0; k < days.length; k++) {
				let date = new Date(i, j, days[k]);
				if (date.getDay() == 5 && days[k] == 13) {
					let result = (j + 1) + '/' + days[k] + '/' + i;
					str.push(result);
				}
			}
		}
	}
	return str.join(' ');
}

function getDays(year, month) {
	let arr = [];
	let date = new Date(year, month + 1, 0).getDate();
	for (let i = 1; i <= date; i++) {
		arr.push(i)
	}
	return arr;
}