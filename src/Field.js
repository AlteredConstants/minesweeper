import React from 'react';
import Tile, { TileSize } from './Tile';
import { connect } from 'react-redux';
import { flatten } from 'lodash/fp';
import { clearTile } from './action';

export default connect(
  state => ({ field: state.field }),
  (dispatcher, ownProps) => ({
    onTileClick: (field, tile) => dispatcher(clearTile(field, tile)),
  }),
)(
  function Field({field, onTileClick}) {
    if (!field) {
      return <strong>Loading...</strong>;
    }
    return (
      <svg
        width={TileSize * field.width}
        height={TileSize * field.height}
        style={{ border: '1px solid black' }}
      >
        {
          flatten(field.tiles).map(tile => (
            <Tile
              key={`tile-${tile.row}-${tile.column}`}
              tile={tile}
              onClick={(title) => onTileClick(field, title)}
            />
          ))
        }
      </svg>
    );
  }
);
