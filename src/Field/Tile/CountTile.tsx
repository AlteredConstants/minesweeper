import React from "react";
import { Tile } from "../../interface";
import BaseTile from "./BaseTile";
import CenterText from "./CenterText";

const CountColors = [
  { foreground: "transparent", background: "antiqueWhite" },
  { foreground: "navy", background: "lightSkyBlue" },
  { foreground: "darkOliveGreen", background: "paleGreen" },
  { foreground: "fireBrick", background: "lightCoral" },
  { foreground: "midnightBlue", background: "lightSteelBlue" },
  { foreground: "maroon", background: "lightSalmon" },
  { foreground: "darkCyan", background: "lightCyan" },
  { foreground: "black", background: "gainsboro" },
  { foreground: "dimGrey", background: "whiteSmoke" },
];

interface CountTileProps {
  forwardRef?: React.RefObject<SVGGElement>;
  tile: Tile;
  onClearAdjacent(): void;
}
export default function CountTile({
  forwardRef,
  tile: { adjacentMineCount },
  onClearAdjacent,
}: CountTileProps) {
  const [shouldClear, setShouldClear] = React.useState(false);
  return (
    <g
      ref={forwardRef}
      role="button"
      tabIndex={-1}
      onMouseDown={({ buttons }) => {
        if (buttons === 3) {
          setShouldClear(true);
        }
      }}
      onMouseUp={() => {
        if (shouldClear) {
          onClearAdjacent();
        }
      }}
      onKeyDown={event => {
        if (event.key === "Backspace") {
          onClearAdjacent();
        }
      }}
    >
      <BaseTile fill={CountColors[adjacentMineCount].background} />
      <CenterText
        fontSize="1.1em"
        fill={CountColors[adjacentMineCount].foreground}
        value={adjacentMineCount.toString()}
      />
    </g>
  );
}
