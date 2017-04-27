import React from 'react';
import Tile, { TileSize } from './Tile';

export default function Field({field, onClearTile}) {
  return (
    <svg
      width={TileSize * field.width}
      height={TileSize * field.height}
      style={{ border: '1px solid black' }}
    >
      {
        field.getAllTiles().map(tile => (
          <Tile
            key={`tile-${tile.row}-${tile.column}`}
            tile={tile}
            onClick={onClearTile}
          />
        ))
      }
    </svg>
  );
}
