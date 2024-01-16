import { IPieceProps } from '../Piece';

export function Rook({ color }: IPieceProps) {
  return (
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={`Piece ${color}`}
    >
      <path d="M5 20h14v2H5v-2M17 2v3h-2V2h-2v3h-2V2H9v3H7V2H5v6h2v10h10V8h2V2h-2Z" />
    </svg>
  );
}
