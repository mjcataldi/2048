var Game = function() {
  this.board = new Board();
}

var Board = function() {
  const TILE_COUNT = 16;
  this.tiles = [];
}

Board.prototype.generateTiles = function() {

  for (var i = 0; i < this.TILE_COUNT; i++) {
    row = Math.floor( i / 4 );
    column = Math.floor( i - (row * 4) );

    this.tiles.push(new Tile(row, column));
  }

  this.tiles[this.randomTileNumber()].value = 2;
  this.tiles[this.randomTileNumber()].value = 4;
}

Board.prototype.randomTileNumber = function() {
  return Math.floor(Math.random() * (this.TILE_COUNT - 1) + 1);
}

var Tile = function(row, column, value = 0) {
  this.row = row;
  this.column = column;
  this.value = value;
}
