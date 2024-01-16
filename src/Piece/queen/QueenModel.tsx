import { Color } from '../../types/types';
import { PieceAbstract } from '../PieceAbstract';
import { Queen } from './Queen';

export class QueenModel extends PieceAbstract {
  constructor(team: Color) {
    super(team);
  }

  readonly component = (<Queen color={this.team}></Queen>);
}
