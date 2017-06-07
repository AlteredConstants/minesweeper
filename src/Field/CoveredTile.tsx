import * as React from 'react';
import { connect } from 'react-redux';
import glamorous from 'glamorous';
import { Tile } from '../index';
import { clear, toggleFlagTile } from '../action';
import BaseTile from './BaseTile';
import CenterText from './CenterText';

const HoverTile = glamorous(BaseTile)({
  ':hover': { fill: 'tan' },
  transition: 'fill 200ms',
});

type Props = { tile: Tile };

type DispatchProps = {
  onClear: (tile: Tile) => void;
  onToggleFlag: (tile: Tile) => void;
};

const CoveredTile = ({ tile, onClear, onToggleFlag }: Props & DispatchProps) =>
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

// Have to pass first param until this is merged: https://github.com/DefinitelyTyped/DefinitelyTyped/pull/16969
export default connect<{}, DispatchProps, Props>(() => ({}), {
  onClear: clear,
  onToggleFlag: toggleFlagTile,
})(CoveredTile);
