import { Color } from '../../types/types';
import { PieceAbstract } from '../PieceAbstract';

export class QueenModel extends PieceAbstract {
  constructor(team: Color) {
    super(team);
  }
}