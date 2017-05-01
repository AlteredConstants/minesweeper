import React from 'react';
import { connect } from 'react-redux';
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

const CoveredTile = ({ tile: { isFlagged }, onClick, onContextMenu }) => (
  <g onClick={onClick} onContextMenu={onContextMenu}>
    <BaseTile
      css={{
        ':hover': { fill: 'tan' },
        transition: 'fill 200ms',
      }}
    />
    {isFlagged && <CenterText css={{ fontSize: '1em' }} text={'🚩'} />}
  </g>
);

const CoveredTileContainer = connect(null, (dispatch, ownProps) => ({
  onClick: () => {
    !ownProps.tile.isFlagged && dispatch(clearTile(ownProps.tile));
  },
  onContextMenu: event => {
    event.preventDefault();
    dispatch(toggleFlagTile(ownProps.tile));
  },
}))(CoveredTile);

const MineTile = () => (
  <g>
    <BaseTile css={{ fill: 'red' }} />
    <CenterText css={{ fontSize: '1em' }} text={'💥'} />
  </g>
);

const CountTile = ({ count }) => (
  <g>
    <BaseTile css={{ fill: CountColors[count].background }} />
    <CenterText
      css={{
        fontSize: '1.1em',
        fill: CountColors[count].foreground,
      }}
      text={count}
    />
  </g>
);

const ClearedTile = ({ tile: { isMine, adjacentMineCount } }) =>
  (isMine ? <MineTile /> : <CountTile count={adjacentMineCount} />);

export default function Tile({ tile, size }) {
  const { row, column, isCleared } = tile;
  return (
    <svg x={column * size} y={row * size} width={size} height={size}>
      {isCleared
        ? <ClearedTile tile={tile} />
        : <CoveredTileContainer tile={tile} />}
    </svg>
  );
}
