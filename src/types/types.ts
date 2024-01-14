export type xString = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
export type yString = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
export const xArrString: xString[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
export const yArrString: yString[] = ['1', '2', '3', '4', '5', '6', '7', '8'];

export type Coordinates = `${xString}${yString}`;

export type CellColor = 'white' | 'black';
