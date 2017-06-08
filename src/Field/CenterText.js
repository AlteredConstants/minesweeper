import React from "react";

export default function CenterText({ value, children, ...props }) {
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
