import React from "react";

type CenterTextProps = { value: string } & React.SVGProps<SVGTextElement>;
export default function CenterText({ value, ...props }: CenterTextProps) {
	return (
		<text
			textAnchor="middle"
			alignmentBaseline="central"
			dominantBaseline="central"
			x="50%"
			y="50%"
			width="100%"
			height="100%"
			{...props}
		>
			{value}
		</text>
	);
}
