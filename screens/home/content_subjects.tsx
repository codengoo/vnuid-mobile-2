import { AtTab, SubjectCard } from "@/components";
import { COLOR, Colors, FontFamily, fontSize, space, Styles } from "@/constants";
import { fetchSubjects } from "@/helpers/subject";
import { ISubject } from "@/types";
import { router } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type ITabContentType = "today" | "week";
export function HomeContentSubject() {
  const gotoSubjectList = () => router.push("/subject/subject_list");
  const [isLoading, setLoading] = useState(false);
  const [subjects, setSubjects] = useState<ISubject[]>([]);
  const [tab, setTab] = useState<ITabContentType>("today");

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
  const preload = async () => {
    try {
      setLoading(true);
      const data = await fetchSubjects();
      if (data) setSubjects(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
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

      <AtTab value={tab} setValue={setTab} menu={tabMenu} />

      {subjects.map((subject, index) => {
        return (
          <View key={subject.id}>
            {index === 0 && <SubjectCard isHighlighted subject={subject} />}
            {index !== 0 && <SubjectCard subject={subject} />}
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
