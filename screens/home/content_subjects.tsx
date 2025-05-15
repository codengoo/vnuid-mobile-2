import { AtTab, SubjectCard } from "@/components";
import { COLOR, Colors, FontFamily, fontSize, space, Styles } from "@/constants";
import { fetchSubjects } from "@/helpers/subject";
import { ICourse } from "@/types";
import { addDays, startOfWeek } from "date-fns";
import { router } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type ITabContentType = "today" | "week";
export function HomeContentSubject() {
  const gotoSubjectList = () => router.push("/subject/subject_list");
  const [isLoading, setLoading] = useState(false);
  const [subjects, setSubjects] = useState<ICourse[]>([]);

  const tabMenu = useMemo(() => {
    return [
      {
        label: "Hôm nay",
        value: "today",
      },
      {
        label: "Tuần này",
        value: "week",
      },
    ] satisfies { label: string; value: ITabContentType }[];
  }, []);
  const preload = async (filter: ITabContentType = "today") => {
    try {
      setLoading(true);
      const data =
        filter === "today"
          ? await fetchSubjects(new Date(), new Date())
          : await fetchSubjects(
              startOfWeek(new Date(), { weekStartsOn: 1 }),
              addDays(startOfWeek(new Date(), { weekStartsOn: 1 }), 6)
            );
      if (data) setSubjects(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const handleOnChangeTab = (value: ITabContentType) => {
    preload(value);
  };

  useEffect(() => {
    preload();
  }, []);

  return (
    <View style={styles.section}>
      <View style={styles.section_header}>
        <Text style={styles.section_title}>Upcoming</Text>
        <TouchableOpacity onPress={gotoSubjectList}>
          <Text style={Styles.text}>See all</Text>
        </TouchableOpacity>
      </View>

      <AtTab menu={tabMenu} onChange={handleOnChangeTab} />

      {subjects.map((subject, index) => {
        return (
          <View key={subject.id}>
            {index === 0 && <SubjectCard isHighlighted course={subject} />}
            {index !== 0 && <SubjectCard course={subject} />}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    gap: space(16),
    marginTop: space(28),
  },
  section_header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  section_title: {
    fontFamily: FontFamily.Prompt,
    fontSize: fontSize(28),
    color: COLOR.text,
    fontWeight: "600",
  },

  chip_button: {
    backgroundColor: Colors.white,
    borderRadius: space(99),
    padding: space(8),
    paddingHorizontal: space(20),
  },

  chip_button_active: {
    backgroundColor: Colors.yellow500,
  },

  chip_wrapper: {
    gap: space(12),
  },

  text_chip_active: {
    color: COLOR.text,
  },
});
