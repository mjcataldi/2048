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

var randomNumber = function() {
  return Math.floor(Math.random() * (16 - 1) + 1);
}
