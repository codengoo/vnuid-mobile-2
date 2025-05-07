import { useHideTabBar } from "@/context";
import { getFace } from "@/helpers/checkin";
import { useFocusEffect } from "@react-navigation/native";
import { router } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

export default function CheckinScreen() {
  const { toggleTabBar } = useHideTabBar();
  const [face, setFace] = useState<number[]>([]);
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
    <View></View>
    // <CameraScanFace>
    //   <View
    //     style={{
    //       flex: 1,
    //       flexDirection: 'column',
    //       justifyContent: 'space-between',
    //       padding: space(20),
    //     }}>
    //     <View
    //       style={{
    //         backgroundColor: Colors.white,
    //         padding: space(20),
    //         borderRadius: space(20),
    //         borderWidth: space(2),
    //         borderColor: COLOR.borderInput,
    //       }}>
    //       <Text
    //         style={{
    //           fontSize: space(20),
    //           fontFamily: FontFamily.Prompt,
    //           color: COLOR.text,
    //         }}>
    //         Checkin 7:00
    //       </Text>
    //       <Text
    //         style={{
    //           fontSize: space(14),
    //           fontFamily: FontFamily.Prompt,
    //           color: COLOR.text,
    //         }}>
    //         INT2203
    //       </Text>
    //     </View>

    //     <View
    //       style={{
    //         backgroundColor: Colors.white,
    //         padding: space(20),
    //         borderRadius: space(20),
    //       }}>
    //       <Text>Checking location</Text>
    //     </View>
    //   </View>
    // </CameraScanFace>
  );
}
