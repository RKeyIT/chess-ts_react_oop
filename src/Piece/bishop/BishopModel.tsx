import { Color } from '../../types/types';
import { PieceAbstract } from '../PieceAbstract';

export class BishopModel extends PieceAbstract {
  constructor(team: Color) {
    super(team);
  }
}
