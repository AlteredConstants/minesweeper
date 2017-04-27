export default class Tile {
  constructor({index, fieldWidth, row, column, isMine, adjacentCount}) {
    this.row = row !== undefined ? row : Math.floor(index / fieldWidth);
    this.column = column !== undefined ? column : index % fieldWidth;
    this.isMine = !!isMine;
    this.adjacentCount = adjacentCount;
  }

  isClearable() {
    return !this.isMine && !this.adjacentCount;
  }
}