var Game = function(boardString) {
  this.boardString = this.generateNewBoard();
}

Game.prototype.generateNewBoard = function() {
  // create strong 16 char long
  // with zeros
  // randomly replace one zero with a two
  // repeat

  var zeroBoard = "0000000000000000";
  var boardArray = zeroBoard.split("");
  boardArray[randomNumber()] = 2;
  boardArray[randomNumber()] = 2;
  var stringBoard = boardArray.join("");
  return stringBoard;
}

Game.prototype.toString = function(){
  return this.boardString;
}

var randomNumber = function() {
  return Math.floor(Math.random() * (16 - 1) + 1);
}

Game.prototype.renderNewBoardForMoveRight = function() {
  var row1 = this.boardString.substring(0,3);
  var row2 = this.boardString.substring(4,7);
  var row3 = this.boardString.substring(8,11);
  var row4 = this.boardString.substring(12,15);
  // row1 function(add all that shit together to the right.done!)
  // row2 repeat...
  // row4

  // concat ro1 ro2 ro3 row4
  // set new concat to this boardString
}
