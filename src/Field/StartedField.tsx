import { chunk } from "lodash";
import {
	createRef,
	useCallback,
	useContext,
	useEffect,
	useRef,
	useState,
	type RefObject,
} from "react";
import { InputConfigContext } from "../input-config";
import type {
	StartedField as StartedFieldType,
	Tile as TileType,
} from "../interface";
import { type TileActionType } from "../reducer/tiles";
import { getCoordinates } from "../util";
import { TileSize } from "./";
import { FieldFrame } from "./FieldFrame";
import { Tile, type TileRefObject } from "./Tile";

interface StartedFieldProps {
	field: StartedFieldType;
	onTileAction(type: TileActionType, tile: TileType): void;
}
export default function StartedField({
	field,
	onTileAction,
}: StartedFieldProps) {
	const { selectedIndex, setSelectedIndex, tileListReference, setIsClearing } =
		useTileSelection(field);

	const handleTileAction = useCallback(
		(type: TileActionType, tile: TileType) => {
			if (type === "clear") {
				setIsClearing(true);
			}
			onTileAction(type, tile);
		},
		[onTileAction, setIsClearing],
	);

	const rows = chunk(field.tiles, field.width);

	return (
		<FieldFrame
			width={TileSize * field.width}
			height={TileSize * field.height}
			onNavigate={setSelectedIndex}
		>
			{rows.map((row) => (
				<g role="row" key={`row-${row[0].row}`}>
					{row.map((tile) => (
						<Tile
							key={`tile-${tile.index}`}
							ref={tileListReference.current[tile.index]}
							tile={tile}
							size={TileSize}
							isSelected={selectedIndex === tile.index}
							onAction={handleTileAction}
						/>
					))}
				</g>
			))}
		</FieldFrame>
	);
}

function useTileSelection({ width, height, tiles }: StartedFieldType): {
	selectedIndex: number | undefined;
	setSelectedIndex: (key: string) => void;
	tileListReference: RefObject<RefObject<TileRefObject | null>[]>;
	setIsClearing: (isClearing: boolean) => void;
} {
	const [selectedIndex, setSelectedIndex] = useState<number>();
	const [isClearing, setIsClearing] = useState(false);

	const tileReferenceListReference = useRef(
		tiles.map(() => createRef<TileRefObject>()),
	);

	useEffect(() => {
		if (isClearing) {
			setIsClearing(false);
		}
		if (selectedIndex != null) {
			tileReferenceListReference.current[selectedIndex]?.current?.focus();
		}
	}, [selectedIndex, isClearing]);

	const inputConfig = useContext(InputConfigContext);

	function getNextIndex(key: string): number | undefined {
		const { row, column } = getCoordinates(selectedIndex ?? 0, width);

		switch (key) {
			case inputConfig.left:
				return row * width + Math.max(column - 1, 0);
			case inputConfig.right:
				return row * width + Math.min(column + 1, width - 1);
			case inputConfig.up:
				return Math.max(row - 1, 0) * width + column;
			case inputConfig.down:
				return Math.min(row + 1, height - 1) * width + column;
			default:
				return selectedIndex;
		}
	}

	return {
		selectedIndex,
		setSelectedIndex: (key: string) => setSelectedIndex(getNextIndex(key)),
		tileListReference: tileReferenceListReference,
		setIsClearing,
	};
}
