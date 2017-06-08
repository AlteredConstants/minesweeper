import React from "react";
import { connect } from "react-redux";
import glamorous from "glamorous";
import { clear, toggleFlagTile } from "../action";
import BaseTile from "./BaseTile";
import CenterText from "./CenterText";

const HoverTile = glamorous(BaseTile)({
  ":hover": { fill: "tan" },
  transition: "fill 200ms",
});

const CoveredTile = ({ tile, onClear, onToggleFlag }) =>
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
  </g>;

export default connect(null, {
  onClear: clear,
  onToggleFlag: toggleFlagTile,
})(CoveredTile);
