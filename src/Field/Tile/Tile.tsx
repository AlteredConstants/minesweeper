import React from "react";
import { Tile as TileType } from "../../interface";
import { TileActionType } from "../../reducer/tiles";
import BaseTile from "./BaseTile";
import CenterText from "./CenterText";
import CountTile from "./CountTile";
import CoveredTile from "./CoveredTile";
import TileFrame from "./TileFrame";
import { TileRef } from "./useTileRef";

const MineTile = () => (
	<g>
		<BaseTile fill="red" />
		<CenterText fontSize="1em" value="💥" />
	</g>
);

interface TileProps {
	tile: TileType;
	size: number;
	isSelected: boolean;
	onAction(type: TileActionType, tile: TileType): void;
}
export default React.memo(
	React.forwardRef(function Tile(
		{
			tile,
			tile: { row, column, isCleared, isFlagged, isMine },
			size,
			isSelected,
			onAction,
		}: TileProps,
		ref: TileRef,
	) {
		return (
			<TileFrame row={row} column={column} size={size}>
				{!isCleared ?
					<CoveredTile
						ref={ref}
						isFlagged={isFlagged}
						isSelected={isSelected}
						onClear={() => onAction(TileActionType.Clear, tile)}
						onToggleFlag={() => onAction(TileActionType.ToggleFlag, tile)}
					/>
				: isMine ?
					<MineTile />
				:	<CountTile
						ref={ref}
						tile={tile}
						isSelected={isSelected}
						onClearAdjacent={() => onAction(TileActionType.ClearAdjacent, tile)}
					/>
				}
			</TileFrame>
		);
	}),
);
