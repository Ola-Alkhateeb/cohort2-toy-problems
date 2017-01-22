/*
Imagine you are playing a game of tic-tac-toe and you are trying to see if the current
board is solved.
If you never played the game, here is a good simulator: http://playtictactoe.org/
Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty,
1 if it is an X, or 2 if it is an O, like so:
[[0,0,1],
 [0,1,2],
 [2,1,0]]
We want our function to return -1 if the board is not solved yet, 1 if X won, 2 if O won,
or 0 if it's a draw.
You may assume that the board passed in is valid.
Example:
var board = [[0,0,1],
             [0,1,2],
             [2,1,0]];
ticTacToe(board);//should return -1
var solvedBoard = [[0,1,1],
                   [0,1,2],
                   [2,1,2]];
ticTacToe(solvedBoard);//should return 1
*/


function ticTacToe(board){
	var x = 1;
	var o = 2 ; 
	for (var i = 0; i < board.length; i++) {
		if(checkRows(board[i]) === x || checkCol(i , board) === x || majorDiagonal(board) === x || minorDiagonal(board) === x) {
			return x ;
		} else if(checkRows(board[i]) === o || checkCol(i , board) === o || majorDiagonal(board) === o || minorDiagonal(board) === o){
			return o ;
		}
	}

	return -1; 
};


function checkRows(row){
	var x= 0 ;
	var o = 0 ; 
	for (var i = 0; i < row.length; i++) {
		if(row[i]=== 1){
			x++
		}
		if(row[i]===2){
			o++
		}
	}
	if(x === 3){
		return 1
	}else if(o === 3){
		return 2 
	}
	else return 0 ;
	
}


function checkCol(colIndex , board){
	var x= 0 ;
	var o = 0 ; 
	for (var i = 0; i<board.length; i++) {
		if(board[i][colIndex]=== 1){
			x++
		}
		if(board[i][colIndex]===2){
			o++
		}
	}
	if(x === 3){
		return 1
	}else if(o === 3){
		return 2 
	}
	else return 0 ;
}


function majorDiagonal(board){
	var x = 0 ;
	var o = 0 ;
	for (var i = 0; i < board.length; i++) {
		if(board[i][i] === 1){
			x++
		}

		if(board[i][i] === 2){
			o++
		}
	}

	if(x === 3){
		return 1
	}else if(o === 3){
		return 2 
	}
	else return 0 ;
}


function minorDiagonal(board){
	var x = 0 ;
	var o = 0 ;
	for (var i = board.length - 1 , j =0 ; i >= 0 , j < board.length ; i-- , j++) {
		
		if(board[j][i] === 1){
			x++
		}

		if(board[j][i] === 2){
			o++
		}
		
	}

	if(x === 3){
		return 1
	}else if(o === 3){
		return 2 
	}
	else return 0 ;
}