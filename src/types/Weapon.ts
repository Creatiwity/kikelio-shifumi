import { PlayerType } from "./Players";

export enum Weapon {
  Paper = "paper",
  Rock = "rock",
  Scissor = "scissor",
}

export function determineWinner(
  p1Weapon: Weapon,
  p2Weapon: Weapon
): PlayerType | null {
  if (p1Weapon === p2Weapon) {
    return null;
  } else if (
    (p1Weapon === Weapon.Rock && p2Weapon === Weapon.Scissor) ||
    (p1Weapon === Weapon.Paper && p2Weapon === Weapon.Rock) ||
    (p1Weapon === Weapon.Scissor && p2Weapon === Weapon.Paper)
  ) {
    return PlayerType.Player1;
  }
  return PlayerType.Player2;
}
