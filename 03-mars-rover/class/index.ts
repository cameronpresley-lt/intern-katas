import { Command } from "../functional/domain";
import { processCommand, Rover } from "./domain";
import { convertRoverToString } from "./converters";
import { getUserChoice } from "./boundary";

main();

async function main(): Promise<void> {
  const rover: Rover = new Rover();
  let command: Command = "Unknown";
  while (command !== "Quit") {
    console.log(convertRoverToString(rover));
    command = await getUserChoice();
    processCommand(command, rover);
  }
}
