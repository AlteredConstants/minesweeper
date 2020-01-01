import React from "react";
import {
  StartedField as StartedFieldType,
  Tile as TileType,
} from "../interface";
import { TileActionType } from "../reducer/tiles";
import { getCoordinates } from "../util";
import { TileSize } from "./";
import { FieldFrame } from "./FieldFrame";
import Tile from "./Tile";

interface StartedFieldProps {
  field: StartedFieldType;
  onTileAction(type: TileActionType, tile: TileType): void;
}
export default function StartedField({
  field: { width, height, tiles },
  onTileAction,
}: StartedFieldProps) {
  const [selectedIndex, setSelectedIndex] = React.useState<number>();
  const [isClearing, setIsClearing] = React.useState(false);

  const tileReferenceListReference = React.useRef(
    tiles.map(() => React.createRef<SVGGElement>()),
  );

  React.useEffect(() => {
    if (isClearing) {
      setIsClearing(false);
    }
    if (selectedIndex != null) {
      tileReferenceListReference.current[selectedIndex].current?.focus();
    }
  }, [selectedIndex, isClearing]);

  return (
    <FieldFrame
      width={TileSize * width}
      height={TileSize * height}
      onNavigate={key => {
        const { row, column } = getCoordinates(selectedIndex ?? 0, width);

        let newIndex: number | undefined;
        switch (key) {
          case "o": // Left
            newIndex = row * width + Math.max(column - 1, 0);
            break;
          case "u": // Right
            newIndex = row * width + Math.min(column + 1, width - 1);
            break;
          case ".": // Up
            newIndex = Math.max(row - 1, 0) * width + column;
            break;
          case "e": // Down
            newIndex = Math.min(row + 1, height - 1) * width + column;
            break;
        }

        if (newIndex != null) {
          setSelectedIndex(newIndex);
        }
      }}
    >
      {tiles.map(tile => (
        <Tile
          key={`tile-${tile.index}`}
          forwardRef={tileReferenceListReference.current[tile.index]}
          tile={tile}
          size={TileSize}
          onAction={(type, tile) => {
            if (type === TileActionType.Clear) {
              setIsClearing(true);
            }
            onTileAction(type, tile);
          }}
        />
      ))}
    </FieldFrame>
  );
}
