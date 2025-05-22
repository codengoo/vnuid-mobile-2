import { AtAvatar, AtLoading } from "@/components";
import { Colors, space, Styles } from "@/constants";
import { useUser } from "@/context";
import { ContextItem } from "@/screens/admin_contact";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AdminContact() {
  const { user } = useUser();

  if (!user) return <AtLoading />;

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <View style={styles.header}>
        <AtAvatar shape="circle" size={96} />

        <View style={{ alignItems: "center", gap: space(4) }}>
          <Text style={styles.text1}>{user.name}</Text>
          <Text style={styles.text2}>{user.department}</Text>
          <Text style={styles.text3}>{user.official_class}</Text>
        </View>
      </View>

      <View style={styles.detailContainer}>
        <ContextItem type={"email"} value={user.email} key={"contact_" + user.email} />
        <ContextItem type={"phone"} value={user.phone} key={"contact_" + user.phone} />
        <ContextItem type={"address"} value={user.address} key={"contact_" + user.address} />
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
