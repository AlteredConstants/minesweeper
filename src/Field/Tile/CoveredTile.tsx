import React from "react"
import styled from "styled-components/macro"
import { InputConfigContext } from "../../input-config"
import BaseTile from "./BaseTile"
import CenterText from "./CenterText"
import { TileRef, useTileRef } from "./useTileRef"

const HoverTile = styled(BaseTile)({
  ":hover": { fill: "tan" },
  transition: "fill 200ms",
})

interface CoveredTileProps {
  isFlagged?: boolean
  onClear(): void
  onToggleFlag?(): void
}
export default React.forwardRef(function CoveredTile(
  { isFlagged, onClear, onToggleFlag }: CoveredTileProps,
  tileRef: TileRef,
) {
  const ref = useTileRef(tileRef)

  function clearIfNotFlagged(): void {
    if (!isFlagged) {
      onClear()
    }
  }

  const inputConfig = React.useContext(InputConfigContext)

  return (
    <g
      ref={ref}
      role="button"
      tabIndex={-1}
      onClick={clearIfNotFlagged}
      onContextMenu={onToggleFlag}
      onKeyDown={(event) => {
        switch (event.key) {
          case inputConfig.clear:
            clearIfNotFlagged()
            break
          case inputConfig.flag:
            onToggleFlag?.()
            break
        }
      }}
    >
      <HoverTile />
      {isFlagged && <CenterText fontSize="1em" value="🚩" />}
    </g>
  )
})
