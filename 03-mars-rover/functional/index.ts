import { Command, commandToAction, Rover, stringToCommand } from "./domain";
import { getUserChoice } from "./boundary";

main();

async function main(): Promise<void> {
  let rover: Rover = { x: 0, y: 0, direction: "North" };
  let command: Command = "Unknown";

  while (command !== "Quit") {
    console.log(roverToString(rover));
    command = await getUserChoice();
    rover = commandToAction(command)(rover);
  }
}

function roverToString(r: Rover): string {
  return `Rover is at (${r.x}, ${r.y}) facing ${r.direction}`;
}
