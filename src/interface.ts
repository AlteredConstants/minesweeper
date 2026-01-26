export interface Tile {
	readonly index: number;
	readonly row: number;
	readonly column: number;
	readonly isMine: boolean;
	readonly adjacentMineCount: number;
	readonly isCleared: boolean;
	readonly isFlagged: boolean;
}

export type StartedFieldState = "active" | "cleared" | "exploded";
export type FieldState = "init" | StartedFieldState;

export interface FieldConfig {
	width: number;
	height: number;
	mineCount: number;
}

export interface InitField extends FieldConfig {
	state: "init";
}

export interface StartedField extends FieldConfig {
	readonly tiles: readonly Tile[];
	readonly state: StartedFieldState;
}

export type Field = StartedField | InitField;
