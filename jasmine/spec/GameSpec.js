describe ("Game object", function() {
  var game;
  var gameBoard;

  beforeEach(function(){
    game = new Game();
    gameBoard = game.generateNewBoard();
  });

  it("creates a new board", function(){
    expect(game.boardString.length).toEqual(16);
  });

  it("is awesome", function(){
    expect(true).toBeTruthy();
  });

});
