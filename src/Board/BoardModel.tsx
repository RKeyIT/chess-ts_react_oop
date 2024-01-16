import { CellModel } from '../Cell/CellModel';
import { PawnModel } from '../Piece/pawn/PawnModel';
import { xArrString, yArrString } from '../types/types';

export class BoardModel {
  private _cells: CellModel[] = this.initializeCells();

  constructor() {
    this.initializePieces();
  }

  get cells() {
    return this._cells;
  }

  private initializeCells(): CellModel[] {
    const cellsArray = [];

    let xIndex: number = 7;
    let yIndex: number = 0;

    for (let i = 1; i <= 64; i++) {
      cellsArray.push(new CellModel(xArrString[xIndex], yArrString[yIndex]));

      if (i % 8 === 0) {
        xIndex--;
        yIndex = 0;
      } else {
        yIndex++;
      }
    }

    return cellsArray;
  }

  private initializePieces() {
    this.cells.forEach((el) => {
      if (el.x === 'A' || el.x === 'B' || el.x === 'G' || el.x === 'H') {
        el.piece = new PawnModel('white');
      }
    });
  }
}
