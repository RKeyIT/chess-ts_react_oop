import { Color } from '../../types/types';
import { PieceAbstract } from '../PieceAbstract';

export class PawnModel extends PieceAbstract {
  constructor(team: Color) {
    super(team);
  }
}
