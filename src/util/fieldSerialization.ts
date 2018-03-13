import { pick } from "lodash/fp";
import { Field, FieldState, Tile } from "../interface";
import { areAllSafeTilesCleared, isMineCleared } from "../reducer/tiles";
import { updateAdjacentMineCount } from "./createField";

interface SerializedField {
  width: number;
  tiles: Array<{
    isMine: boolean;
    isCleared: boolean;
    isFlagged: boolean;
  }>;
}

function prepareSerialize(field: Field): SerializedField {
  const { width } = field;
  const tiles = field.tiles.map(pick(["isMine", "isCleared", "isFlagged"]));
  return { width, tiles };
}

function prepareDeserialize(field: SerializedField): Field {
  const { width } = field;
  const height = field.tiles.length / width;
  const mineCount = field.tiles.filter(t => t.isMine).length;
  const tiles = updateAdjacentMineCount(
    field.tiles.map(({ isMine, isCleared, isFlagged }, index) => ({
      index,
      row: Math.floor(index / width),
      column: index % width,
      adjacentMineCount: 0,
      isMine,
      isCleared,
      isFlagged,
    })),
  );
  const state = getFieldState(tiles);

  return { width, height, mineCount, tiles, state };
}

function getFieldState(tiles: ReadonlyArray<Tile>) {
  if (isMineCleared(tiles)) {
    return FieldState.Exploded;
  } else if (areAllSafeTilesCleared(tiles)) {
    return FieldState.Cleared;
  } else {
    return FieldState.Active;
  }
}

export function serialize(field: Field): string {
  return JSON.stringify(prepareSerialize(field));
}

export function deserialize(field: string): Field {
  return prepareDeserialize(JSON.parse(field));
}
