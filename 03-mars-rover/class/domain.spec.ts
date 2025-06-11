import { Command, Direction, IRover, processCommand, Rover } from "./domain";

describe("domain", () => {
  describe("rover", () => {
    describe("constructing", () => {
      it("by default, at (0,0) and North", () => {
        const rover = new Rover();

        expect(rover.x).toBe(0);
        expect(rover.y).toBe(0);
        expect(rover.direction).toBe("North");
      });
    });
    describe("moveForward", () => {
      it("and facing north, then y increases by 1", () => {
        const rover = new Rover(0, 0, "North");

        rover.moveForward();

        const expected = {
          x: 0,
          y: 1,
          direction: "North",
        };
        expect(rover).toMatchObject(expected);
      });

      it("and facing south, then y decreases by 1", () => {
        const rover = new Rover(0, 0, "South");

        rover.moveForward();

        const expected = {
          x: 0,
          y: -1,
          direction: "South",
        };
        expect(rover).toMatchObject(expected);
      });

      it("and facing east, then x increases by 1", () => {
        const rover = new Rover(0, 0, "East");

        rover.moveForward();

        const expected = {
          x: 1,
          y: 0,
          direction: "East",
        };
        expect(rover).toMatchObject(expected);
      });

      it("and facing west, then x decreases by 1", () => {
        const rover = new Rover(0, 0, "West");

        rover.moveForward();

        const expected = {
          x: -1,
          y: 0,
          direction: "West",
        };
        expect(rover).toMatchObject(expected);
      });
    });

    describe("moveBackward", () => {
      it("and facing north, then y decreases by 1", () => {
        const rover = new Rover(0, 0, "North");

        rover.moveBackward();

        const expected = {
          x: 0,
          y: -1,
          direction: "North",
        };
        expect(rover).toMatchObject(expected);
      });

      it("and facing south, then y increases by 1", () => {
        const rover = new Rover(0, 0, "South");

        rover.moveBackward();

        const expected = {
          x: 0,
          y: 1,
          direction: "South",
        };
        expect(rover).toMatchObject(expected);
      });

      it("and facing east, then x decreases by 1", () => {
        const rover = new Rover(0, 0, "East");

        rover.moveBackward();

        const expected = {
          x: -1,
          y: 0,
          direction: "East",
        };
        expect(rover).toMatchObject(expected);
      });

      it("and facing west, then x increases by 1", () => {
        const rover = new Rover(0, 0, "West");

        rover.moveBackward();

        const expected = {
          x: 1,
          y: 0,
          direction: "West",
        };
        expect(rover).toMatchObject(expected);
      });
    });

    describe("turnLeft", () => {
      it.each<[Direction, Direction]>([
        ["North", "West"],
        ["West", "South"],
        ["South", "East"],
        ["East", "North"],
      ])(
        "and facing %s, then rover faces %s",
        (start: Direction, ending: Direction) => {
          const rover = new Rover(0, 0, start);

          rover.turnLeft();

          const expected = {
            x: 0,
            y: 0,
            direction: ending,
          };
          expect(rover).toMatchObject(expected);
        }
      );
    });
    describe("turnRight", () => {
      it.each<[Direction, Direction]>([
        ["North", "East"],
        ["East", "South"],
        ["South", "West"],
        ["West", "North"],
      ])(
        "and facing %s, then rover faces %s",
        (start: Direction, ending: Direction) => {
          const rover = new Rover(0, 0, start);

          rover.turnRight();

          const expected = {
            x: 0,
            y: 0,
            direction: ending,
          };
          expect(rover).toMatchObject(expected);
        }
      );
    });
  });

  describe("processCommand", () => {
    it.each<[Command, keyof IRover]>([
      ["MoveForward", "moveForward"],
      ["MoveBackward", "moveBackward"],
      ["TurnLeft", "turnLeft"],
      ["TurnRight", "turnRight"],
    ])(
      "and command is %s, then rover's %s is called",
      (command: Command, methodName: keyof IRover) => {
        const roverSpy = createRoverSpy();

        processCommand(command, roverSpy);

        assertOnlyMethodWasCalled(roverSpy, methodName);
      }
    );

    it.each<[Command]>([["Quit"], ["Unknown"]])(
      "and command is %s, then rover is not updated",
      (command: Command) => {
        const roverSpy = createRoverSpy();

        processCommand(command, roverSpy);

        assertNoMethodsWereCalled(roverSpy);
      }
    );

    function createRoverSpy(): IRover {
      return {
        moveBackward: jest.fn(),
        moveForward: jest.fn(),
        turnLeft: jest.fn(),
        turnRight: jest.fn(),
        x: 0,
        y: 0,
        direction: "North",
      };
    }

    function assertOnlyMethodWasCalled(
      spy: IRover,
      methodName: keyof IRover
    ): void {
      const allMethods: (keyof IRover)[] = [
        "moveForward",
        "moveBackward",
        "turnLeft",
        "turnRight",
      ];

      expect(spy[methodName]).toHaveBeenCalledTimes(1);
      const otherMethods = allMethods.filter((x) => x !== methodName);
      otherMethods.forEach((k) => {
        expect(spy[k]).not.toHaveBeenCalled();
      });
    }

    function assertNoMethodsWereCalled(spy: IRover): void {
      const allMethods: (keyof IRover)[] = [
        "moveForward",
        "moveBackward",
        "turnLeft",
        "turnRight",
      ];

      allMethods.forEach((k) => {
        expect(spy[k]).not.toHaveBeenCalled();
      });
    }
  });
});
