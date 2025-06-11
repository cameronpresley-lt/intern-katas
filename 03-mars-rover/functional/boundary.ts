import { input } from "@inquirer/prompts";
import { Command, stringToCommand } from "./domain";

export async function getUserChoice(): Promise<Command> {
  var result = await input({
    message:
      "Choose to Move (F)orward, Move (B)acwkard, Turn (L)eft, Turn (R)ight, or (Q)uit",
    validate: (s) => stringToCommand(s) !== "Unknown",
  });
  return stringToCommand(result);
}
