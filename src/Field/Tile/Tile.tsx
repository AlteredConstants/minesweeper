import { memo } from "react";
import type { Tile as TileType } from "../../interface";
import { type TileActionType } from "../../reducer/tiles";
import BaseTile from "./BaseTile";
import CenterText from "./CenterText";
import { CountTile } from "./CountTile";
import { CoveredTile } from "./CoveredTile";
import TileFrame from "./TileFrame";
import { type TileRef } from "./useTileRef";

const MineTile = () => (
	<g>
		<BaseTile fill="red" />
		<CenterText fontSize="1em" value="💥" />
	</g>
);

interface TileProps {
	tile: TileType;
	size: number;
	isSelected?: boolean;
	onAction(type: TileActionType, tile: TileType): void;
	ref?: TileRef;
}
export const Tile = memo(function ({
	tile,
	tile: { row, column, isCleared, isFlagged, isMine },
	size,
	isSelected,
	onAction,
	ref,
}: TileProps) {
	return (
		<TileFrame row={row} column={column} size={size}>
			{!isCleared ?
				<CoveredTile
					ref={ref}
					isFlagged={isFlagged}
					isSelected={isSelected}
					onClear={() => onAction("clear", tile)}
					onToggleFlag={() => onAction("toggleFlag", tile)}
				/>
			: isMine ?
				<MineTile />
			:	<CountTile
					ref={ref}
					tile={tile}
					isSelected={isSelected}
					onClearAdjacent={() => onAction("clearAdjacent", tile)}
				/>
			}
		</TileFrame>
	);
});
