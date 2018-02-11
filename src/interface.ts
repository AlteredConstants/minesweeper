export interface Tile {
  readonly index: number;
  readonly row: number;
  readonly column: number;
  readonly isMine: boolean;
  readonly adjacentMineCount: number;
  readonly isCleared: boolean;
  readonly isFlagged: boolean;
}

export interface Field {
  readonly width: number;
  readonly height: number;
  readonly mineCount: number;
  readonly tiles: ReadonlyArray<Tile>;
  readonly isExploded: boolean;
}

export interface Game {
  readonly field?: Field;
}

export interface State {
  readonly game: Game;
}
