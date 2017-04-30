import React from 'react';
import { connect } from 'react-redux';
import { Svg } from 'glamorous';
import BaseTile from './BaseTile';
import Tile from './Tile';

export const TileSize = 23;

function FieldFrame({children, width, height}) {
  return (
    // Use Glamorous's Svg for the autoprefixer.
    <Svg
      width={width + 2}
      height={height + 2}
      onContextMenu={event => event.preventDefault()}
      css={{
        display: 'block',
        userSelect: 'none',
        cursor: 'url(./bomb-detector.png) 0 32, default',
      }}
    >
      <BaseTile />
      <svg width={width} height={height} x="1" y="1">
        {children}
      </svg>
    </Svg>
  );
}

export default connect(
  state => ({ field: state.field }),
)(
  function Field({ field }) {
    if (!field) {
      return <strong>Loading...</strong>;
    }
    return (
      <FieldFrame width={TileSize * field.width} height={TileSize * field.height}>
        {
          field.tiles.map(tile => (
            <Tile
              key={`tile-${tile.row}-${tile.column}`}
              tile={tile}
              size={TileSize}
            />
          ))
        }
      </FieldFrame>
    );
  }
);
