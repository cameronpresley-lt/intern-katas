import {
  Command,
  commandToAction,
  Direction,
  moveBackward,
  moveForward,
  Rover,
  stringToCommand,
  turnLeft,
  turnRight,
} from "./domain";

describe("domain", () => {
  describe("moveForward", () => {
    it("and facing north, then y increases by 1", () => {
      const start = createRover({ direction: "North" });

      const result = moveForward(start);

      const expected: Rover = {
        x: start.x,
        y: start.y + 1,
        direction: "North",
      };
      expect(result).toStrictEqual(expected);
    });

    it("and facing south, then y decreases by 1", () => {
      const start = createRover({ direction: "South" });

      const result = moveForward(start);

      const expected: Rover = {
        x: start.x,
        y: start.y - 1,
        direction: "South",
      };
      expect(result).toStrictEqual(expected);
    });

    it("and facing east, then x increases by 1", () => {
      const start = createRover({ direction: "East" });

      const result = moveForward(start);

      const expected: Rover = {
        x: start.x + 1,
        y: start.y,
        direction: "East",
      };

      expect(result).toMatchObject(expected);
    });
    it("and facing west, then x decreases by 1", () => {
      const start = createRover({ direction: "West" });

      const result = moveForward(start);

      const expected: Rover = {
        x: start.x - 1,
        y: start.y,
        direction: "West",
      };
      expect(result).toStrictEqual(expected);
    });
  });

  describe("moveBackward", () => {
    it("and facing north, then y decreases by 1", () => {
      const start = createRover({ direction: "North" });

      const result = moveBackward(start);

      const expected: Rover = {
        x: start.x,
        y: start.y - 1,
        direction: "North",
      };
      expect(result).toStrictEqual(expected);
    });

    it("and facing south, then y increases by 1", () => {
      const start = createRover({ direction: "South" });

      const result = moveBackward(start);

      const expected: Rover = {
        x: start.x,
        y: start.y + 1,
        direction: "South",
      };
      expect(result).toStrictEqual(expected);
    });

    it("and facing east, then x decreases by 1", () => {
      const start = createRover({ direction: "East" });

      const result = moveBackward(start);

      const expected: Rover = {
        x: start.x - 1,
        y: start.y,
        direction: "East",
      };
      expect(result).toMatchObject(expected);
    });

    it("and facing west, then x increases by 1", () => {
      const start = createRover({ direction: "West" });

      const result = moveBackward(start);

      const expected: Rover = {
        x: start.x + 1,
        y: start.y,
        direction: "West",
      };
      expect(result).toMatchObject(expected);
    });
  });

  describe("turnLeft", () => {
    it.each<[Direction, Direction]>([
      ["North", "West"],
      ["West", "South"],
      ["South", "East"],
      ["East", "North"],
    ])(
      "and facing %s, then rover should face %s",
      (start: Direction, final: Direction) => {
        const rover = createRover({ direction: start });

        const result = turnLeft(rover);

        const expected = createRover({ direction: final });
        expect(result).toMatchObject(expected);
      }
    );
  });

  describe("turnRight", () => {
    it.each([
      ["North", "East"],
      ["East", "South"],
      ["South", "West"],
      ["West", "North"],
    ] as [Direction, Direction][])(
      "and facing %s, then rover should face %s",
      (start: Direction, final: Direction) => {
        const rover = createRover({ direction: start });

        const result = turnRight(rover);

        const expected = createRover({ direction: final });
        expect(result).toMatchObject(expected);
      }
    );
  });

  describe("stringToCommand", () => {
    it.each<[string, Command]>([
      ["f", "MoveForward"],
      ["F", "MoveForward"],
      ["b", "MoveBackward"],
      ["B", "MoveBackward"],
      ["l", "TurnLeft"],
      ["L", "TurnLeft"],
      ["r", "TurnRight"],
      ["R", "TurnRight"],
      ["q", "Quit"],
      ["Q", "Quit"],
      ["apples", "Unknown"],
      ["bananas", "Unknown"],
      [null!, "Unknown"],
    ])(
      "and input is %s, then %s is returned",
      (input: string, expected: Command) => {
        const result = stringToCommand(input);

        expect(result).toBe(expected);
      }
    );
  });

  describe("commandToAction", () => {
    it.each<[Command, string]>([
      ["MoveForward", "moveForward"],
      ["MoveBackward", "moveBackward"],
      ["TurnLeft", "turnLeft"],
      ["TurnRight", "turnRight"],
      ["Quit", "doNothing"],
      ["Unknown", "doNothing"],
    ])(
      "and command is %s, then function named %s is returned",
      (c: Command, name: string) => {
        const result = commandToAction(c);

        expect(result.name).toBe(name);

        const rover = createRover({direction:'West'});
      }
    );
  });

  function createRover(opts: Partial<Rover>): Rover {
    return {
      x: 0,
      y: 0,
      direction: "North",
      ...opts,
    };
  }
});
