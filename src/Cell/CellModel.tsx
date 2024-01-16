import { PieceAbstract } from '../Piece/PieceAbstract';
import { xString, yString, CellColor, Coordinates } from '../types/types';

export class CellModel {
  private _x: xString;
  private _y: yString;
  private _coordinates: Coordinates;
  private _color: CellColor;
  private _piece: null | PieceAbstract;

  constructor(x: xString, y: yString) {
    this._x = x;
    this._y = y;
    this._coordinates = `${x}${y}`;
    this._color = this.defineColor(x, y);
    this._piece = null;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  get coordinates() {
    return this._coordinates;
  }

  get piece() {
    return this._piece;
  }

  set piece(piece: PieceAbstract | null) {
    this._piece = piece;
  }

  get color() {
    return this._color;
  }

  private defineColor(x: xString, y: yString): CellColor {
    if (Number(y) % 2) {
      return ['A', 'C', 'E', 'G'].some((el) => el === x) ? 'black' : 'white';
    } else {
      return ['B', 'D', 'F', 'H'].some((el) => el === x) ? 'black' : 'white';
    }
  }
}
