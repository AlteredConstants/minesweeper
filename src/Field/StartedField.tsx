import React from "react";
import {
  StartedField as StartedFieldType,
  Tile as TileType,
} from "../interface";
import { TileActionType } from "../reducer/field";
import { TileSize } from "./";
import { FieldFrame } from "./FieldFrame";
import Tile from "./Tile";

interface StartedFieldProps {
  field: StartedFieldType;
  onTileAction: (type: TileActionType, tile: TileType) => void;
}
export default function StartedField({
  field,
  onTileAction,
}: StartedFieldProps) {
  const { width, height } = field;
  return (
    <FieldFrame width={TileSize * width} height={TileSize * height}>
      {field.tiles.map(tile => (
        <Tile
          key={`tile-${tile.index}`}
          tile={tile}
          size={TileSize}
          onAction={onTileAction}
        />
      ))}
    </FieldFrame>
  );
}
