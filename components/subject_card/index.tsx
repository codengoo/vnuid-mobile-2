import { COLOR, Colors, fontSize, space, Styles } from "@/constants";
import { ISubject } from "@/types";
import { Image, StyleSheet, Text, View } from "react-native";
import { CheckinCard } from "./checkin_card";

interface ISubjectCardProps {
  subject: ISubject;
  isHighlighted?: boolean;
}
export function SubjectCard({ isHighlighted, subject }: ISubjectCardProps) {
  return (
    <View style={styles.card_container}>
      {isHighlighted && (
        <Image
          source={require("@/assets/images/illus_tech.png")}
          style={{ objectFit: "scale-down", width: "100%", height: 200, marginBottom: space(16) }}
        />
      )}
      {!isHighlighted && (
        <>
          <Text style={styles.subjectTitle}>{subject.code} - {subject.name}</Text>
        </>
      )}

      <CheckinCard isShort={!isHighlighted} subject={subject}/>
    </View>
  );
}

const styles = StyleSheet.create({
  card_container: {
    backgroundColor: Colors.yellow400,
    borderRadius: space(16),
    padding: space(16),
    borderStyle: "solid",
    borderColor: COLOR.borderInput,
    borderWidth: space(2),
    gap: space(8),
  },

  subjectTitle: {
    ...Styles.text,
    fontSize: fontSize(20),
    fontWeight: "600",
  },
});
