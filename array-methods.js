// *****************CHAINING METHODS EXERCISE*****************
/*instructions
Sort the numbers in DESCENDING order (10, 9, 8, 7, etc).
Remove any integers greater than 19.
Multiply each remaining number by 1.5 and then substract 1.
Then output (console) the sum of all the resulting numbers.
*/
// var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
// let endGame = integers

// .sort(function(a, b) {return b-a})
// .filter((num) => {return num < 19})
// .map((num) => {return(1.5 * num) - 1})
// .reduce((previous, current) => {return previous + current});  

// console.log("endGame: ", endGame);

var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];let endGame = integers.sort(function(a, b) {return b-a}).filter((num) => {return num < 19}).map((num) => {return(1.5 * num) - 1}).reduce((previous, current) => {return previous + current}); console.log("endGame: ", endGame);