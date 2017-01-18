/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
Calculate the sum of the digits of the number 2^1000?
Hint the answer is 1366.
*/


var powerOfTwo = function(num){
	var result = toFixed(Math.pow(2,num));
	var sum = 0 ;
	var answer = result.toString() 
	for (var i = answer.length - 1; i >= 0; i--) {
		sum+=Number(answer[i])
	}
	return sum ;
}

// i used this function from online resource i've tried to write it my self but i had a bug and it seems i've missed something inside
// and that's why it returned for me a wronge number and i used this one instead ;
var toFixed = function (x) {
	var result = '';
	var xStr = x.toString();
	var digitCount;
	var exponent ;
	var mod ;

	if(xStr.indexOf('e') === -1){
		digitCount = xStr.length
	} else {
		digitCount = (parseInt(xStr.substr(xStr.indexOf('e') + 1)) + 1);
	}

	for (var i = 1; i <= digitCount; i++) {
		mod = (x % Math.pow(10, i)).toString(10);
		if(mod.indexOf('e') === -1){
			exponent = 0 ;
		} else exponent= parseInt(mod.substr(mod.indexOf('e')+1));

		if ((exponent === 0 && mod.length !== i) || (exponent > 0 && exponent !== i-1)) {
			result = '0' + result;
		}
		else {
			result = mod.charAt(0) + result;
		}
	}
	return result;
}