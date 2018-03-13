import { Action } from "../action";
import { Field, FieldState } from "../interface";
import { createField } from "../util";
import { defaultFieldConfig } from "./";
import tilesReducer, { areAllSafeTilesCleared, isMineCleared } from "./tiles";

export default function reducer(
  // TODO: Probably should not generate and then throw away new fields every time.
  state = createField(defaultFieldConfig),
  action: Action,
): Field {
  let nextField = action.type === "START_NEW_FIELD" ? action.field : state;

  const tiles = tilesReducer(nextField.tiles, action);
  if (tiles !== nextField.tiles) {
    nextField = { ...nextField, tiles };
  }

  if (action.type === "CLEAR_TILE" || action.type === "CLEAR_ADJACENT_TILES") {
    if (isMineCleared(nextField.tiles)) {
      return { ...nextField, state: FieldState.Exploded };
    } else if (areAllSafeTilesCleared(nextField.tiles)) {
      return { ...nextField, state: FieldState.Cleared };
    }
  }

  return nextField;
}
