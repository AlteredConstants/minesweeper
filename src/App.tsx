/// <reference types="styled-components/cssprop" />

import "./index.css";

import { type KeyboardEvent } from "react";
import { InitField, StartedField } from "./Field";
import { InputConfigContext, useInputConfig } from "./input-config";
import type { InitField as InitFieldType } from "./interface";
import { ClearedOverlay, ExplodedOverlay, OverlayContainer } from "./Overlay";
import { useField } from "./useField";

// Beginner: 9x9x10
// Intermediate: 16x16x40
// Expert: 30x16x99
const initialField: InitFieldType = {
	state: "init",
	width: 30,
	height: 16,
	mineCount: 99,
};

export function App() {
	const { field, start, reset, dispatchTileAction } = useField(initialField);

	const [inputConfig, setInputConfig] = useInputConfig();

	function updateInputConfig(event: KeyboardEvent<HTMLInputElement>) {
		if (event.key === "Tab") {
			return;
		}
		setInputConfig({ ...inputConfig, [event.currentTarget.name]: event.key });
	}

	return (
		<InputConfigContext.Provider value={inputConfig}>
			<div className="App" onContextMenu={(event) => event.preventDefault()}>
				<header>
					<h1>Minesweeper</h1>
				</header>
				<OverlayContainer isActive={field.state === "active"}>
					{field.state === "init" ?
						<InitField field={field} onStart={start} />
					:	<StartedField field={field} onTileAction={dispatchTileAction} />}
					{field.state === "cleared" ?
						<ClearedOverlay onDismiss={reset} />
					: field.state === "exploded" ?
						<ExplodedOverlay onDismiss={reset} />
					:	null}
				</OverlayContainer>
			</div>

			<form>
				<fieldset>
					<legend>Navigation</legend>
					<label>
						Up
						<input
							name="up"
							value={inputConfig.up}
							onKeyDown={updateInputConfig}
							readOnly
						/>
					</label>
					<label>
						Down
						<input
							name="down"
							value={inputConfig.down}
							onKeyDown={updateInputConfig}
							readOnly
						/>
					</label>
					<label>
						Left
						<input
							name="left"
							value={inputConfig.left}
							onKeyDown={updateInputConfig}
							readOnly
						/>
					</label>
					<label>
						Right
						<input
							name="right"
							value={inputConfig.right}
							onKeyDown={updateInputConfig}
							readOnly
						/>
					</label>
				</fieldset>
				<fieldset>
					<legend>Tile Actions</legend>
					<label>
						Clear
						<input
							name="clear"
							value={inputConfig.clear}
							onKeyDown={updateInputConfig}
							readOnly
						/>
					</label>
					<label>
						Clear Adjacent
						<input
							name="clearAdjacent"
							value={inputConfig.clearAdjacent}
							onKeyDown={updateInputConfig}
							readOnly
						/>
					</label>
					<label>
						Toggle Flag
						<input
							name="flag"
							value={inputConfig.flag}
							onKeyDown={updateInputConfig}
							readOnly
						/>
					</label>
				</fieldset>
			</form>
		</InputConfigContext.Provider>
	);
}
