import { Colors, space, Styles } from "@/constants";
import { IDirection } from "@/helpers/checkin";
import { StyleSheet, Text, View } from "react-native";

interface IActionFaceProps {
  stage: "done" | "face_challenge" | "face_register" | "failed";
  dir: IDirection;
}

function ActionDone() {
  return (
    <View style={[styles.challenge, { backgroundColor: Colors.green200 }]}>
      <Text style={styles.textDone}>Xong rồi 😉</Text>
    </View>
  );
}

function ActionDirection({ dir }: { dir: IDirection }) {
  return (
    <View style={[styles.challenge]}>
      <View style={styles.wrapper}>
        <Text style={styles.helpText}>Hướng mặt</Text>
        <Text style={styles.helpTextHighlight}>{dir}</Text>
      </View>
    </View>
  );
}

function ActionCustom({ label }: { label: string }) {
  return (
    <View style={[styles.challenge]}>
      <Text style={styles.helpText}>{label}</Text>
    </View>
  );
}

export function ActionFace({ dir, stage }: IActionFaceProps) {
  return (
    <View style={styles.container}>
      {stage === "done" && <ActionDone />}
      {stage === "face_challenge" && <ActionDirection dir={dir} />}
      {stage === "face_register" && <ActionCustom label="Giữ khuôn mặt nhìn thẳng" />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  challenge: {
    marginTop: space(20),
    paddingHorizontal: space(16),
    paddingVertical: space(8),
    borderRadius: space(99),
    backgroundColor: "white",
    borderWidth: space(1),
    borderColor: Colors.black500,
  },

  helpText: {
    ...Styles.text,
    fontSize: space(14),
  },

  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: space(8),
  },

  helpTextHighlight: {
    ...Styles.text,
    fontWeight: "500",
    backgroundColor: Colors.yellow200,
    paddingHorizontal: space(8),
    borderRadius: space(99),
  },

  textDone: {
    ...Styles.text,
    color: Colors.green700,
    fontWeight: "500",
  },
});
