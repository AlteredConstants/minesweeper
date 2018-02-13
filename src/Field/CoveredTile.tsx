import * as React from "react";
import glamorous from "glamorous";
import BaseTile from "./BaseTile";
import CenterText from "./CenterText";
import { Tile } from "../interface";

const HoverTile = glamorous(BaseTile)({
  ":hover": { fill: "tan" },
  transition: "fill 200ms",
});

interface CoveredTileProps {
  tile: Tile;
  onClear: (tile: Tile) => any;
  onToggleFlag: (tile: Tile) => any;
}
export default function CoveredTile({
  tile,
  onClear,
  onToggleFlag,
}: CoveredTileProps) {
  return (
    <g
      onClick={() => {
        if (!tile.isFlagged) {
          onClear(tile);
        }
      }}
      onContextMenu={() => onToggleFlag(tile)}
    >
      <HoverTile />
      {tile.isFlagged && <CenterText fontSize="1em" value="🚩" />}
    </g>
  );
}
