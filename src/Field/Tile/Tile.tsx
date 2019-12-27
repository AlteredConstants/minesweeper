import React from "react";
import { Tile as TileType } from "../../interface";
import BaseTile from "./BaseTile";
import CenterText from "./CenterText";
import CountTile from "./CountTile";
import CoveredTile from "./CoveredTile";
import TileFrame from "./TileFrame";

const MineTile = () => (
  <g>
    <BaseTile fill="red" />
    <CenterText fontSize="1em" value="💥" />
  </g>
);

interface TileProps {
  tile: TileType;
  size: number;
  onClear: (tile: TileType) => void;
  onClearAdjacent: (tile: TileType) => void;
  onToggleFlag: (tile: TileType) => void;
}
export default React.memo(function Tile({
  tile,
  size,
  onClear,
  onClearAdjacent,
  onToggleFlag,
}: TileProps) {
  const { row, column, isCleared, isFlagged } = tile;
  return (
    <TileFrame row={row} column={column} size={size}>
      {!isCleared ? (
        <CoveredTile
          isFlagged={isFlagged}
          onClear={() => onClear(tile)}
          onToggleFlag={() => onToggleFlag(tile)}
        />
      ) : tile.isMine ? (
        <MineTile />
      ) : (
        <CountTile tile={tile} onClearAdjacent={onClearAdjacent} />
      )}
    </TileFrame>
  );
});
