import React from 'react';
import { Text } from 'glamorous';

export default function CenterText({ text, children, ...props }) {
  return (
    <Text
      textAnchor="middle"
      alignmentBaseline="central"
      dominantBaseline="central"
      x="50%"
      y="50%"
      width="100%"
      height="100%"
      {...props}
    >
      {text || children}
    </Text>
  );
}
