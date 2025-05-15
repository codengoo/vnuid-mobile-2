import { AtAvatar, AtInput, Icon } from "@/components";
import { Colors, space, Styles } from "@/constants";
import { useHideTabBar, useUser } from "@/context";
import { HomeContentSubject } from "@/screens/home";
import { greeting } from "@/utils";
import { useFocusEffect } from "@react-navigation/native";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { toggleTabBar } = useHideTabBar();
  const [searchText, setSearchText] = useState("");
  const { user } = useUser();
  const gotoSearch = () => router.push(`/search?search=${searchText}`);

  useFocusEffect(() => {
    toggleTabBar(true);
  });

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView contentContainerStyle={{ gap: space(8) }} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={Styles.appText}>Xin chào, {user?.name || ""}</Text>
            <Text style={Styles.subText}>{greeting()}</Text>
          </View>
          <AtAvatar shape="circle" size={48} />
        </View>

        <View>
          <AtInput
            mode="text"
            setValue={setSearchText}
            value={searchText}
            icon={Icon.SearchIcon}
            style={styles.searchBox}
            endComponent={
              <TouchableOpacity style={styles.searchBoxEnd} onPress={gotoSearch}>
                <Icon.ArrowRightIcon color="white" />
              </TouchableOpacity>
            }
            onEnter={gotoSearch}
          />
        </View>

        <HomeContentSubject />
        <View style={{ height: space(250) }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchBox: {
    backgroundColor: Colors.white,
  },
  searchBoxEnd: {
    backgroundColor: Colors.black700,
    borderRadius: space(8),
    padding: space(8),
    paddingHorizontal: space(12),
  },
  container: {
    flex: 1,
    backgroundColor: Colors.yellow100,
    padding: space(20),
    gap: space(20),
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
});
