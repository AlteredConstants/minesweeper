import React from 'react';

export const TileSize = 20;

export default function Tile({ tile, onClick }) {
  return (
    <svg
      x={tile.column * TileSize}
      y={tile.row * TileSize}
      width={TileSize}
      height={TileSize}
      onClick={() => onClick(tile)}
    >
      <rect
        width={TileSize}
        height={TileSize}
        fill={tile.isMine ? 'orange' : 'lime'}
        strokeWidth='1'
        stroke='pink'
      />
      <text x='4' y='17'>{tile.adjacentCount}</text>
    </svg>
  );
}
