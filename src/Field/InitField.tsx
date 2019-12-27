import { range } from "lodash";
import React from "react";
import { InitField as InitFieldType } from "../interface";
import { TileSize } from "./";
import { FieldFrame } from "./FieldFrame";
import { InitTile } from "./Tile";

interface InitFieldProps {
  field: InitFieldType;
  onStart: (startTileIndex: number) => void;
}
export default function InitField({ field, onStart }: InitFieldProps) {
  const { width, height } = field;
  return (
    <FieldFrame width={TileSize * width} height={TileSize * height}>
      {range(0, width * height).map(index => {
        return (
          <InitTile
            key={`tile-${index}`}
            index={index}
            width={width}
            size={TileSize}
            onStart={onStart}
          />
        );
      })}
    </FieldFrame>
  );
}
