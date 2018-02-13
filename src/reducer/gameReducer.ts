import { Action } from "../action";
import { Field, Game, Tile } from "../interface";
import { updateInArray, updateInObject } from "../util";

function updateField(game: Game, newProps: Partial<Field>): Game {
  return game.field ? updateInObject(game, "field", newProps) : game;
}

function updateTile(
  game: Game,
  indexes: number | ReadonlyArray<number>,
  newProps: Partial<Tile>,
): Game {
  return game.field
    ? updateField(game, {
        tiles: updateInArray(game.field.tiles, indexes, newProps),
      })
    : game;
}

export default function gameReducer(state: Game = {}, action: Action) {
  switch (action.type) {
    case "START_NEW_FIELD": {
      return { ...state, field: action.field };
    }

    case "TOGGLE_FLAG_TILE": {
      const { tile } = action;
      return updateTile(state, tile.index, { isFlagged: !tile.isFlagged });
    }

    case "CLEAR_TILE": {
      return updateTile(state, action.tile.index, { isCleared: true });
    }

    case "CLEAR_CONNECTED_SAFE_TILES": {
      const indexes = action.tiles.map(tile => tile.index);
      return updateTile(state, indexes, { isCleared: true });
    }

    case "TRIP_MINE": {
      return updateField(state, { isExploded: true });
    }

    default: {
      return state;
    }
  }
}
