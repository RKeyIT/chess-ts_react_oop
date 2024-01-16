import { ReactNode } from 'react';
import { Color } from '../types/types';

export abstract class PieceAbstract {
  constructor(team: Color) {
    this.team = team;
  }

  readonly team: Color;
  abstract readonly component: ReactNode;
}
