import React from "react"
import { InputConfigContext } from "../../input-config"
import { Tile } from "../../interface"
import { SelectableTile } from "./BaseTile"
import CenterText from "./CenterText"
import { TileRef, useTileRef } from "./useTileRef"

const CountColors = [
  { foreground: "transparent", background: "antiqueWhite" },
  { foreground: "navy", background: "lightSkyBlue" },
  { foreground: "darkOliveGreen", background: "paleGreen" },
  { foreground: "fireBrick", background: "lightCoral" },
  { foreground: "midnightBlue", background: "lightSteelBlue" },
  { foreground: "maroon", background: "lightSalmon" },
  { foreground: "darkCyan", background: "lightCyan" },
  { foreground: "black", background: "gainsboro" },
  { foreground: "dimGrey", background: "whiteSmoke" },
]

interface CountTileProps {
  tile: Tile
  isSelected: boolean
  onClearAdjacent(): void
}
export default React.forwardRef(function CountTile(
  { tile: { adjacentMineCount }, isSelected, onClearAdjacent }: CountTileProps,
  tileRef: TileRef,
) {
  const [isClearingAdjacent, setIsClearingAdjacent] = React.useState(false)
  const ref = useTileRef(tileRef)

  const inputConfig = React.useContext(InputConfigContext)

  return (
    <g
      ref={ref}
      role="button"
      tabIndex={-1}
      onMouseDown={({ buttons }) => {
        if (buttons === 3) {
          setIsClearingAdjacent(true)
        }
      }}
      onMouseUp={() => {
        if (isClearingAdjacent) {
          setIsClearingAdjacent(false)
          onClearAdjacent()
        }
      }}
      onKeyDown={(event) => {
        if (event.key === inputConfig.clearAdjacent) {
          onClearAdjacent()
        }
      }}
    >
      <SelectableTile
        fill={CountColors[adjacentMineCount].background}
        isSelected={isSelected}
      />
      <CenterText
        fontSize="1.1em"
        fill={CountColors[adjacentMineCount].foreground}
        value={adjacentMineCount.toString()}
      />
    </g>
  )
})
