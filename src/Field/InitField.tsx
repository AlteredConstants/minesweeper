import { chunk, range } from "lodash";
import React from "react";
import { InitField as InitFieldType } from "../interface";
import { TileSize } from "./";
import { FieldFrame } from "./FieldFrame";
import { InitTile } from "./Tile";

interface InitFieldProps {
	field: InitFieldType;
	onStart(startTileIndex: number): void;
}
export default function InitField({
	field: { width, height },
	onStart,
}: InitFieldProps) {
	const rows = chunk(range(0, width * height), width);
	return (
		<FieldFrame width={TileSize * width} height={TileSize * height}>
			{rows.map((row) => (
				<g role="row" key={`row-${Math.floor(row[0] / width)}`}>
					{row.map((index) => {
						return (
							<InitTile
								key={`tile-${index}`}
								index={index}
								width={width}
								size={TileSize}
								onStart={onStart}
							/>
						);
					})}
				</g>
			))}
		</FieldFrame>
	);
}
