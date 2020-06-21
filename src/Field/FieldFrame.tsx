import React from "react"
import { BaseTile } from "./Tile"

interface FieldFrameProps {
  children: JSX.Element[]
  width: number
  height: number
  onNavigate?(key: string): void
}
export function FieldFrame({
  children,
  width,
  height,
  onNavigate,
}: FieldFrameProps) {
  return (
    <svg width={width + 2} height={height + 2}>
      <BaseTile />
      <svg
        role="grid"
        width={width}
        height={height}
        x="1"
        y="1"
        tabIndex={0}
        onKeyDown={(event) => onNavigate?.(event.key)}
      >
        {children}
      </svg>
    </svg>
  )
}
