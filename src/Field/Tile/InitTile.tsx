import * as React from "react";
import { FieldConfig } from "../../interface";
import { getCoordinates } from "../../util";
import CoveredTile from "./CoveredTile";
import TileFrame from "./TileFrame";

interface InitTileProps {
  index: number;
  config: FieldConfig;
  size: number;
  onStart: (config: FieldConfig, startTileIndex: number) => {};
}
export default function InitTile({
  index,
  config,
  size,
  onStart,
}: InitTileProps) {
  const { width } = config;
  const { row, column } = getCoordinates(index, width);
  return (
    <TileFrame row={row} column={column} size={size}>
      <CoveredTile onClear={() => onStart(config, index)} />
    </TileFrame>
  );
}
