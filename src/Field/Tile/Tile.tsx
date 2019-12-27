import React from "react";
import { Tile as TileType } from "../../interface";
import { TileUpdateType } from "../../reducer/field";
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
  onUpdate: (type: TileUpdateType, tile: TileType) => void;
}
export default React.memo(function Tile({ tile, size, onUpdate }: TileProps) {
  const { row, column, isCleared, isFlagged } = tile;
  return (
    <TileFrame row={row} column={column} size={size}>
      {!isCleared ? (
        <CoveredTile
          isFlagged={isFlagged}
          onClear={() => onUpdate(TileUpdateType.Clear, tile)}
          onToggleFlag={() => onUpdate(TileUpdateType.ToggleFlag, tile)}
        />
      ) : tile.isMine ? (
        <MineTile />
      ) : (
        <CountTile
          tile={tile}
          onClearAdjacent={() => onUpdate(TileUpdateType.ClearAdjacent, tile)}
        />
      )}
    </TileFrame>
  );
});
