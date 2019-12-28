import React from "react";
import { Tile as TileType } from "../../interface";
import { TileActionType } from "../../useField";
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
  onAction: (type: TileActionType, tile: TileType) => void;
}
export default React.memo(function Tile({ tile, size, onAction }: TileProps) {
  const { row, column, isCleared, isFlagged } = tile;
  return (
    <TileFrame row={row} column={column} size={size}>
      {!isCleared ? (
        <CoveredTile
          isFlagged={isFlagged}
          onClear={() => onAction(TileActionType.Clear, tile)}
          onToggleFlag={() => onAction(TileActionType.ToggleFlag, tile)}
        />
      ) : tile.isMine ? (
        <MineTile />
      ) : (
        <CountTile
          tile={tile}
          onClearAdjacent={() => onAction(TileActionType.ClearAdjacent, tile)}
        />
      )}
    </TileFrame>
  );
});
