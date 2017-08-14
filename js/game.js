var Board = function() {
  this.tiles = [];
}

Board.prototype.generateTiles = function() {

  for (var i = 0; i < 16; i++) {
    row = Math.floor( i / 4 );
    column = Math.floor( i - (row * 4) );
    this.tiles.push(new Tile(row, column));
  }

  this.tiles[Math.floor(Math.random() * (16 - 1) + 1)].value = 2;
  this.tiles[Math.floor(Math.random() * (16 - 1) + 1)].value = 2;
}

Board.prototype.randomTileNumber = function() {
  return Math.floor(Math.random() * (16 - 1) + 1);
}

var Tile = function(row, column, value = 0) {
  this.row = row;
  this.column = column;
  this.value = value;
}
