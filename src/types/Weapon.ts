import type { PlayerType } from "./Players";

export type Weapon = "paper" | "rock" | "scissor";

export function determineWinner(
  p1Weapon: Weapon,
  p2Weapon: Weapon
): PlayerType | null {
  if (p1Weapon === p2Weapon) {
    return null;
  } else if (
    (p1Weapon === "rock" && p2Weapon === "scissor") ||
    (p1Weapon === "paper" && p2Weapon === "rock") ||
    (p1Weapon === "scissor" && p2Weapon === "paper")
  ) {
    return 'p1';
  }
  return 'p2';
}
