import { Action } from "../action";
import { Field } from "../interface";
import { createField } from "../util";
import tilesReducer, { areAllSafeTilesCleared, isMineCleared } from "./tiles";

export default function reducer(state: Field, action: Action): Field {
  let nextField: Field;
  switch (action.type) {
    case "INIT_NEW_FIELD": {
      nextField = action.initialField;
      break;
    }
    case "START_NEW_FIELD": {
      nextField = createField(action.options, action.startTileIndex);
      break;
    }
    default: {
      nextField = state;
    }
  }

  if (nextField.state === "init") {
    return nextField;
  }

  const tiles = tilesReducer(nextField.tiles, action);
  if (tiles !== nextField.tiles) {
    nextField = { ...nextField, tiles };
  }

  if (
    action.type === "START_NEW_FIELD" ||
    action.type === "CLEAR_TILE" ||
    action.type === "CLEAR_ADJACENT_TILES"
  ) {
    if (isMineCleared(nextField.tiles)) {
      return { ...nextField, state: "exploded" };
    } else if (areAllSafeTilesCleared(nextField.tiles)) {
      return { ...nextField, state: "cleared" };
    }
  }

  return nextField;
}
