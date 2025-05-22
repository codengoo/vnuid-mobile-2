import { AtChip } from "@/components";
import { fontSize, space, Styles } from "@/constants";
import { getCheckinHistory } from "@/helpers/checkin";
import { ICheckin } from "@/types";
import { formatDateTime } from "@/utils";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CheckinStoryScreen() {
  const [checkins, setCheckins] = useState<ICheckin[]>([]);
  const preload = async () => {
    try {
      const data = await getCheckinHistory();
      if (data) setCheckins(data);
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      preload();
    }, [])
  );

  return (
    <View style={styles.container}>
      {checkins.length > 0
        ? checkins.map((item) => (
            <View style={styles.card} key={item.id}>
              <Text style={styles.cardText}>{item.course.name}</Text>
              <View style={{ gap: space(8), flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.cardText2}>{item.session.name}</Text>
                <AtChip label={formatDateTime(item.time) || ""} />
              </View>
            </View>
          ))
        : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Styles.container,
    gap: space(8),
  },

  card: {
    ...Styles.section,
    padding: space(8),
    paddingHorizontal: space(12),
    alignItems: "flex-start",
    borderRadius: space(14),
    gap: space(8),
  },

  cardText: {
    ...Styles.sectionText,
    fontSize: fontSize(20),
  },

  cardText2: {
    ...Styles.text,
    fontSize: fontSize(16),
    fontWeight: "500",
  },
});
