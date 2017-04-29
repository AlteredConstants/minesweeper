import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'lodash/fp';
import { G } from 'glamorous';
import { toggleFlagTile } from '../action';
import BaseTile from './BaseTile';

export const TileSize = 23;

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
        width={TileSize}
        height={TileSize}
        css={{
          ':hover': { fill: 'tan' },
          transition: 'fill 200ms',
        }}
      />
      {tile.isFlagged && <text x="1" y="17">🏴</text>}
    </g>
  );
}

function MineTile() {
  return (
    <g>
      <BaseTile
        width={TileSize}
        height={TileSize}
        css={{ fill: 'red' }}
      />
      <text x="1" y="17">💥</text>
    </g>
  );
}

function CountTile({ count }) {
  return (
    <G css={{ fontSize: 18 }}>
      <BaseTile
        width={TileSize}
        height={TileSize}
        css={{ fill: CountColors[count].background }}
      />
      <text
        x="6" y="18"
        fill={CountColors[count].foreground}
      >{count}</text>
    </G>
  );
}

function ClearedTile({ tile }) {
  const { isMine, adjacentMineCount } = tile;
  return isMine ? <MineTile /> : <CountTile count={adjacentMineCount} />;
}

export default connect(
  state => ({}),
  dispatch => ({ onToggleFlag: compose(dispatch, toggleFlagTile) }),
)(
  function Tile({ tile, onClear, onToggleFlag }) {
    const { row, column } = tile;
    return (
      <svg
        x={column * TileSize}
        y={row * TileSize}
        width={TileSize}
        height={TileSize}
      >
        {
          tile.isCleared
            ? <ClearedTile tile={tile} />
            : <CoveredTile
              tile={tile}
              onClear={onClear}
              onToggleFlag={onToggleFlag}
            />
        }
      </svg>
    );
  }
);
