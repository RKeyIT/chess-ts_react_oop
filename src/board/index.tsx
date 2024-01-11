import { Field } from '../field';
import styles from './styles.module.css';

export function Board() {
  return (
    <div className={styles.Board}>
      <Field />
    </div>
  );
}
