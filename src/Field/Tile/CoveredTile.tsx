import glamorous from "glamorous";
import React from "react";
import BaseTile from "./BaseTile";
import CenterText from "./CenterText";

const HoverTile = glamorous(BaseTile)({
  ":hover": { fill: "tan" },
  transition: "fill 200ms",
});

interface CoveredTileProps {
  forwardRef?: React.RefObject<SVGGElement>;
  isFlagged?: boolean;
  onClear(): void;
  onToggleFlag?(): void;
}
export default function CoveredTile({
  forwardRef,
  isFlagged,
  onClear,
  onToggleFlag,
}: CoveredTileProps) {
  function clearIfNotFlagged(): void {
    if (!isFlagged) {
      onClear();
    }
  }

  return (
    <g
      ref={forwardRef}
      role="button"
      tabIndex={-1}
      onClick={clearIfNotFlagged}
      onContextMenu={onToggleFlag}
      onKeyDown={event => {
        switch (event.key) {
          case "Backspace":
            clearIfNotFlagged();
            break;
          case "a":
            onToggleFlag?.();
            break;
        }
      }}
    >
      <HoverTile />
      {isFlagged && <CenterText fontSize="1em" value="🚩" />}
    </g>
  );
}
