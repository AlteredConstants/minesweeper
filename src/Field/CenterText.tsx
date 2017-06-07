import * as React from 'react';

type Props = {
  value?: string;
  children?: React.ReactNode;
} & React.SVGAttributes<SVGTextElement>;
export default function CenterText({ value, children, ...props }: Props) {
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
      {value || children}
    </text>
  );
}
