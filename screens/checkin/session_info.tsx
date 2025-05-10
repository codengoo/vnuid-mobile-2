import { AtChip } from "@/components";
import { COLOR, Colors, fontSize, space, Styles } from "@/constants";
import { ISession } from "@/types";
import { StyleSheet, Text, View } from "react-native";

interface ISessionInfoProps {
  session: ISession;
}

export function SessionInfo({ session }: ISessionInfoProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{session.name}</Text>
      <View style={styles.contentInfo}>
        <AtChip label={session.subject.code} />
        <Text style={styles.info}>{session.subject.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: space(20),
    borderRadius: space(12),
    borderWidth: space(2),
    borderColor: COLOR.borderInput,
    backgroundColor: Colors.yellow200,
    gap: space(8),
  },
  title: {
    ...Styles.text,
    fontSize: fontSize(20),
    fontWeight: "600",
  },

  info: {
    ...Styles.text,
  },

  contentInfo: {
    flexDirection: "row",
    gap: space(8),
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
