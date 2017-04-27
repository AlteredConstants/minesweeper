import React from 'react';
import { connect } from 'react-redux';

export const TileSize = 20;

export default connect(
  state => ({}),
)(
  function Tile({ tile, onClick }) {
    const { row, column, isMine, adjacentMineCount } = tile;
    const isCleared = isMine || adjacentMineCount !== null;
    return (
      <svg
        x={column * TileSize}
        y={row * TileSize}
        width={TileSize}
        height={TileSize}
        onClick={() => !isCleared && onClick(tile)}
      >
        <rect
          width={TileSize}
          height={TileSize}
          fill={isMine ? 'orange' : (isCleared ? 'lime' : 'tan')}
          strokeWidth='1'
          stroke='pink'
        />
        <text x='4' y='17'>{adjacentMineCount}</text>
      </svg>
    );
  }
);
