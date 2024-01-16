import { Color } from '../../types/types';
import { PieceAbstract } from '../PieceAbstract';

export class RookModel extends PieceAbstract {
  constructor(team: Color) {
    super(team);
  }
}