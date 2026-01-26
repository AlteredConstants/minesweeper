import React from "react";
import styled from "styled-components";

export default function BaseTile(props: React.SVGProps<SVGRectElement>) {
	return (
		<rect
			width="100%"
			height="100%"
			fill="darkGoldenRod"
			stroke="pink"
			strokeWidth="1px"
			{...props}
		/>
	);
}

export const SelectableTile = styled(BaseTile)<{ isSelected: boolean }>(
	({ isSelected }) =>
		isSelected ? { stroke: "black", strokeWidth: 3 } : undefined,
);
