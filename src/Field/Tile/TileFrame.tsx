import React from "react"

interface TileFrameProps {
  children: JSX.Element
  row: number
  column: number
  size: number
}
export default function TileFrame({
  children,
  row,
  column,
  size,
}: TileFrameProps) {
  return (
    <svg
      role="cell"
      x={column * size}
      y={row * size}
      width={size}
      height={size}
      data-test="tile"
    >
      {children}
    </svg>
  )
}
