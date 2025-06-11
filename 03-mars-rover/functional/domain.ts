export type Direction = "North" | "South" | "East" | "West";

export type Rover = {
  readonly x: number;
  readonly y: number;
  readonly direction: Direction;
};

export type Command =
  | "MoveForward"
  | "MoveBackward"
  | "TurnLeft"
  | "TurnRight"
  | "Quit"
  | "Unknown";
  
export type Action = (r: Rover) => Rover;

type RoverLookUp = {
  [Key in Direction]: Action;
};

export function moveForward(r: Rover): Rover {
  const lookup: RoverLookUp = {
    North: (r) => ({ ...r, y: r.y + 1 }),
    South: (r) => ({ ...r, y: r.y - 1 }),
    East: (r) => ({ ...r, x: r.x + 1 }),
    West: (r) => ({ ...r, x: r.x - 1 }),
  };
  return lookup[r.direction](r);
}

export function moveBackward(r: Rover): Rover {
  const lookup: RoverLookUp = {
    North: (r) => ({ ...r, y: r.y - 1 }),
    South: (r) => ({ ...r, y: r.y + 1 }),
    East: (r) => ({ ...r, x: r.x - 1 }),
    West: (r) => ({ ...r, x: r.x + 1 }),
  };
  return lookup[r.direction](r);
}

export function turnLeft(r: Rover): Rover {
  const lookup: RoverLookUp = {
    North: (r) => ({ ...r, direction: "West" }),
    West: (r) => ({ ...r, direction: "South" }),
    South: (r) => ({ ...r, direction: "East" }),
    East: (r) => ({ ...r, direction: "North" }),
  };
  return lookup[r.direction](r);
}

export function turnRight(r: Rover): Rover {
  const lookup: RoverLookUp = {
    North: (r) => ({ ...r, direction: "East" }),
    East: (r) => ({ ...r, direction: "South" }),
    South: (r) => ({ ...r, direction: "West" }),
    West: (r) => ({ ...r, direction: "North" }),
  };
  return lookup[r.direction](r);
}

export function doNothing<T>(a: T) {
  return a;
}

export function stringToCommand(s: string): Command {
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

export function commandToAction(c: Command): Action {
  const lookup: { [Key in Command]: Action } = {
    MoveForward: moveForward,
    MoveBackward: moveBackward,
    TurnLeft: turnLeft,
    TurnRight: turnRight,
    Quit: doNothing,
    Unknown: doNothing,
  };
  return lookup[c];
}
