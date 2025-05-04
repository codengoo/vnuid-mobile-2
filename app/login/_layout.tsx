import { Icon } from "@/components";
import { Colors, FontFamily } from "@/constants";
import { Stack } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function LoginLayout() {
  return (
    <Stack
      screenOptions={({ navigation }) => ({
        headerBackground: () => null,
        headerStyle: { backgroundColor: Colors.yellow100 },
        headerShown: true,
        headerTitleAlign: "center",
        headerTitleStyle: { fontFamily: FontFamily.Prompt },
        headerLeft: () => (
          <TouchableOpacity onPress={navigation.goBack}>
            <Icon.ArrowLeftIcon />
          </TouchableOpacity>
        ),
      })}
    >
      <Stack.Screen
        name="index"
        options={{ headerShown: false, headerTransparent: true }}
      />
      {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
    </Stack>
  );
}
