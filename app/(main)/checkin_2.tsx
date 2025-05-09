import { CameraScanFace } from "@/components";
import { Colors, FontFamily, space } from "@/constants";
import { useHideTabBar } from "@/context";
import { getFace } from "@/helpers/checkin";
import { generateExpectedValue } from "@/helpers/checkin/checker";
import { useFocusEffect } from "@react-navigation/native";
import { router } from "expo-router";
import { useMemo, useState } from "react";
import { Text, View } from "react-native";

export default function CheckinScreen() {
  const { toggleTabBar } = useHideTabBar();
  const [face, setFace] = useState<number[]>([]);
  const expected = useMemo(() => generateExpectedValue(), []);

  const setupFace = async () => {
    const face = await getFace();
    if (face.length === 0) {
      router.navigate("/first_login");
    } else {
      setFace(face);
    }
  };

  useFocusEffect(() => {
    setupFace();
    toggleTabBar(false);
  });

  return (
    <CameraScanFace onResult={() => {}}>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          padding: space(20),
          alignItems: "center"
        }}
      >
        <View
          style={{ backgroundColor: Colors.green200, padding: space(20), borderRadius: space(12) }}
        >
          <Text
            style={{
              fontFamily: FontFamily.Prompt,
              fontWeight: "500",
              fontSize: space(20),
              color: Colors.green700,
            }}
          >
            Điểm danh thành công
          </Text>
        </View>
      </View>
    </CameraScanFace>
  );
}
