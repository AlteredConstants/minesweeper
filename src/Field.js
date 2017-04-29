import React from 'react';
import Tile, { TileSize } from './Tile';
import { connect } from 'react-redux';
import { flatten } from 'lodash/fp';
import { clearTile } from './action';
import BaseTile from './BaseTile';
import { Svg } from 'glamorous';

function FieldFrame({children, width, height}) {
  return (
    // Use Glamorous's Svg for the autoprefixer.
    <Svg width={width + 2} height={height + 2} css={{
      userSelect: 'none',
      cursor: 'url(./bomb-detector.png) 0 32, default',
    }}>
      <BaseTile width={width + 2} height={height + 2} />
      <svg width={width} height={height} x="1" y="1">
        {children}
      </svg>
    </Svg>
  );
}

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
      <FieldFrame width={TileSize * field.width} height={TileSize * field.height}>
        {
          flatten(field.tiles).map(tile => (
            <Tile
              key={`tile-${tile.row}-${tile.column}`}
              tile={tile}
              onClick={(title) => onTileClick(field, title)}
            />
          ))
        }
      </FieldFrame>
    );
  }
);
