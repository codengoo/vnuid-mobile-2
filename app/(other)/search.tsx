import { AtInput, AtTab, Icon, SubjectCard } from "@/components";
import { Colors, fontSize, space, Styles } from "@/constants";
import { fetchSearch } from "@/helpers/search";
import { ISearchResult } from "@/types";
import { useFocusEffect, useLocalSearchParams } from "expo-router";
import { useCallback, useMemo, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";

type ITabContentType = "session" | "subject";

export default function SearchScreen() {
  const queries = useLocalSearchParams();
  const search = queries.search as string;
  const [value, setValue] = useState<string>(search || "");
  const [isLoading, setLoading] = useState(false);
  const [tab, setTab] = useState<ITabContentType>("session");
  const [searchResult, setSearchResult] = useState<ISearchResult | null>();

  const tabWidth = useMemo(() => Dimensions.get("screen").width - space(20) * 2, []);
  const menuTab = useMemo(() => {
    return [
      {
        label: "Điểm danh",
        value: "session",
      },
      {
        label: "Lớp môn học",
        value: "subject",
      },
    ] satisfies { label: string; value: ITabContentType }[];
  }, []);
  const findResult = async () => {
    try {
      setLoading(true);
      const searchData = await fetchSearch(value);
      console.log(searchData);
      if (!searchData) return;
      setSearchResult(searchData);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      console.log(search);
      findResult();
    }, [])
  );

  return (
    <ScrollView contentContainerStyle={Styles.container}>
      <View style={styles.header}>
        <View>
          <AtInput
            mode="text"
            value={value}
            setValue={setValue}
            icon={Icon.SearchIcon}
            style={{ backgroundColor: Colors.yellow400 }}
            onEnter={findResult}
          />
        </View>

        <View style={{ flexDirection: "row" }}>
          <AtTab menu={menuTab} width={tabWidth} onChange={(val) => setTab(val)} />
        </View>
      </View>

      <ScrollView contentContainerStyle={{ gap: space(12) }}>
        {!searchResult ||
          (searchResult && tab === "session" && !searchResult.sessions.length) ||
          (searchResult && tab === "subject" && !searchResult.subjects.length && (
            <Text style={styles.text}>Không có thông tin nào</Text>
          ))}
        {isLoading && <Text style={styles.text}>Đang tìm kiếm thêm...</Text>}

        {searchResult &&
          tab === "session" &&
          searchResult.sessions.map((session) => (
            <View key={session.id} style={styles.sessionStyle}>
              <Text key={session.id} style={styles.text}>
                {session.name}
              </Text>
              <Text key={session.id} style={styles.text2}>
                Hiệu lực trong {session.duration}m
              </Text>
            </View>
          ))}
        {searchResult &&
          tab === "subject" &&
          searchResult.subjects.map((subject) => (
            <SubjectCard course={subject} includeSession={false} key={subject.id} />
          ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    gap: space(12),
  },

  text: {
    ...Styles.text,
    fontSize: fontSize(18),
    fontWeight: "500",
  },

  text2: {
    ...Styles.text,
    fontSize: fontSize(14),
    color: Colors.black500,
  },

  sessionStyle: {
    backgroundColor: Colors.yellow300,
    padding: space(12),
    borderRadius: space(12),
    borderWidth: space(2),
    borderColor: Colors.black700,
  },
});
