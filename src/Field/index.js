import React from 'react';
import { connect } from 'react-redux';
import { flatten, compose } from 'lodash/fp';
import { Svg } from 'glamorous';
import { clearTile } from '../action';
import BaseTile from './BaseTile';
import Tile, { TileSize } from './Tile';

function FieldFrame({children, width, height}) {
  return (
    // Use Glamorous's Svg for the autoprefixer.
    <Svg
      width={width + 2}
      height={height + 2}
      onContextMenu={event => event.preventDefault()}
      css={{
        userSelect: 'none',
        cursor: 'url(./bomb-detector.png) 0 32, default',
      }}
    >
      <BaseTile width={width + 2} height={height + 2} />
      <svg width={width} height={height} x="1" y="1">
        {children}
      </svg>
    </Svg>
  );
}

export default connect(
  state => ({ field: state.field }),
  dispatcher => ({ onClearTile: compose(dispatcher, clearTile) }),
)(
  function Field({field, onClearTile}) {
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
              onClear={title => onClearTile(field, title)}
            />
          ))
        }
      </FieldFrame>
    );
  }
);
