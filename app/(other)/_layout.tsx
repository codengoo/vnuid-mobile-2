import { Icon } from "@/components";
import { Colors, FontFamily } from "@/constants";
import { router, Stack } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function OtherLayout() {
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
      <Stack.Screen name="admin_contact" options={{ headerTitle: "Liên hệ" }} />
      <Stack.Screen
        name="first_login"
        options={{
          headerTitle: "",
          headerBackVisible: false,
          headerLeft: () => null,
          headerRight: () => (
            <TouchableOpacity onPress={() => router.replace("/home")}>
              <Icon.CloseIcon />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
}
