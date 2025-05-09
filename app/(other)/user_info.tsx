import userInfo from "@/assets/data/user.json";
import { AtAvatar, AtLoading } from "@/components";
import { Colors, space, Styles } from "@/constants";
import { ContextItem } from "@/screens/admin_contact";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
interface UserInfo {
  name: string;
  official_class: string;
  department: string;
  email: string;
  phone: string;
  address: string;
}

export default function AdminContact() {
  const [usr, setUsr] = useState<UserInfo | null>(null);

  useEffect(() => {
    // GetCache: TODO
    setUsr(userInfo as UserInfo);
  }, []);

  if (!usr) {
    return <AtLoading />;
  }

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <View style={styles.header}>
        <AtAvatar shape="circle" size={96} />

        <View style={{ alignItems: "center", gap: space(4) }}>
          <Text style={styles.text1}>{usr.name}</Text>
          <Text style={styles.text2}>{usr.department}</Text>
          <Text style={styles.text3}>{usr.official_class}</Text>
        </View>
      </View>

      <View style={styles.detailContainer}>
        <ContextItem type={"email"} value={usr.email} key={"contact_" + usr.email} />
        <ContextItem type={"phone"} value={usr.phone} key={"contact_" + usr.phone} />
        <ContextItem type={"address"} value={usr.address} key={"contact_" + usr.address} />
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

  text3: {
    ...Styles.text,
    backgroundColor: Colors.green300,
    paddingHorizontal: space(8),
    borderRadius: space(99),
  },

  detailContainer: {
    padding: space(12),
    borderRadius: space(20),
  },
});
