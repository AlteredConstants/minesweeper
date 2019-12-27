import { useReducer, useEffect } from "react";
import { Action } from "../action";
import { Field, InitField, Tile } from "../interface";
import { createField } from "../util";
import { serialize, deserialize } from "../util/fieldSerialization";
import tilesReducer, { areAllSafeTilesCleared, isMineCleared } from "./tiles";

export enum TileUpdateType {
  Clear = "CLEAR_TILE",
  ClearAdjacent = "CLEAR_ADJACENT_TILES",
  ToggleFlag = "TOGGLE_FLAG_TILE",
}

export function useField(initialField: InitField) {
  const [field, dispatch] = useReducer(reducer, initialField, initField => {
    const fieldString = localStorage.getItem("field");
    return fieldString ? deserialize(fieldString) : initField;
  });

  useEffect(() => {
    if (field.state === "init") {
      localStorage.removeItem("field");
    } else {
      localStorage.setItem("field", serialize(field));
    }
  }, [field]);

  return {
    field,
    start(startTileIndex: number) {
      dispatch({ type: "START_NEW_FIELD", options: field, startTileIndex });
    },
    reset() {
      dispatch({ type: "INIT_NEW_FIELD", initialField });
    },
    updateTile(type: TileUpdateType, tile: Tile) {
      dispatch({ type, tile });
    },
  };
}

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
