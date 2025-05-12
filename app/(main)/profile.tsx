import { AtAvatar, AtLoading, Icon } from "@/components";
import { AtChip } from "@/components/ui/chip";
import { AtMenu } from "@/components/ui/menu";
import { IMenuSectionProps } from "@/components/ui/menu/components/menu_section";
import { Colors, fontSize, space, Styles } from "@/constants";
import { useHideTabBar, useUser } from "@/context";
import { logout } from "@/helpers/login";
import { useFocusEffect } from "@react-navigation/native";
import { router } from "expo-router";
import { useMemo } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

const menu = () => {
  return [
    {
      items: [
        {
          title: "Thiết lập MFA",
          expandable: true,
          icon: Icon.FingerprintIcon,
          onPress: () => router.navigate("/setup/verify_password?nextScreen=/setup/verify_mfa"),
        },
        {
          title: "Thiết lập vân tay / FaceID",
          expandable: true,
          icon: Icon.ScanFaceIcon,
          onPress: () =>
            router.navigate("/setup/verify_password?nextScreen=/setup/verify_fingerprint"),
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
          title: "Ngôn ngữ",
          expandable: true,
          icon: Icon.EarthIcon,
          onPress: () => router.push("/setup/language"),
        },
        {
          title: "Lịch sử điểm danh",
          expandable: true,
          icon: Icon.CircleCheckIcon,
          onPress: () => router.push("/subject/checkin_history"),
        },
        {
          title: "Danh sách môn học",
          expandable: true,
          icon: Icon.BackpackIcon,
          onPress: () => router.push("/subject/subject_list"),
        },
        {
          title: "Thông tin quản trị",
          icon: Icon.InfoIcon,
          onPress: () => router.push("/admin_contact"),
        },
      ],
    },
    {
      items: [
        {
          title: "Đăng xuất",
          icon: Icon.LoginIcon,
          onPress: () => logout(),
        },
      ],
    },
  ] satisfies IMenuSectionProps[];
};

export default function ProfileScreen() {
  const { toggleTabBar, scrollHandler } = useHideTabBar();
  const { user } = useUser();
  const menuSetting = useMemo(() => menu(), []);
  const navigateToUserProfile = () => router.navigate("/user_info");
  useFocusEffect(() => {
    toggleTabBar(true);
  });

  if (!user) return <AtLoading />;

  return (
    <SafeAreaView style={{ backgroundColor: Colors.yellow100, flex: 1 }}>
      <StatusBar barStyle={"dark-content"} />
      <Animated.ScrollView
        // style={styles.body}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        // contentContainerStyle={{ flexDirection: "row", padding: space(20) }}
      >
        <View style={styles.header}>
          <AtAvatar size={96} shape="circle" isPadding />
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Text style={styles.nameText}>{user.name}</Text>
            <Text style={Styles.subText}>{user.email}</Text>
            <AtChip label="Your profile" onPress={navigateToUserProfile} />
          </View>
        </View>
        <AtMenu menu={menuSetting} />
        <View style={{ height: space(100) }}></View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  nameText: {
    ...Styles.text,
    fontSize: fontSize(28),
  },

  header: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: space(32),
    gap: space(16),
  },
});
