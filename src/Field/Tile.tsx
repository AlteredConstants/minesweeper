import * as React from "react";
import { connect } from "react-redux";
import { clear, clearSurrounding, toggleFlagTile } from "../action";
import { Tile } from "../interface";
import BaseTile from "./BaseTile";
import CenterText from "./CenterText";
import CountTile from "./CountTile";
import CoveredTile from "./CoveredTile";

const MineTile = () => (
  <g>
    <BaseTile fill="red" />
    <CenterText fontSize="1em" value="💥" />
  </g>
);

interface TileProps {
  tile: Tile;
  size: number;
  onClear: (tile: Tile) => any;
  onClearSurrounding: (tile: Tile) => any;
  onToggleFlag: (tile: Tile) => any;
}
function Tile({
  tile,
  size,
  onClear,
  onClearSurrounding,
  onToggleFlag,
}: TileProps) {
  const { row, column, isCleared } = tile;
  return (
    <svg x={column * size} y={row * size} width={size} height={size}>
      {!isCleared ? (
        <CoveredTile
          tile={tile}
          onClear={onClear}
          onToggleFlag={onToggleFlag}
        />
      ) : tile.isMine ? (
        <MineTile />
      ) : (
        <CountTile tile={tile} onClearSurrounding={onClearSurrounding} />
      )}
    </svg>
  );
}

export default connect(null, {
  onClear: clear,
  onClearSurrounding: clearSurrounding,
  onToggleFlag: toggleFlagTile,
})(Tile);
