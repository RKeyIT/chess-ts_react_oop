import { Color } from '../../types/types';
import { PieceAbstract } from '../PieceAbstract';
import { Bishop } from './Bishop';

export class BishopModel extends PieceAbstract {
  constructor(team: Color) {
    super(team);
  }

  readonly component = (<Bishop color={this.team}></Bishop>);
}
