export const getCoordinates = (index: number, width: number) => ({
	row: Math.floor(index / width),
	column: index % width,
});
