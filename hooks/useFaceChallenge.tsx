import {
  checkDirection,
  generateExpectedValue,
  ICameraFaceResult,
  IDirection,
} from "@/helpers/checkin";
import { useMemo, useState } from "react";
import { useSharedValue } from "react-native-worklets-core";

type IStage = "face_challenge" | "done" | "failed";
export function useFaceChallenge() {
  const expected = useMemo(() => generateExpectedValue(), []);
  const step = useSharedValue(0);
  const errorCount = useSharedValue(0);
  const [dir, setDir] = useState<IDirection>(expected.directions[0]);
  const [stage, setStage] = useState<IStage>("face_challenge");

  const handleFace = (result: ICameraFaceResult) => {
    if (!result) return;

    const num = expected.directions.length;
    if (step.value < num) {
      const isDirectionOk = checkDirection(result.face, expected.directions[step.value]);
      console.log(isDirectionOk, step.value, expected.directions);

      if (isDirectionOk) {
        setDir(expected.directions[step.value + 1]);
        step.value++;
      }
    } else {
      setStage("done");
    }
  };

  const handleFaceMatch = (result: ICameraFaceResult) => {
    if (!result) return;
    if (result.score < 0.55) {
      if (errorCount.value <= 5) errorCount.value++;
      else setStage("failed");
      return;
    }

    const num = expected.directions.length;
    if (step.value < num) {
      const isDirectionOk = checkDirection(result.face, expected.directions[step.value]);
      console.log(isDirectionOk, step.value, expected.directions);

      if (isDirectionOk) {
        setDir(expected.directions[step.value + 1]);
        step.value++;
      }
    } else {
      setStage("done");
    }
  };

  const reset = () => {
    // expected = generateExpectedValue();
    step.value = 0;
    setDir(expected.directions[0]);
    setStage("face_challenge");
  };

  return { step, dir, stage, handleFace, handleFaceMatch, reset };
}
