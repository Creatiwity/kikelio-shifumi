export enum PlayerType {
  Player1 = "p1",
  Player2 = "p2",
}

export interface Player {
  name: string;
  img: string;
  background: string;
  life: number;
}

export const playerImgs = [""];
