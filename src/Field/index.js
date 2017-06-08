import React from "react";
import { connect } from "react-redux";
import BaseTile from "./BaseTile";
import Tile from "./Tile";

export const TileSize = 23;

const FieldFrame = ({ children, width, height }) =>
  <svg
    width={width + 2}
    height={height + 2}
    onContextMenu={event => event.preventDefault()}
  >
    <BaseTile />
    <svg width={width} height={height} x="1" y="1">
      {children}
    </svg>
  </svg>;

const LoadingField = () => <strong>Loading...</strong>;

const LoadedField = ({ field }) =>
  <FieldFrame width={TileSize * field.width} height={TileSize * field.height}>
    {field.tiles.map(tile =>
      <Tile
        key={`tile-${tile.row}-${tile.column}`}
        tile={tile}
        size={TileSize}
      />,
    )}
  </FieldFrame>;

const Field = ({ field }) =>
  field ? <LoadedField field={field} /> : <LoadingField />;

export default connect(state => ({ field: state.game.field }))(Field);
