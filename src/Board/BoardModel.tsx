import { CellModel } from '../Cell/CellModel';
import { BishopModel } from '../Piece/bishop/BishopModel';
import { KingModel } from '../Piece/king/KingModel';
import { KnightModel } from '../Piece/knight/KnightModel';
import { PawnModel } from '../Piece/pawn/PawnModel';
import { QueenModel } from '../Piece/queen/QueenModel';
import { RookModel } from '../Piece/rook/RookModel';
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

    let yIndex: number = 7;
    let xIndex: number = 0;

    for (let i = 1; i <= 64; i++) {
      cellsArray.push(new CellModel(xArrString[xIndex], yArrString[yIndex]));

      if (i % 8 === 0) {
        yIndex--;
        xIndex = 0;
      } else {
        xIndex++;
      }
    }

    return cellsArray;
  }

  private initializePieces() {
    this.cells.forEach((el) => {
      if (el.y === '2') {
        el.piece = new PawnModel('white');
      }
      if (el.y === '7') {
        el.piece = new PawnModel('black');
      }
      if (el.y === '1' || el.y === '8') {
        if (el.x === 'A' || el.x === 'H') {
          el.piece = new RookModel(el.y === '1' ? 'white' : 'black');
        }
        if (el.x === 'B' || el.x === 'G') {
          el.piece = new KnightModel(el.y === '1' ? 'white' : 'black');
        }
        if (el.x === 'C' || el.x === 'F') {
          el.piece = new BishopModel(el.y === '1' ? 'white' : 'black');
        }
        if (el.x === 'D') {
          el.piece = new QueenModel(el.y === '1' ? 'white' : 'black');
        }
        if (el.x === 'E') {
          el.piece = new KingModel(el.y === '1' ? 'white' : 'black');
        }
      }
    });
  }
}
