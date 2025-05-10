import {
  checkDirection,
  generateExpectedValue,
  ICameraFaceResult,
  IDirection,
} from "@/helpers/checkin";
import { useMemo, useState } from "react";
import { runOnJS, useDerivedValue } from "react-native-reanimated";
import { useSharedValue } from "react-native-worklets-core";

type IStage = "face_challenge" | "done";
export function useFaceChallenge() {
  const expected = useMemo(() => generateExpectedValue(), []);
  const step = useSharedValue(0);
  const [dir, setDir] = useState<IDirection>(expected.directions[0]);
  const [stage, setStage] = useState<IStage>("face_challenge");

  const handleFace = (result: ICameraFaceResult) => {
    if (!result) return;
    const num = expected.directions.length;

    if (step.value < num) {
      const isDirectionOk = checkDirection(result.face, expected.directions[step.value]);
      if (isDirectionOk) step.value++;
    } else {
      setStage("done");
    }
  };

  useDerivedValue(() => {
    const num = expected.directions.length;
    if (step.value < num) runOnJS(setDir)(expected.directions[step.value]);
  }, [step]);

  return { step, dir, stage, handleFace };
}
