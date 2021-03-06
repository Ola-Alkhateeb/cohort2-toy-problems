/*
 * Write a function that accepts a 2-dimensional array (array of arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Example:
    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);
    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix){
	var arr = [] ;
	var  i = 0
	while(i<matrix.length){
		for (var j = 0; j < matrix[0].length; j++) {
			arr.push(matrix[0][j])
		}
		matrix.shift() ;
		var temp = matrix[0]; 
		matrix[0] = matrix[1].reverse() ;
		matrix[1] = matrix[0];
		console.log(matrix[0])
	}
	return arr ;
};