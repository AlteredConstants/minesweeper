import * as React from "react";
import { connect } from "react-redux";
import { Field, State } from "../interface";
import BaseTile from "./BaseTile";
import Tile from "./Tile";

export const TileSize = 23;

interface FieldFrameProps {
  children: JSX.Element[];
  width: number;
  height: number;
}
const FieldFrame = ({ children, width, height }: FieldFrameProps) => (
  <svg width={width + 2} height={height + 2}>
    <BaseTile />
    <svg width={width} height={height} x="1" y="1">
      {children}
    </svg>
  </svg>
);

const LoadingField = () => <strong>Loading...</strong>;

interface LoadedFieldProps {
  field: Field;
}
const LoadedField = ({ field }: LoadedFieldProps) => (
  <FieldFrame width={TileSize * field.width} height={TileSize * field.height}>
    {field.tiles.map(tile => (
      <Tile key={`tile-${tile.index}`} tile={tile} size={TileSize} />
    ))}
  </FieldFrame>
);

interface FieldStateProps {
  field: Field | null;
}
const Field = ({ field }: FieldStateProps) =>
  field ? <LoadedField field={field} /> : <LoadingField />;

export default connect<FieldStateProps, {}, {}, State>(({ field }) => ({
  field,
}))(Field);
