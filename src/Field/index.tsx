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
    <svg width={width} height={height} x="1" y="1" data-test="field">
      {children}
    </svg>
  </svg>
);

interface FieldProps {
  field: Field;
}
const Field = ({ field }: FieldProps) => (
  <FieldFrame width={TileSize * field.width} height={TileSize * field.height}>
    {field.tiles.map(tile => (
      <Tile key={`tile-${tile.index}`} tile={tile} size={TileSize} />
    ))}
  </FieldFrame>
);

export default connect<FieldProps, {}, {}, State>(({ field }) => ({
  field,
}))(Field);
