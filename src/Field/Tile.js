import React from "react";
import BaseTile from "./BaseTile";
import CenterText from "./CenterText";
import CoveredTile from "./CoveredTile";

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

const MineTile = () =>
  <g>
    <BaseTile fill="red" />
    <CenterText fontSize="1em" value="💥" />
  </g>;

const CountTile = ({ count }) =>
  <g>
    <BaseTile fill={CountColors[count].background} />
    <CenterText
      fontSize="1.1em"
      fill={CountColors[count].foreground}
      value={count.toString()}
    />
  </g>;

const ClearedTile = ({ tile: { isMine, adjacentMineCount } }) =>
  isMine ? <MineTile /> : <CountTile count={adjacentMineCount} />;

export default function Tile({ tile, size }) {
  const { row, column, isCleared } = tile;
  return (
    <svg x={column * size} y={row * size} width={size} height={size}>
      {isCleared ? <ClearedTile tile={tile} /> : <CoveredTile tile={tile} />}
    </svg>
  );
}
