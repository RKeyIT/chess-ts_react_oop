import { Color } from '../../types/types';
import { PieceAbstract } from '../PieceAbstract';
import { Pawn } from './Pawn';

export class PawnModel extends PieceAbstract {
  constructor(team: Color) {
    super(team);
  }

  readonly component = (<Pawn color={this.team}></Pawn>);
}
