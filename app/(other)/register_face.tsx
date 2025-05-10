import { CameraScanFace } from "@/components";
import { Colors, space } from "@/constants";
import { registerFace } from "@/helpers/checkin";
import {
  checkDirection,
  generateExpectedValue,
  ICameraFaceResult,
  IDirection,
} from "@/helpers/checkin/checker";
import { router } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import { Text, View } from "react-native";
import { runOnJS, useDerivedValue, useSharedValue } from "react-native-reanimated";
import Toast from "react-native-toast-message";
type IStage = "face_challenge" | "face_register" | "done";
export default function CheckinScreen() {
  const expected = useMemo(() => generateExpectedValue(), []);
  const step = useSharedValue(0);
  const counter = useSharedValue(0);
  const [face, setFace] = useState<number[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [dir, setDir] = useState<IDirection>(expected.directions[0]);
  const [stage, setStage] = useState<IStage>("face_challenge");
  const handleFace = (result: ICameraFaceResult) => {
    if (!result) return;
    const num = expected.directions.length;
    const times = 3;

    if (step.value < num) {
      const isDirectionOk = checkDirection(result.face, expected.directions[step.value]);
      if (isDirectionOk) step.value++;
    } else if (counter.value <= times) {
      setStage("face_register");
      const isDirectionOk = checkDirection(result.face, "forward");
      if (isDirectionOk) counter.value++;
      else counter.value = 0;

      if (counter.value === times) {
        setStage("done");
        setFace(result.emb);
      }
    }
  };

  useDerivedValue(() => {
    const num = expected.directions.length;
    if (step.value < num) runOnJS(setDir)(expected.directions[step.value]);
  }, [step]);

  const handleRegister = async () => {
    setLoading(true);
    const isOk = await registerFace(face);
    if (isOk)
      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Register face successfully",
        autoHide: true,
      });
    else {
      Toast.show({
        type: "error",
        text1: "Failed",
        text2: "Please try again",
        autoHide: true,
      });
    }
    router.replace("/home"); // checkin
    setLoading(false);
  };

  useEffect(() => {
    if (face.length > 0 && !isLoading) handleRegister();
  }, [face.length]);

  return (
    <CameraScanFace onResult={isLoading ? () => {} : handleFace}>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <View
          style={{
            backgroundColor: "white",
            padding: space(12),
            borderRadius: space(20),
            width: "75%",
          }}
        >
          <View
            style={{
              borderRadius: space(8),
              borderWidth: space(2),
              borderStyle: "dashed",
              padding: space(20),
              borderColor: Colors.green700,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {stage === "face_challenge" && (
              <>
                <Text>Điều chỉnh khuôn mặt theo hướng</Text>
                <Text>{dir}</Text>
              </>
            )}

            {stage === "face_register" && (
              <>
                <Text>Giữ khuôn mặt nhìn thẳng</Text>
              </>
            )}

            {stage === "done" && (
              <>
                <Text>Đang cập nhật</Text>
              </>
            )}
          </View>
        </View>
      </View>
    </CameraScanFace>
  );
}
