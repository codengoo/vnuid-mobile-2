import { SubjectCard } from "@/components";
import { space, Styles } from "@/constants";
import { fetchSubjects } from "@/helpers/subject";
import { ICourse } from "@/types";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

export default function SubjectList() {
  const [isLoading, setLoading] = useState(false);
  const [subjects, setSubjects] = useState<ICourse[]>([]);
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
    <View style={styles.container}>
      {subjects.map((subject) => {
        return <SubjectCard course={subject} key={subject.id} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Styles.container,
    gap: space(8),
  },
});
