import { COLOR, Colors, fontSize, space, Styles } from "@/constants";
import { ICourse } from "@/types";
import { Image, StyleSheet, Text, View } from "react-native";
import { SessionCard } from "./checkin_card";

interface ISubjectCardProps {
  course: ICourse;
  isHighlighted?: boolean;
  includeSession?: boolean;
}
export function SubjectCard({ isHighlighted, course, includeSession = true }: ISubjectCardProps) {
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
          <Text style={styles.subjectTitle}>
            {course.code} - {course.name}
          </Text>
        </>
      )}

      {includeSession && course.session && (
        <SessionCard isShort={!isHighlighted} course={course} />
      )}
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
    fontWeight: "600"
  },
});
