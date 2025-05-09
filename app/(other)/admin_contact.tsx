import adminInfo from "@/assets/data/admin.json";
import { AtAvatar, AtButtonBox, AtLoading } from "@/components";
import { CallIcon, MailIcon, MapIcon } from "@/components/ui/icon";
import { space, Styles } from "@/constants";
import { handleCall, handleMap, handleSendMail } from "@/helpers/link";
import { ContextItem } from "@/screens/admin_contact";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface AdminInfo {
  department: string;
  university: string;
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
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <View style={styles.header}>
        <AtAvatar shape="square" size={96} />

        <View style={{ alignItems: "center" }}>
          <Text style={styles.text1}>{adm.department}</Text>
          <Text style={styles.text2}>{adm.university}</Text>
        </View>

        <View style={styles.quickGroupButtons}>
          <AtButtonBox icon={MailIcon} onPress={() => handleSendMail(adm.main.email)} />
          <AtButtonBox icon={CallIcon} onPress={() => handleCall(adm.main.phone)} />
          <AtButtonBox icon={MapIcon} onPress={() => handleMap(adm.main.address)} />
        </View>
      </View>

      <View style={styles.detailContainer}>
        {adm.details.map(({ type, value }, index) => (
          <ContextItem type={type} value={value} key={"contact_" + index} />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Styles.container,
  },

  header: {
    ...Styles.section,
  },

  text1: {
    ...Styles.text,
    textTransform: "uppercase",
    fontWeight: "600",
  },

  text2: {
    ...Styles.text,
  },

  quickGroupButtons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: space(12),
    marginTop: space(20),
  },

  detailContainer: {
    padding: space(12),
    borderRadius: space(20),
  },
});
