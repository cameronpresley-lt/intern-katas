import { getUserChoice } from "./boundary";
import * as prompts from "@inquirer/prompts";
import * as domain from "./domain";

describe("boundary", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  describe("getUserChoice", () => {
    it.each<[string, domain.Command]>([
      ["f", "MoveForward"],
      ["b", "MoveBackward"],
      ["l", "TurnLeft"],
      ["r", "TurnRight"],
      ["q", "Quit"],
      ["apples", "Unknown"],
    ])(
      "given %s, then %s is returned",
      async (s: string, c: domain.Command) => {
        const spyStringToCommand = jest.spyOn(domain, "stringToCommand");
        jest.spyOn(prompts, "input").mockResolvedValue(s);

        const result = await getUserChoice();

        expect(result).toBe(c);
        expect(spyStringToCommand).toHaveBeenCalledWith(s);
      }
    );
  });
});
