import { useEffect, useState } from "react";
import type { InitField, Tile, StartedField } from "./interface";
import { createField } from "./util";
import { serialize, deserialize } from "./util/fieldSerialization";
import tilesReducer, {
	areAllSafeTilesCleared,
	isMineCleared,
	type TileAction,
	type TileActionType,
} from "./reducer/tiles";

export function useField(initialField: InitField) {
	const [field, setField] = useState(() => {
		const fieldString = localStorage.getItem("field");
		return fieldString ? deserialize(fieldString) : initialField;
	});

	useEffect(() => {
		if (field.state === "init") {
			localStorage.removeItem("field");
		} else {
			localStorage.setItem("field", serialize(field));
		}
	}, [field]);

	return {
		field,
		reset(): void {
			setField(initialField);
		},
		start(startTileIndex: number): void {
			let nextField = createField(field, startTileIndex);
			nextField = updateTiles(nextField, {
				type: "clear",
				tile: nextField.tiles[startTileIndex],
			});
			setField(nextField);
		},
		dispatchTileAction(type: TileActionType, tile: Tile): void {
			if (field.state === "init") {
				throw new Error("Cannot dispatch tile action on unstarted field.");
			}
			let nextField = updateTiles(field, { type, tile });
			if (isMineCleared(nextField.tiles)) {
				nextField = { ...nextField, state: "exploded" };
			} else if (areAllSafeTilesCleared(nextField.tiles)) {
				nextField = { ...nextField, state: "cleared" };
			}
			setField(nextField);
		},
	};
}

function updateTiles(field: StartedField, action: TileAction): StartedField {
	const tiles = tilesReducer(field.tiles, action);
	return tiles !== field.tiles ? { ...field, tiles } : field;
}
