import glamorous from 'glamorous';

const BaseTile = glamorous('rect', {
  forwardProps: ['width', 'height']
})({
  fill: 'darkGoldenRod',
  stroke: 'pink',
  strokeWidth: 1,
});
export default BaseTile;
