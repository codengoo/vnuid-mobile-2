import adminInfo from "@/assets/data/admin.json";
import { AtAvatar, AtButtonBox, AtLoading } from "@/components";
import { CallIcon, MailIcon, MapIcon } from "@/components/ui/icon";
import { Colors, FontFamily, fontSize, space } from "@/constants";
import { handleCall, handleMap, handleSendMail } from "@/helpers/link";
import { ContextItem } from "@/screens/admin_contact";
import { useEffect, useState } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface AdminInfo {
  main: {
    phone: string;
    email: string;
    address: string;
  };
  details: {
    type: "phone" | "email" | "address";
    value: string;
  }[];
}

export default function AdminContact() {
  const [adm, setAdm] = useState<AdminInfo | null>(null);

  useEffect(() => {
    // GetCache: TODO
    setAdm(adminInfo as AdminInfo);
  }, []);

  if (!adm) {
    return <AtLoading />;
  }

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <StatusBar hidden />

      <View style={styles.header}>
        <AtAvatar shape="square" size={96} />

        <View style={{ alignItems: "center" }}>
          <Text style={styles.text1}>PHONG CONG TAC SINH VIEN</Text>
          <Text style={styles.text2}>Dai hoc Quoc gia Ha Noi</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            gap: space(12),
            marginTop: space(20),
          }}
        >
          <AtButtonBox
            icon={MailIcon}
            onPress={() => handleSendMail(adm.main.email)}
          />
          <AtButtonBox
            icon={CallIcon}
            onPress={() => handleCall(adm.main.phone)}
          />
          <AtButtonBox
            icon={MapIcon}
            onPress={() => handleMap(adm.main.address)}
          />
        </View>
      </View>

      <View
        style={{
          backgroundColor: Colors.yellow300,
          padding: space(12),
          borderRadius: space(20),
          borderWidth: space(2),
          borderColor: Colors.black500,
        }}
      >
        {adm.details.map(({ type, value }, index) => (
          <ContextItem type={type} value={value} key={"contact_" + index} />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: space(20),
    justifyContent: "flex-start",
    gap: space(36),
    backgroundColor: Colors.yellow100,
  },

  avatar: {
    width: 96,
    height: 96,
    borderRadius: space(24),
  },

  header: {
    backgroundColor: Colors.yellow300,
    borderRadius: space(20),
    padding: space(20),
    borderColor: Colors.black700,
    borderWidth: space(2),
    flexDirection: "column",
    alignItems: "center",
    gap: space(12),
  },

  text1: {
    fontFamily: FontFamily.Prompt,
    fontSize: fontSize(18),
  },

  text2: {
    fontFamily: FontFamily.Prompt,
    fontSize: fontSize(16),
  },
});
