import { Icon } from "@/components";
import { AtMenu } from "@/components/ui/menu";
import { IMenuSectionProps } from "@/components/ui/menu/components/menu_section";
import { COLOR, Colors, FontFamily, fontSize, space } from "@/constants";
import { useHideTabBar } from "@/context";
import { logout } from "@/helpers/login";
import { useFocusEffect } from "@react-navigation/native";
import { router } from "expo-router";
import { useMemo } from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const menu = () => {
  return [
    {
      items: [
        {
          title: "Thiết lập MFA",
          expandable: true,
          icon: Icon.FingerprintIcon,
          onPress: () => {},
          // navigation.navigate('VerifyPassword', {
          //   nextScreen: 'VerifyingFingerprintScreen',
          // }),
        },
        {
          title: "Thiết lập vân tay / FaceID",
          expandable: true,
          icon: Icon.ScanFaceIcon,
          onPress: () => {},
          // navigation.navigate('VerifyPassword', {
          //   nextScreen: 'VerifyingFingerprintScreen',
          // }),
        },
        {
          title: "Đăng nhập bằng QR",
          expandable: true,
          icon: Icon.QRIcon,
          onPress: () => {},
          // navigation.navigate('VerifyPassword', {
          //   nextScreen: 'VerifyingFingerprintScreen',
          // }),
        },
      ],
    },
    {
      items: [
        {
          title: "Thông tin quản trị",
          icon: Icon.InfoIcon,
          onPress: () => {
            router.push("/admin_contact");
          },
        },
      ],
    },
    {
      items: [
        {
          title: "Đăng xuất",
          icon: Icon.LoginIcon,
          onPress: () => {
            logout();
          },
        },
      ],
    },
  ] satisfies IMenuSectionProps[];
};

export default function ProfileScreen() {
  const { toggleTabBar } = useHideTabBar();
  const menuSetting = useMemo(() => menu(), []);

  useFocusEffect(() => {
    toggleTabBar(true);
  });

  return (
    <SafeAreaView style={{ backgroundColor: Colors.yellow100, flex: 1 }}>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: space(32),
          gap: space(16),
        }}
      >
        <View
          style={{
            padding: space(2),
            borderColor: Colors.green700,
            borderWidth: space(2),
            borderRadius: space(999),
          }}
        >
          <Image
            source={require("@/assets/images/avatar_nam.png")}
            style={{ borderRadius: space(999), width: 96, height: 96 }}
          />
        </View>

        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text
            style={{
              fontSize: fontSize(28),
              fontFamily: FontFamily.Prompt,
              color: COLOR.text,
            }}
          >
            Đỗ Tuấn Nghĩa
          </Text>
          <Text
            style={{
              fontSize: fontSize(16),
              fontFamily: FontFamily.Prompt,
              color: COLOR.textSub,
            }}
          >
            21020365@vnu.edu.vn
          </Text>
          <View
            style={{
              padding: space(4),
              paddingHorizontal: space(12),
              backgroundColor: Colors.green300,
              borderRadius: space(99),
              marginTop: space(8),
            }}
          >
            <Text
              style={{
                fontSize: fontSize(14),
                fontFamily: FontFamily.Prompt,
                color: COLOR.text,
              }}
            >
              Your profile
            </Text>
          </View>
        </View>
      </View>

      <AtMenu menu={menuSetting} />
    </SafeAreaView>
  );
}
