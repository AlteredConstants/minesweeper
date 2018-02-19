export interface Tile {
  readonly index: number;
  readonly row: number;
  readonly column: number;
  readonly isMine: boolean;
  readonly adjacentMineCount: number;
  readonly isCleared: boolean;
  readonly isFlagged: boolean;
}

export enum FieldState {
  Active = "active",
  Cleared = "cleared",
  Exploded = "exploded",
}

export interface Field {
  readonly width: number;
  readonly height: number;
  readonly mineCount: number;
  readonly tiles: ReadonlyArray<Tile>;
  readonly state: FieldState;
}

export interface State {
  readonly field: Field | null;
}
