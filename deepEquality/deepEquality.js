/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */

  var deepEquals = function(obj1, obj2){
  	var str1 = JSON.stringify(obj1);
  	var str2 = JSON.stringify(obj2);
  	for (var i = 0; i < str1.length; i++) {
  		if(str1[i]!== str2[i]){
  			return false ;
  		}
  	}
  	return true ;
  }

  // time complexity is O(n)