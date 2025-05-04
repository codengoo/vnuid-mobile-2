import "@/locales";
import { Stack } from "expo-router";
import "react-native-reanimated";
export default function RootLayout() {
  return (
    <Stack
      screenOptions={({ navigation }) => ({
        headerShown: false,
        headerTransparent: true,

        // headerBackground: () => null,
        // headerStyle: { backgroundColor: Colors.yellow100 },
        // headerShown: true,
        // headerTitleAlign: "center",
        // headerTitleStyle: { fontFamily: FontFamily.Prompt },
        // headerLeft: () => (
        //   <TouchableOpacity onPress={navigation.goBack}>
        //     <Icon.ArrowLeftIcon />
        //   </TouchableOpacity>
        // ),
      })}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
