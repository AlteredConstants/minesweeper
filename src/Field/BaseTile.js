import React from 'react';
import glamorous from 'glamorous';

const GlamorousBaseTile = glamorous.rect({
  fill: 'darkGoldenRod',
  stroke: 'pink',
  strokeWidth: 1,
});
export default function BaseTile(props) {
  return <GlamorousBaseTile width="100%" height="100%" {...props} />;
}
