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
        headerTitleStyle: { fontFamily: FontFamily.Prompt, fontWeight: 500 },
        headerLeft: () => (
          <TouchableOpacity onPress={navigation.goBack}>
            <Icon.ArrowLeftIcon />
          </TouchableOpacity>
        ),
      })}
    >
      <Stack.Screen name="change_ip" options={{ headerTitle: "Thay đổi IP" }} />
      <Stack.Screen name="admin_contact" options={{ headerTitle: "Liên hệ" }} />
      <Stack.Screen name="user_info" options={{ headerTitle: "Thông tin cá nhân" }} />
      <Stack.Screen name="search" options={{ headerTitle: "Thống tin môn học" }} />

      <Stack.Screen name="setup/language" options={{ headerTitle: "Ngôn ngữ" }} />
      <Stack.Screen name="setup/verify_password" options={{ headerTitle: "Xác thực" }} />
      <Stack.Screen name="setup/verify_fingerprint" options={{ headerTitle: "Xác thực vân tây" }} />
      <Stack.Screen name="setup/verify_mfa" options={{ headerTitle: "Xác thực MFA" }} />

      <Stack.Screen name="subject/checkin_history" options={{ headerTitle: "Lịch sử điểm danh" }} />
      <Stack.Screen name="subject/subject_list" options={{ headerTitle: "Danh sách môn học" }} />
      <Stack.Screen name="subject/student_list" options={{ headerTitle: "Danh sách sinh viên" }} />
      <Stack.Screen
        name="subject/index"
        options={{ headerTitle: "", headerShown: false, headerTransparent: true }}
      />
      <Stack.Screen
        name="register_face"
        options={{ headerTitle: "", headerShown: false, headerTransparent: true }}
      />
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
