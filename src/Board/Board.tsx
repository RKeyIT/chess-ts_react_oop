import { useState } from 'react';
import { BoardModel } from './BoardModel';
import styles from './styles.module.css';
import { Cell } from '../Cell/Cell';

export function Board() {
  const [newBoardModel] = useState<BoardModel>(new BoardModel());

  return (
    <div className={styles.Board}>
      {newBoardModel.cells.map((cell) => {
        return <Cell model={cell} key={cell.x + cell.y}></Cell>;
      })}
    </div>
  );
}
