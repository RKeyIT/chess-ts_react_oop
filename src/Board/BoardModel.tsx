import { CellModel } from '../Cell/CellModel';
import { xArrString, yArrString } from '../types/types';

export class BoardModel {
  private cellsArray: CellModel[] = this.initializeCells();

  constructor() {}

  get cells() {
    return this.cellsArray;
  }

  private initializeCells(): CellModel[] {
    const cellsArray = [];

    let xIndex: number = 0;
    let yIndex: number = 0;

    for (let i = 1; i <= 64; i++) {
      cellsArray.push(new CellModel(xArrString[xIndex], yArrString[yIndex]));

      if (i % 8 === 0) {
        xIndex++;
        yIndex = 0;
      } else {
        yIndex++;
      }
    }

    return cellsArray;
  }
}
