import { range } from "lodash";
import React from "react";
import { connect } from "react-redux";
import { startNewField } from "../action";
import { FieldConfig, State } from "../interface";
import { TileSize } from "./";
import { FieldFrame } from "./FieldFrame";
import { InitTile } from "./Tile";

interface InitFieldStateProps {
  config: FieldConfig;
}
interface InitFieldDispatchProps {
  onStart: (config: FieldConfig, startTileIndex: number) => {};
}
function InitField({
  config,
  onStart,
}: InitFieldStateProps & InitFieldDispatchProps) {
  const { width, height } = config;
  return (
    <FieldFrame width={TileSize * width} height={TileSize * height}>
      {range(0, width * height).map(index => {
        return (
          <InitTile
            key={`tile-${index}`}
            index={index}
            config={config}
            size={TileSize}
            onStart={onStart}
          />
        );
      })}
    </FieldFrame>
  );
}

export default connect<InitFieldStateProps, InitFieldDispatchProps, {}, State>(
  ({ fieldConfig }) => ({ config: fieldConfig }),
  { onStart: startNewField },
)(InitField);
