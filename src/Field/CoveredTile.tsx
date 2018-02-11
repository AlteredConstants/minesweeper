import * as React from "react";
import { connect } from "react-redux";
import glamorous from "glamorous";
import { clear, toggleFlagTile } from "../action";
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
const CoveredTile = ({ tile, onClear, onToggleFlag }: CoveredTileProps) => (
  <g
    onClick={() => {
      if (!tile.isFlagged) {
        onClear(tile);
      }
    }}
    onContextMenu={event => {
      event.preventDefault();
      onToggleFlag(tile);
    }}
  >
    <HoverTile />
    {tile.isFlagged && <CenterText fontSize="1em" value="🚩" />}
  </g>
);

export default connect(null, {
  onClear: clear,
  onToggleFlag: toggleFlagTile,
})(CoveredTile);
