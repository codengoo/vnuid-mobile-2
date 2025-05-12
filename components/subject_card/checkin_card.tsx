import { COLOR, Colors, space, Styles } from "@/constants";
import { ISubject } from "@/types";
import { formatTime } from "@/utils";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "../ui";

interface ICheckinCardProps {
  isShort?: boolean;
  subject: ISubject;
}
export function CheckinCard({ isShort, subject }: ICheckinCardProps) {
  return (
    <>
      {subject.session.map((session) => (
        <View style={styles.card_content} key={session.id}>
          <View style={styles.card_header}>
            <View>
              <Text style={styles.card_name}>{session.name}</Text>
              {!isShort && (
                <Text style={styles.card_sub_name}>
                  {subject.code} - {subject.name}
                </Text>
              )}
            </View>
            <TouchableOpacity>
              <Icon.HeartIcon stroke={2} size={28} color={COLOR.text} />
            </TouchableOpacity>
          </View>

          <View style={styles.card_details}>
            <Text style={styles.card_detail_text}>{formatTime(session.start)}</Text>
            <Text style={styles.card_detail_text}>{subject.address}</Text>
          </View>
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  card_name: {
    ...Styles.sectionText,
    textAlign: "left",
    fontWeight: "500",
  },
  card_sub_name: {
    ...Styles.text,
  },
  card_header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card_details: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: space(8),
  },
  card_detail_text: {
    ...Styles.text,
  },

  card_content: {
    backgroundColor: Colors.yellow100,
    borderRadius: space(12),
    padding: space(16),
    borderWidth: space(2),
    borderColor: COLOR.borderInput,
    borderStyle: "dashed",
  },
});
