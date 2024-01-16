import { Color } from '../../types/types';
import { PieceAbstract } from '../PieceAbstract';
import { Knight } from './Knight';

export class KnightModel extends PieceAbstract {
  constructor(team: Color) {
    super(team);
  }

  readonly component = (<Knight color={this.team}></Knight>);
}
