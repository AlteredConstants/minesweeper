// @flow
/* eslint-disable */

declare type Mine$Tile = {
  +index: number,
  +row: number,
  +column: number,
  +isMine: boolean,
  +adjacentMineCount: number,
  +isCleared: boolean,
  +isFlagged: boolean,
};

// $Shape doesn't preserve covariance so have to duplicate:
// https://github.com/facebook/flow/issues/3713
declare type Mine$PartialTile = $Shape<{|
  index: number,
  row: number,
  column: number,
  isMine: boolean,
  adjacentMineCount: number,
  isCleared: boolean,
  isFlagged: boolean,
|}>;

declare type Mine$Field = {
  +width: number,
  +height: number,
  +mineCount: number,
  +tiles: $ReadOnlyArray<Mine$Tile>,
  +isExploded: boolean,
};
