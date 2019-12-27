import React from "react";
import {
  StartedField as StartedFieldType,
  Tile as TileType,
} from "../interface";
import { TileSize } from "./";
import { FieldFrame } from "./FieldFrame";
import Tile from "./Tile";

interface StartedFieldProps {
  field: StartedFieldType;
  onClear: (tile: TileType) => void;
  onClearAdjacent: (tile: TileType) => void;
  onToggleFlag: (tile: TileType) => void;
}
export default function StartedField({
  field,
  onClear,
  onClearAdjacent,
  onToggleFlag,
}: StartedFieldProps) {
  const { width, height } = field;
  return (
    <FieldFrame width={TileSize * width} height={TileSize * height}>
      {field.tiles.map(tile => (
        <Tile
          key={`tile-${tile.index}`}
          tile={tile}
          size={TileSize}
          onClear={onClear}
          onClearAdjacent={onClearAdjacent}
          onToggleFlag={onToggleFlag}
        />
      ))}
    </FieldFrame>
  );
}
