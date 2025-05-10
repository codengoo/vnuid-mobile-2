import { random } from "@/utils";

export type IDirection = "left" | "right" | "up" | "down" | "forward";

interface IExpectCheck {
  directions: IDirection[];
  time: number;
}

interface IBound {
  bottom: number;
  left: number;
  right: number;
  top: number;
}

interface IFace {
  bound: IBound;
  pitch: number;
  roll: number;
  yaw: number;
}

export interface ICameraFaceResult {
  emb: number[];
  face: {
    bound: IBound;
    pitch: number;
    roll: number;
    yaw: number;
  };
  score: number;
}

export function checker(input: ICameraFaceResult, expected: IExpectCheck) {}

export function checkDirection(input: IFace, direction: IDirection) {
  const { pitch, roll, yaw } = input;
  const y: IDirection = pitch > 15 ? "up" : pitch < -15 ? "down" : "forward";
  const x: IDirection = yaw > 15 ? "left" : yaw < -15 ? "right" : "forward";

  if (direction === "forward") return x == "forward" && y == "forward";
  if (direction === "left") return x == "left" && y == "forward";
  if (direction === "right") return x == "right" && y == "forward";
  if (direction === "up") return x == "forward" && y == "up";
  if (direction === "down") return x == "forward" && y == "down";

  console.log(x, y);
  return direction === x || direction === y;
}

export function generateExpectedValue(num: number = 3): IExpectCheck {
  const direction = ["left", "right", "up", "down", "forward"] as const;

  const dirs: IDirection[] = [];
  for (let i = 0; i < num; i++) {
    let dir: IDirection;
    do {
      dir = direction[random(0, direction.length)];
      if (i == 0 || dirs[i - 1] != dir) break;
    } while (true);

    dirs.push(dir);
  }

  return {
    directions: dirs,
    time: 2000,
  };
}
