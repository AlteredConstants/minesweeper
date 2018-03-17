import * as React from "react";
import { connect } from "react-redux";
import { clearAdjacentTiles, clearTile, toggleFlagTile } from "../action";
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

interface TileOwnProps {
  tile: Tile;
  size: number;
}
interface TileDispatchProps {
  onClear: (tile: Tile) => {};
  onClearAdjacent: (tile: Tile) => {};
  onToggleFlag: (tile: Tile) => {};
}
function Tile({
  tile,
  size,
  onClear,
  onClearAdjacent,
  onToggleFlag,
}: TileOwnProps & TileDispatchProps) {
  const { row, column, isCleared } = tile;
  return (
    <svg
      x={column * size}
      y={row * size}
      width={size}
      height={size}
      data-test="tile"
    >
      {!isCleared ? (
        <CoveredTile
          tile={tile}
          onClear={onClear}
          onToggleFlag={onToggleFlag}
        />
      ) : tile.isMine ? (
        <MineTile />
      ) : (
        <CountTile tile={tile} onClearAdjacent={onClearAdjacent} />
      )}
    </svg>
  );
}

export default connect<{}, TileDispatchProps>(null, {
  onClear: clearTile,
  onClearAdjacent: clearAdjacentTiles,
  onToggleFlag: toggleFlagTile,
})(Tile);
