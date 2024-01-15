import { xString, yString, CellColor } from '../types/types';

export class CellModel {
  x: xString;
  y: yString;
  color: CellColor;

  constructor(x: xString, y: yString) {
    this.x = x;
    this.y = y;
    this.color = this.defineColor(x, y);
  }

  private defineColor(x: xString, y: yString): CellColor {
    if (Number(y) % 2) {
      return ['A', 'C', 'E', 'G'].some((el) => el === x) ? 'black' : 'white';
    } else {
      return ['B', 'D', 'F', 'H'].some((el) => el === x) ? 'black' : 'white';
    }
  }
}
