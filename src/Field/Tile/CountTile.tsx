import { useContext, useState } from "react";
import { InputConfigContext } from "../../input-config";
import type { Tile } from "../../interface";
import { SelectableTile } from "./BaseTile";
import CenterText from "./CenterText";
import { type TileRef, useTileRef } from "./useTileRef";

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
] as const;

interface CountTileProps {
	tile: Tile;
	isSelected?: boolean;
	onClearAdjacent(): void;
	ref?: TileRef;
}
export function CountTile({
	tile: { adjacentMineCount },
	isSelected,
	onClearAdjacent,
	ref,
}: CountTileProps) {
	const [isClearingAdjacent, setIsClearingAdjacent] = useState(false);
	const tileRef = useTileRef(ref);

	const inputConfig = useContext(InputConfigContext);

	return (
		<g
			ref={tileRef}
			role="button"
			tabIndex={-1}
			onMouseDown={({ buttons }) => {
				if (buttons === 3) {
					setIsClearingAdjacent(true);
				}
			}}
			onMouseUp={() => {
				if (isClearingAdjacent) {
					setIsClearingAdjacent(false);
					onClearAdjacent();
				}
			}}
			onKeyDown={(event) => {
				if (event.key === inputConfig.clearAdjacent) {
					onClearAdjacent();
				}
			}}
		>
			<SelectableTile
				fill={CountColors[adjacentMineCount].background}
				$isSelected={isSelected}
			/>
			<CenterText
				fontSize="1.1em"
				fill={CountColors[adjacentMineCount].foreground}
				value={adjacentMineCount.toString()}
			/>
		</g>
	);
}
