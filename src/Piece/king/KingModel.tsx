import { Color } from '../../types/types';
import { PieceAbstract } from '../PieceAbstract';

export class KingModel extends PieceAbstract {
  constructor(team: Color) {
    super(team);
  }
}
