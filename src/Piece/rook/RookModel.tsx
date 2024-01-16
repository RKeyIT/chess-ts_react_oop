import { Color } from '../../types/types';
import { PieceAbstract } from '../PieceAbstract';
import { Rook } from './Rook';

export class RookModel extends PieceAbstract {
  constructor(team: Color) {
    super(team);
  }

  readonly component = (<Rook color={this.team}></Rook>);
}
