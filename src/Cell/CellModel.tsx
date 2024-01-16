import { PieceAbstract } from '../Piece/PieceAbstract';
import { xString, yString, Color, Coordinates } from '../types/types';

export class CellModel {
  private _x: xString;
  private _y: yString;
  private _coordinates: Coordinates;
  private _color: Color;
  private _piece: null | PieceAbstract = null;

  constructor(x: xString, y: yString) {
    this._x = x;
    this._y = y;
    this._coordinates = `${x}${y}`;
    this._color = this.defineColor(x, y);
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

  private defineColor(x: xString, y: yString): Color {
    if (Number(y) % 2) {
      return ['A', 'C', 'E', 'G'].some((el) => el === x) ? 'black' : 'white';
    } else {
      return ['B', 'D', 'F', 'H'].some((el) => el === x) ? 'black' : 'white';
    }
  }
}
