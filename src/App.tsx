import React from "react"
import { InitField, StartedField } from "./Field"
import { InitField as InitFieldType } from "./interface"
import { ClearedOverlay, ExplodedOverlay, OverlayContainer } from "./Overlay"
import { useField } from "./useField"

// Beginner: 9x9x10
// Intermediate: 16x16x40
// Expert: 30x16x99
const initialField: InitFieldType = {
  state: "init",
  width: 30,
  height: 16,
  mineCount: 99,
}

export default function App() {
  const { field, start, reset, dispatchTileAction } = useField(initialField)

  return (
    <div className="App" onContextMenu={event => event.preventDefault()}>
      <header>
        <h1>Minesweeper</h1>
      </header>
      <OverlayContainer isActive={field.state === "active"} data-test="overlay">
        {field.state === "init" ? (
          <InitField field={field} onStart={start} />
        ) : (
          <StartedField field={field} onTileAction={dispatchTileAction} />
        )}
        {field.state === "cleared" ? (
          <ClearedOverlay onDismiss={reset} />
        ) : field.state === "exploded" ? (
          <ExplodedOverlay onDismiss={reset} />
        ) : null}
      </OverlayContainer>
    </div>
  )
}
