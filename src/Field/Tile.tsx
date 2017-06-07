import * as React from 'react';
import { Tile } from '../index';
import BaseTile from './BaseTile';
import CenterText from './CenterText';
import CoveredTile from './CoveredTile';

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

const MineTile = () =>
  <g>
    <BaseTile fill="red" />
    <CenterText fontSize="1em" value="💥" />
  </g>;

type CountTileProps = { count: number };
const CountTile = ({ count }: CountTileProps) =>
  <g>
    <BaseTile fill={CountColors[count].background} />
    <CenterText
      fontSize="1.1em"
      fill={CountColors[count].foreground}
      value={count.toString()}
    />
  </g>;

type ClearTileProps = { tile: Tile };
const ClearedTile = ({ tile: { isMine, adjacentMineCount } }: ClearTileProps) =>
  isMine ? <MineTile /> : <CountTile count={adjacentMineCount} />;

type TileProps = { tile: Tile; size: number };
export default function Tile({ tile, size }: TileProps) {
  const { row, column, isCleared } = tile;
  return (
    <svg x={column * size} y={row * size} width={size} height={size}>
      {isCleared ? <ClearedTile tile={tile} /> : <CoveredTile tile={tile} />}
    </svg>
  );
}
