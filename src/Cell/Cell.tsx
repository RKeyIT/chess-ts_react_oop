import { Pawn } from '../Piece/pawn/Pawn';
import { Coordinates } from '../types/types';
import { CellModel } from './CellModel';
import styles from './styles.module.css';

interface ICellProps {
  model: CellModel;
}

export function Cell({ model }: ICellProps) {
  const color = model.color;
  const piece = model.piece;
  const coordinates: Coordinates = `${model.x}${model.y}`;

  return (
    <div className={`${styles.Cell} ${styles[color]}`}>
      <div className={styles.coordinates}>{coordinates}</div>
      <div className={styles.highlighter}></div>
      {piece && <Pawn></Pawn>}
    </div>
  );
}
