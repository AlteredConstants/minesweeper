import React from "react"
import {
  StartedField as StartedFieldType,
  Tile as TileType,
} from "../interface"
import { TileActionType } from "../reducer/tiles"
import { getCoordinates } from "../util"
import { TileSize } from "./"
import { FieldFrame } from "./FieldFrame"
import Tile, { TileRefObject } from "./Tile"

interface StartedFieldProps {
  field: StartedFieldType
  onTileAction(type: TileActionType, tile: TileType): void
}
export default function StartedField({
  field: { width, height, tiles },
  onTileAction,
}: StartedFieldProps) {
  const [selectedIndex, setSelectedIndex] = React.useState<number>()
  const [isClearing, setIsClearing] = React.useState(false)

  const tileReferenceListReference = React.useRef(
    tiles.map(() => React.createRef<TileRefObject>()),
  )

  React.useEffect(() => {
    if (isClearing) {
      setIsClearing(false)
    }
    if (selectedIndex != null) {
      tileReferenceListReference.current[selectedIndex].current?.focus()
    }
  }, [selectedIndex, isClearing])

  function getNextIndex(key: string): number | undefined {
    const { row, column } = getCoordinates(selectedIndex ?? 0, width)

    switch (key) {
      case "o": // Left
        return row * width + Math.max(column - 1, 0)
      case "u": // Right
        return row * width + Math.min(column + 1, width - 1)
      case ".": // Up
        return Math.max(row - 1, 0) * width + column
      case "e": // Down
        return Math.min(row + 1, height - 1) * width + column
      default:
        return selectedIndex
    }
  }

  const handleTileAction = React.useCallback(
    (type: TileActionType, tile: TileType) => {
      if (type === TileActionType.Clear) {
        setIsClearing(true)
      }
      onTileAction(type, tile)
    },
    [onTileAction],
  )

  return (
    <FieldFrame
      width={TileSize * width}
      height={TileSize * height}
      onNavigate={key => setSelectedIndex(getNextIndex(key))}
    >
      {tiles.map(tile => (
        <Tile
          key={`tile-${tile.index}`}
          ref={tileReferenceListReference.current[tile.index]}
          tile={tile}
          size={TileSize}
          onAction={handleTileAction}
        />
      ))}
    </FieldFrame>
  )
}
