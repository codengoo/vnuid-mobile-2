import { useHideTabBar } from "@/context";
import { useFocusEffect } from "@react-navigation/native";
import { router } from "expo-router";
import { View } from "react-native";

export default function CheckinScreen() {
  const { toggleTabBar } = useHideTabBar();

  useFocusEffect(() => {
    toggleTabBar(false);

    router.navigate("/first_login");
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
