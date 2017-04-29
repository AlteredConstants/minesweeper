const initialState = {
  field: null,
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'START_NEW_FIELD': {
      return { ...state, field: payload };
    }
    case 'CLEAR_TILE': {
      const { tile, adjacentMineCount } = payload;
      if (tile.isCleared) {
        return state;
      }

      const newTile = {
        ...tile,
        isCleared: true,
        adjacentMineCount: adjacentMineCount
      };
      const { field } = state;
      const { tiles } = field;
      return {
        ...state,
        field: {
          ...field,
          tiles: [
            ...tiles.slice(0, tile.row),
            [
              ...tiles[tile.row].slice(0, tile.column),
              newTile,
              ...tiles[tile.row].slice(tile.column + 1),
            ],
            ...tiles.slice(tile.row + 1)
          ],
        },
      };
    }
    default: {
      return state;
    }
  }
}
