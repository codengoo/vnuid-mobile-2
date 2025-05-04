import { Icon } from "@/components";
import { Color, FontFamily } from "@/constants";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { TouchableOpacity } from "react-native";
import "react-native-reanimated";

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Stack
      initialRouteName="onboarding"
      screenOptions={({ navigation }) => ({
        headerBackground: () => null,
        headerStyle: { backgroundColor: Color.yellow100 },
        headerShown: true,
        headerTitleAlign: "center",
        headerTitleStyle: { fontFamily: FontFamily.Prompt.normal.semiBold },
        headerLeft: () => (
          <TouchableOpacity onPress={navigation.goBack}>
            <Icon.ArrowLeftIcon />
          </TouchableOpacity>
        ),
      })}
    >
      <Stack.Screen name="onboarding" />
      {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
    </Stack>
  );
}
