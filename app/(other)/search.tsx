import { AtInput, AtTab, Icon } from "@/components";
import { Colors, space, Styles } from "@/constants";
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
  const [tab, setTab] = useState<ITabContentType>("subject");
  const [searchResult, setSearchResult] = useState<ISearchResult | null>();

  const tabWidth = useMemo(() => Dimensions.get("screen").width - space(20) * 2, []);
  const menuTab = useMemo(() => {
    return [
      {
        label: "Phiên điểm danh",
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
          <AtTab value={tab} menu={menuTab} setValue={setTab} width={tabWidth} />
        </View>
      </View>

      <View>
        {!searchResult ||
          (searchResult && tab === "session" && !searchResult.sessions.length) ||
          (searchResult && tab === "subject" && !searchResult.subjects.length && (
            <Text style={styles.text}>Không có thông tin nào</Text>
          ))}
        {isLoading && <Text style={styles.text}>Đang tìm kiếm thêm...</Text>}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    gap: space(12),
  },

  text: {
    ...Styles.text,
    textAlign: "center",
  },
});
