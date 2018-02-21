import { keyframes } from "glamor";
import glamorous from "glamorous";
import * as React from "react";
import { connect } from "react-redux";
import { startNewField } from "./action";
import Emoji, { EmojiType } from "./Emoji";
import Field from "./Field";
import { FieldState, State } from "./interface";

const PaddedEmoji = glamorous(Emoji)({ margin: "0.8em" });

interface OverlayContainerProps {
  isActive: boolean;
}
const OverlayContainer = glamorous.div<OverlayContainerProps>(
  {
    position: "relative",
    width: "fit-content",
    margin: "auto",
    userSelect: "none",
  },
  ({ isActive }) => ({
    cursor: isActive ? "url(./bomb-detector.png) 0 32, default" : "pointer",
  }),
);

interface OverlayProps {
  backgroundColor1: string;
  backgroundColor2: string;
}
const Overlay = glamorous.div<OverlayProps>(
  {
    position: "absolute",
    width: "100%",
    height: "100%",
    margin: 0,
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "visibility 0ms 0ms, opacity 100ms ease-out",
  },
  ({ backgroundColor1, backgroundColor2 }) => {
    const flash = keyframes({
      "0%": { backgroundColor: backgroundColor1, fontSize: "1.5em" },
      "100%": { backgroundColor: backgroundColor2, fontSize: "1.6em" },
    });
    return {
      animation: `${flash} 1.5s infinite ease-in-out alternate`,
    };
  },
);

interface OverlayMessageProps {
  emoji: EmojiType;
  text: string;
}
const OverlayMessage = ({ emoji, text }: OverlayMessageProps) => (
  <>
    <PaddedEmoji type={emoji} css={{ transform: "scale(-1,1)" }} />
    {text}
    <PaddedEmoji type={emoji} />
  </>
);

interface FieldStateOverlayProps {
  fieldState: FieldState;
  onDismiss: () => {};
}
const ClearedOverlay = ({ fieldState, onDismiss }: FieldStateOverlayProps) => (
  <Overlay
    backgroundColor1="rgba(87, 255, 34, 0.6)"
    backgroundColor2="rgba(0, 255, 0, 0.7)"
    onDoubleClick={onDismiss}
  >
    <OverlayMessage emoji="party popper" text="Cleared" />
  </Overlay>
);
const ExplodedOverlay = ({ fieldState, onDismiss }: FieldStateOverlayProps) => (
  <Overlay
    backgroundColor1="rgba(255, 87, 34, 0.6)"
    backgroundColor2="rgba(255, 0, 0, 0.7)"
    onDoubleClick={onDismiss}
  >
    <OverlayMessage emoji="bomb" text="Boom" />
  </Overlay>
);

interface AppStateProps {
  fieldState: FieldState | null;
}
interface AppDispatchProps {
  onReset: () => {};
}
const App = ({ fieldState, onReset }: AppStateProps & AppDispatchProps) => (
  <div className="App" onContextMenu={event => event.preventDefault()}>
    <header>
      <h1>Minesweeper</h1>
    </header>
    <OverlayContainer isActive={fieldState === FieldState.Active}>
      <Field />
      {fieldState === FieldState.Cleared ? (
        <ClearedOverlay fieldState={fieldState} onDismiss={() => onReset()} />
      ) : fieldState === FieldState.Exploded ? (
        <ExplodedOverlay fieldState={fieldState} onDismiss={() => onReset()} />
      ) : null}
    </OverlayContainer>
  </div>
);

export default connect<AppStateProps, AppDispatchProps, {}, State>(
  ({ field }) => ({ fieldState: field && field.state }),
  { onReset: startNewField },
)(App);
