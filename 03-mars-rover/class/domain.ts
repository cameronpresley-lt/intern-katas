export type Direction = "North" | "South" | "East" | "West";
export type Command =
  | "MoveForward"
  | "MoveBackward"
  | "TurnLeft"
  | "TurnRight"
  | "Quit"
  | "Unknown";

export interface IRover {
  moveForward(): void;
  moveBackward(): void;
  turnLeft(): void;
  turnRight(): void;
  get x(): number;
  get y(): number;
  get direction(): Direction;
}

export class Rover implements IRover {
  constructor(
    private _x: number = 0,
    private _y: number = 0,
    private _direction: Direction = "North"
  ) {}

  moveForward(): void {
    switch (this.direction) {
      case "North":
        this._y++;
        break;
      case "South":
        this._y--;
        break;
      case "East":
        this._x++;
        break;
      case "West":
        this._x--;
        break;
    }
  }
  moveBackward(): void {
    switch (this.direction) {
      case "North":
        this._y--;
        break;
      case "South":
        this._y++;
        break;
      case "East":
        this._x--;
        break;
      case "West":
        this._x++;
        break;
    }
  }
  turnLeft(): void {
    switch (this.direction) {
      case "North":
        this._direction = "West";
        break;
      case "South":
        this._direction = "East";
        break;
      case "East":
        this._direction = "North";
        break;
      case "West":
        this._direction = "South";
        break;
    }
  }
  turnRight(): void {
    switch (this.direction) {
      case "North":
        this._direction = "East";
        break;
      case "South":
        this._direction = "West";
        break;
      case "East":
        this._direction = "South";
        break;
      case "West":
        this._direction = "North";
        break;
    }
  }
  get x(): number {
    return this._x;
  }
  get y(): number {
    return this._y;
  }
  get direction(): Direction {
    return this._direction;
  }
}

export function processCommand(c: Command, r: IRover): void {
  switch (c) {
    case "MoveForward":
      console.log("Rover moving forward...")
      r.moveForward();
      break;
    case "MoveBackward":
      r.moveBackward();
      break;
    case "TurnLeft":
      r.turnLeft();
      break;
    case "TurnRight":
      r.turnRight();
      break;
    case "Quit":
      break;
    case "Unknown":
      break;
  }
}
