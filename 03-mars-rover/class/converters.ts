import { Command, Rover } from "./domain";

export function convertStringToCommand(s: string): Command {
  switch (s?.toLowerCase().trim()) {
    case "f":
      return "MoveForward";
    case "b":
      return "MoveBackward";
    case "l":
      return "TurnLeft";
    case "r":
      return "TurnRight";
    case "q":
      return "Quit";
    default:
      return "Unknown";
  }
}

export function convertRoverToString(r:Rover): string {
  return `Rover is at (${r.x}, ${r.y}) facing ${r.direction}`;
}