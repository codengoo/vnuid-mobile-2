import { CameraScanFace } from "@/components";
import { space } from "@/constants";
import { checkDirection, ICameraFaceResult, registerFace } from "@/helpers/checkin";
import { useFaceChallenge } from "@/hooks";
import { ActionFace } from "@/screens/checkin";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Toast from "react-native-toast-message";
type IStage = "face_challenge" | "face_register" | "done";
export default function RegisterFaceScreen() {
  const { dir, handleFace, stage, reset } = useFaceChallenge();
  const counter = useSharedValue(0);
  const [face, setFace] = useState<number[]>([]);
  const [isLoading, setLoading] = useState(false);

  const handleExtractFace = (result: ICameraFaceResult) => {
    if (!result) return;

    const times = 3;
    if (counter.value <= times) {
      const isDirectionOk = checkDirection(result.face, "forward");
      if (isDirectionOk) counter.value++;
      else counter.value = 0;
    } else {
      setFace(result.emb);
    }
  };

  const handleRegister = async () => {
    try {
      setLoading(true);
      registerFace(face);

      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Register face successfully",
        autoHide: true,
      });
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Failed",
        text2: "Please try again",
        autoHide: true,
      });
    } finally {
      setLoading(false);
      router.replace("/home");
    }
  };

  useEffect(() => {
    if (face.length > 0 && !isLoading) handleRegister();
  }, [face.length]);

  if (stage === "done")
    return (
      <CameraScanFace onResult={isLoading ? undefined : handleExtractFace}>
        <View style={styles.container}>
          <ActionFace dir={dir} stage={"face_register"} />
        </View>
      </CameraScanFace>
    );

  if (stage === "face_challenge")
    return (
      <CameraScanFace onResult={isLoading ? undefined : handleFace}>
        <View style={styles.container}>
          <ActionFace dir={dir} stage={"face_challenge"} />
        </View>
      </CameraScanFace>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: space(20),
  },
});
