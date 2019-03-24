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
  tile: Tile;
  onClearAdjacent: (tile: Tile) => {};
}
interface CountTileState {
  shouldClear: boolean;
}
export default class CountTile extends React.Component<
  CountTileProps,
  CountTileState
> {
  public state = {
    shouldClear: false,
  };

  public render() {
    const { tile, onClearAdjacent } = this.props;
    const { adjacentMineCount } = tile;
    const { shouldClear } = this.state;
    return (
      <g
        onMouseDown={({ buttons }) => {
          if (buttons === 3) {
            this.setState({ shouldClear: true });
          }
        }}
        onMouseUp={() => {
          if (shouldClear) {
            onClearAdjacent(tile);
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
}
