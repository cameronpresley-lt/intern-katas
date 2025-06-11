import { convertRoverToString, convertStringToCommand } from "./converters";
import { Command, Rover } from "./domain";

describe("converters", () => {
  describe("convertStringToCommand", () => {
    it.each<[string, Command]>([
      ["f", "MoveForward"],
      ["F", "MoveForward"],
      ["  F  ", "MoveForward"],
      ["b", "MoveBackward"],
      ["B", "MoveBackward"],
      ["  B  ", "MoveBackward"],
      ["l", "TurnLeft"],
      ["L", "TurnLeft"],
      ["  L  ", "TurnLeft"],
      ["r", "TurnRight"],
      ["R", "TurnRight"],
      ["  R  ", "TurnRight"],
      ["q", "Quit"],
      ["Q", "Quit"],
      ["  Q  ", "Quit"],
      ["a", "Unknown"],
      ["A", "Unknown"],
      ["  A  ", "Unknown"],
    ])(
      "and input is '%s', then %s is returned",
      (input: string, expected: Command) => {
        const result = convertStringToCommand(input);

        expect(result).toBe(expected);
      }
    );
  });

  describe("convertRoverToString", () => {
    it("rover is in proper format", () => {
      const rover = new Rover(0, 0, "North");

      const result = convertRoverToString(rover);

      const expected = "Rover is at (0, 0) facing North";
      expect(result).toBe(expected);
    });
  });
});
