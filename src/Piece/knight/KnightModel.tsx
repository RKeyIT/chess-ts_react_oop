import { Color } from '../../types/types';
import { PieceAbstract } from '../PieceAbstract';

export class KnightModel extends PieceAbstract {
  constructor(team: Color) {
    super(team);
  }
}
