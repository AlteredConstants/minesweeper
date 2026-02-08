import { useContext } from "react";
import styled from "styled-components";
import { InputConfigContext } from "../../input-config";
import { SelectableTile } from "./BaseTile";
import CenterText from "./CenterText";
import { type TileRef, useTileRef } from "./useTileRef";

const HoverTile = styled(SelectableTile)({
	":hover": { fill: "tan" },
	transition: "fill 200ms",
});

interface CoveredTileProps {
	isFlagged?: boolean;
	isSelected?: boolean;
	onClear(): void;
	onToggleFlag?(): void;
	ref?: TileRef;
}
export function CoveredTile({
	isFlagged = false,
	isSelected,
	onClear,
	onToggleFlag,
	ref,
}: CoveredTileProps) {
	const tileRef = useTileRef(ref);

	function clearIfNotFlagged(): void {
		if (!isFlagged) {
			onClear();
		}
	}

	const inputConfig = useContext(InputConfigContext);

	return (
		<g
			ref={tileRef}
			role="button"
			tabIndex={-1}
			onClick={clearIfNotFlagged}
			onContextMenu={onToggleFlag}
			onKeyDown={(event) => {
				switch (event.key) {
					case inputConfig.clear:
						clearIfNotFlagged();
						break;
					case inputConfig.flag:
						onToggleFlag?.();
						break;
				}
			}}
		>
			<HoverTile $isSelected={isSelected} />
			{isFlagged && <CenterText fontSize="1em" value="🚩" />}
		</g>
	);
}
