// @flow
import React from 'react';
import { connect } from 'react-redux';
import glamorous from 'glamorous';
import { clear, toggleFlagTile } from '../action';
import BaseTile from './BaseTile';
import CenterText from './CenterText';

const HoverTile = glamorous(BaseTile)({
  ':hover': { fill: 'tan' },
  transition: 'fill 200ms',
});

type Props = {
  tile: Mine$Tile,
  onClear: (tile: Mine$Tile) => void,
  onToggleFlag: (tile: Mine$Tile) => void,
};
const CoveredTile = ({ tile, onClear, onToggleFlag }: Props) =>
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

// Not sure how to apply this type....
type ContainerProps = { tile: Mine$Tile };
export default connect(null, {
  onClear: clear,
  onToggleFlag: toggleFlagTile,
})(CoveredTile);
