import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'lodash/fp';
import { clearTile, toggleFlagTile } from '../action';
import BaseTile from './BaseTile';
import CenterText from './CenterText';

const CountColors = [
  { foreground: 'transparent', background: 'antiqueWhite' },
  { foreground: 'navy', background: 'lightSkyBlue' },
  { foreground: 'darkOliveGreen', background: 'paleGreen' },
  { foreground: 'fireBrick', background: 'lightCoral' },
  { foreground: 'midnightBlue', background: 'lightSteelBlue' },
  { foreground: 'maroon', background: 'lightSalmon' },
  { foreground: 'darkCyan', background: 'lightCyan' },
  { foreground: 'black', background: 'gainsboro' },
  { foreground: 'dimGrey', background: 'whiteSmoke' },
];

function CoveredTile({ tile, onClear, onToggleFlag }) {
  return (
    <g
      onClick={() => !tile.isFlagged && onClear(tile)}
      onContextMenu={(event) => {
        event.preventDefault();
        onToggleFlag(tile);
      }}
    >
      <BaseTile
        css={{
          ':hover': { fill: 'tan' },
          transition: 'fill 200ms',
        }}
      />
      {tile.isFlagged && <CenterText css={{ fontSize: '1em' }} text={'🚩'} />}
    </g>
  );
}

function MineTile() {
  return (
    <g>
      <BaseTile css={{ fill: 'red' }} />
      <CenterText css={{ fontSize: '1em' }} text={'💥'} />
    </g>
  );
}

function CountTile({ count }) {
  return (
    <g>
      <BaseTile css={{ fill: CountColors[count].background }} />
      <CenterText
        css={{
          fontSize: '1.1em',
          fill: CountColors[count].foreground
        }}
        text={count}
      />
    </g>
  );
}

function ClearedTile({ tile }) {
  const { isMine, adjacentMineCount } = tile;
  return isMine ? <MineTile /> : <CountTile count={adjacentMineCount} />;
}

export default connect(
  state => ({ field: state.field }),
  dispatch => ({
    onClear: compose(dispatch, clearTile),
    onToggleFlag: compose(dispatch, toggleFlagTile),
  }),
)(
  function Tile({ tile, size, field, onClear, onToggleFlag }) {
    const { row, column } = tile;
    return (
      <svg
        x={column * size}
        y={row * size}
        width={size}
        height={size}
      >
        {
          tile.isCleared
            ? <ClearedTile tile={tile} />
            : <CoveredTile
              tile={tile}
              onClear={tile => onClear(field, tile)}
              onToggleFlag={onToggleFlag}
            />
        }
      </svg>
    );
  }
);
