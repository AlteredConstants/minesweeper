// @flow
import React from 'react';
import { connect } from 'react-redux';
import { clear, toggleFlagTile } from '../action';
import BaseTile from './BaseTile';
import CenterText from './CenterText';
import type { Dispatch } from '../action';

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

type CoveredTileProps = {
  tile: Mine$Tile,
  onClick: () => void,
  onContextMenu: (event: Event) => void,
};
const CoveredTile = ({
  tile: { isFlagged },
  onClick,
  onContextMenu,
}: CoveredTileProps) => (
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

type CoveredTileContainerProps = { tile: Mine$Tile };
const CoveredTileContainer = connect(
  null,
  (dispatch: Dispatch, ownProps: CoveredTileContainerProps) => ({
    onClick() {
      !ownProps.tile.isFlagged && dispatch(clear(ownProps.tile));
    },
    onContextMenu(event) {
      event.preventDefault();
      dispatch(toggleFlagTile(ownProps.tile));
    },
  }),
)(CoveredTile);

const MineTile = () => (
  <g>
    <BaseTile css={{ fill: 'red' }} />
    <CenterText css={{ fontSize: '1em' }} text={'💥'} />
  </g>
);

type CountTileProps = { count: number };
const CountTile = ({ count }: CountTileProps) => (
  <g>
    <BaseTile css={{ fill: CountColors[count].background }} />
    <CenterText
      css={{
        fontSize: '1.1em',
        fill: CountColors[count].foreground,
      }}
      text={count.toString()}
    />
  </g>
);

type ClearedTileProps = { tile: Mine$Tile };
const ClearedTile = ({
  tile: { isMine, adjacentMineCount },
}: ClearedTileProps) =>
  (isMine ? <MineTile /> : <CountTile count={adjacentMineCount} />);

type TileProps = { tile: Mine$Tile, size: number };
export default function Tile({ tile, size }: TileProps) {
  const { row, column, isCleared } = tile;
  return (
    <svg x={column * size} y={row * size} width={size} height={size}>
      {isCleared
        ? <ClearedTile tile={tile} />
        : <CoveredTileContainer tile={tile} />}
    </svg>
  );
}
