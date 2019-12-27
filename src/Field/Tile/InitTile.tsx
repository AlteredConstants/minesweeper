import React from "react";
import { getCoordinates } from "../../util";
import CoveredTile from "./CoveredTile";
import TileFrame from "./TileFrame";

interface InitTileProps {
  index: number;
  width: number;
  size: number;
  onStart: (startTileIndex: number) => void;
}
export default function InitTile({
  index,
  width,
  size,
  onStart,
}: InitTileProps) {
  const { row, column } = getCoordinates(index, width);
  return (
    <TileFrame row={row} column={column} size={size}>
      <CoveredTile onClear={() => onStart(index)} />
    </TileFrame>
  );
}
