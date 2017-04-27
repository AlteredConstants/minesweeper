import Tile from './Tile';

// http://stackoverflow.com/a/6274381/6680157
function shuffle(a) {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}

export default class Field {
  constructor({width, height, mineCount, field}) {
    this.width = width;
    this.height = height;
    this.mineCount = mineCount;
    this.field = field;
    if (!this.field) {
      this.field = Array(width * height).fill(true, 0, mineCount);
      shuffle(this.field);
      this.field = this.field.map((isMine, index) => new Tile({index, fieldWidth: width, isMine}));
    }
  }

  getAllTiles() {
    return this.field;
  }

  clearTile(tile) {
    if (!tile.isClearable()) { return; }
    const newTile = new Tile({ ...tile, adjacentCount: this.countAdjacentMines(tile) });
    const index = this.getIndex(tile);
    return new Field({ ...this, field: [...this.field.slice(0, index), newTile, ...this.field.slice(index + 1)] });
  }

  getIndex(tile) { return tile.row * this.width + tile.column; }
  isMine(index) { return index >= 0 && index < this.field.length && this.field[index].isMine; }
  isLeftMine(index) { return index % this.width !== 0 && this.isMine(index - 1); }
  isRightMine(index) { return (index + 1) % this.width !== 0 && this.isMine(index + 1); }

  countAdjacentRowMines(index) {
    const leftCount = this.isLeftMine(index) ? 1 : 0;
    const selfCount = this.isMine(index) ? 1 : 0;
    const rightCount = this.isRightMine(index) ? 1 : 0;
    return leftCount + selfCount + rightCount;
  }
  countAdjacentMines(tile) {
    const index = this.getIndex(tile);
    const aboveCount = this.countAdjacentRowMines(index - this.width);
    const sideCount = this.countAdjacentRowMines(index);
    const belowCount = this.countAdjacentRowMines(index + this.width);
    return aboveCount + sideCount + belowCount;
  }
}