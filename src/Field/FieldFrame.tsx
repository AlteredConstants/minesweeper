import * as React from "react";
import { BaseTile } from "./Tile";

interface FieldFrameProps {
  children: JSX.Element[];
  width: number;
  height: number;
}
export function FieldFrame({ children, width, height }: FieldFrameProps) {
  return (
    <svg width={width + 2} height={height + 2}>
      <BaseTile />
      <svg width={width} height={height} x="1" y="1" data-test="field">
        {children}
      </svg>
    </svg>
  );
}
