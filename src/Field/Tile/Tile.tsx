import React from "react";
import { Tile as TileType } from "../../interface";
import { TileActionType } from "../../reducer/tiles";
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
  forwardRef?: React.RefObject<SVGGElement>;
  tile: TileType;
  size: number;
  onAction(type: TileActionType, tile: TileType): void;
}
export default React.memo(function Tile({
  forwardRef,
  tile,
  tile: { row, column, isCleared, isFlagged, isMine },
  size,
  onAction,
}: TileProps) {
  return (
    <TileFrame row={row} column={column} size={size}>
      {!isCleared ? (
        <CoveredTile
          forwardRef={forwardRef}
          isFlagged={isFlagged}
          onClear={() => onAction(TileActionType.Clear, tile)}
          onToggleFlag={() => onAction(TileActionType.ToggleFlag, tile)}
        />
      ) : isMine ? (
        <MineTile />
      ) : (
        <CountTile
          forwardRef={forwardRef}
          tile={tile}
          onClearAdjacent={() => onAction(TileActionType.ClearAdjacent, tile)}
        />
      )}
    </TileFrame>
  );
});
