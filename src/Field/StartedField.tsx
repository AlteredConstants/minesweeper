import React from "react";
import { connect } from "react-redux";
import { clearAdjacentTiles, clearTile, toggleFlagTile } from "../action";
import {
  StartedField as StartedFieldType,
  Tile as TileType,
} from "../interface";
import { TileSize } from "./";
import { FieldFrame } from "./FieldFrame";
import Tile from "./Tile";

interface StartedFieldOwnProps {
  field: StartedFieldType;
}
interface StartedFieldDispatchProps {
  onClear: (tile: TileType) => {};
  onClearAdjacent: (tile: TileType) => {};
  onToggleFlag: (tile: TileType) => {};
}
function StartedField({
  field,
  onClear,
  onClearAdjacent,
  onToggleFlag,
}: StartedFieldOwnProps & StartedFieldDispatchProps) {
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

export default connect<{}, StartedFieldDispatchProps, StartedFieldOwnProps>(
  null,
  {
    onClear: clearTile,
    onClearAdjacent: clearAdjacentTiles,
    onToggleFlag: toggleFlagTile,
  },
)(StartedField);
