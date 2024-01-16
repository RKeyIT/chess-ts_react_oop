import { PieceColor } from '../../types/types';
import { PieceAbstract } from '../PieceAbstract';

export class PawnModel extends PieceAbstract {
  constructor(team: PieceColor) {
    super(team);
  }
}
