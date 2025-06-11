import { input } from "@inquirer/prompts";
import { Command } from "./domain";
import { convertStringToCommand } from "./converters";

export async function getUserChoice(): Promise<Command> {
  var result = await input({
    message:
      "Choose to Move (F)orward, Move (B)acwkard, Turn (L)eft, Turn (R)ight, or (Q)uit",
    validate: (s) => convertStringToCommand(s) !== "Unknown",
  });
  return convertStringToCommand(result);
}
