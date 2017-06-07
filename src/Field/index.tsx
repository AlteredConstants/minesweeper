import * as React from 'react';
import { connect } from 'react-redux';
import { Field as FieldType, State } from '../index';
import BaseTile from './BaseTile';
import Tile from './Tile';

export const TileSize = 23;

type FieldFrameProps = {
  children?: React.ReactNode;
  width: number;
  height: number;
};
const FieldFrame = ({ children, width, height }: FieldFrameProps) =>
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

type LoadedFieldProps = { field: FieldType };
const LoadedField = ({ field }: LoadedFieldProps) =>
  <FieldFrame width={TileSize * field.width} height={TileSize * field.height}>
    {field.tiles.map(tile =>
      <Tile
        key={`tile-${tile.row}-${tile.column}`}
        tile={tile}
        size={TileSize}
      />,
    )}
  </FieldFrame>;

type FieldStateProps = { field?: FieldType };
const Field = ({ field }: FieldStateProps) =>
  field ? <LoadedField field={field} /> : <LoadingField />;

export default connect<FieldStateProps, {}, {}>((state: State) => ({
  field: state.game.field,
}))(Field);
