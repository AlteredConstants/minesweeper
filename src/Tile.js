import React from 'react';
import BaseTile from './BaseTile';

export const TileSize = 20;

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

function CoveredTile({ ...props }) {
  return (
    <BaseTile
      width={TileSize}
      height={TileSize}
      css={{
        ':hover': { fill: 'tan' },
        transition: 'fill 200ms',
      }}
      {...props}
    />
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
      <text x="0" y="15">💥</text>
    </g>
  );
}

function CountTile({ count }) {
  return (
    <g>
      <BaseTile
        width={TileSize}
        height={TileSize}
        css={{ fill: CountColors[count].background }}
      />
      <text
        x="5" y="16"
        fill={CountColors[count].foreground}
      >{count}</text>
    </g>
  );
}

function ClearedTile({ tile }) {
  const { isMine, adjacentMineCount } = tile;
  return isMine ? <MineTile /> : <CountTile count={adjacentMineCount} />;
}

export default function Tile({ tile, onClick }) {
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
          : <CoveredTile onClick={() => onClick(tile)} />
      }
    </svg>
  );
}
