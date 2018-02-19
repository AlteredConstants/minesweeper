import { Action } from "../action";
import { Field, FieldState } from "../interface";
import tilesReducer, { getRemainingSafeTiles, isMineCleared } from "./tiles";

export default function reducer(
  state: Field | null = null,
  action: Action,
): Field | null {
  let nextField = action.type === "START_NEW_FIELD" ? action.field : state;
  if (!nextField) {
    return null;
  }

  const tiles = tilesReducer(nextField.tiles, action);
  if (tiles !== nextField.tiles) {
    nextField = { ...nextField, tiles };
  }

  if (action.type === "CLEAR_TILE" || action.type === "CLEAR_ADJACENT_TILES") {
    if (isMineCleared(nextField.tiles)) {
      return { ...nextField, state: FieldState.Exploded };
    } else if (getRemainingSafeTiles(nextField.tiles).length === 0) {
      return { ...nextField, state: FieldState.Cleared };
    }
  }

  return nextField;
}
