import { Color } from '../../types/types';
import { PieceAbstract } from '../PieceAbstract';
import { King } from './King';

export class KingModel extends PieceAbstract {
  constructor(team: Color) {
    super(team);
  }

  readonly component = (<King color={this.team}></King>);
}
