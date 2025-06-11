import { getUserChoice } from "./boundary";
import * as prompts from "@inquirer/prompts";
import * as converters from "./converters";
import { Command } from "./domain";

describe("boundary", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  describe("getUserChoice", () => {
    it.each<[string, Command]>([
      ["f", "MoveForward"],
      ["b", "MoveBackward"],
      ["l", "TurnLeft"],
      ["r", "TurnRight"],
      ["q", "Quit"],
      ["apples", "Unknown"],
    ])("given %s, then %s is returned", async (s: string, c: Command) => {
      const spyStringToCommand = jest.spyOn(
        converters,
        "convertStringToCommand"
      );
      jest.spyOn(prompts, "input").mockResolvedValue(s);

      const result = await getUserChoice();

      expect(result).toBe(c);
      expect(spyStringToCommand).toHaveBeenCalledWith(s);
    });
  });
});
