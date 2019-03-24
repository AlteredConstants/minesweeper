import glamorous from "glamorous";
import React from "react";
import BaseTile from "./BaseTile";
import CenterText from "./CenterText";

const HoverTile = glamorous(BaseTile)({
  ":hover": { fill: "tan" },
  transition: "fill 200ms",
});

interface CoveredTileProps {
  isFlagged?: boolean;
  onClear: () => {};
  onToggleFlag?: () => {};
}
export default function CoveredTile({
  isFlagged,
  onClear,
  onToggleFlag,
}: CoveredTileProps) {
  return (
    <g onClick={() => !isFlagged && onClear()} onContextMenu={onToggleFlag}>
      <HoverTile />
      {isFlagged && <CenterText fontSize="1em" value="🚩" />}
    </g>
  );
}
