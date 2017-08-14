$(function() {

  $("button").on("click", function(){
    var board = new Board();
    board.generateTiles();

    for(var i = 0; i < board.tiles.length; i++){
      if (board.tiles[i].value !== 0){
        var tileValue = board.tiles[i].value;

        $(".tile").eq(i).text(tileValue);
      }
    }

  });

});
