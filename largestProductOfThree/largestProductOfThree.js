/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function(array) {
	var sortedArray = array.sort(); 
	return sortedArray[sortedArray.length-1] * sortedArray[sortedArray.length-2] * sortedArray[sortedArray.length-3]
};




