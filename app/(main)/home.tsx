import { AtInput, Icon } from "@/components";
import {
  COLOR,
  Colors,
  FontFamily,
  fontSize,
  space,
  Styles,
} from "@/constants";
import { useHideTabBar } from "@/context";
import { useFocusEffect } from "@react-navigation/native";
import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import WifiManager from "react-native-wifi-reborn";

export default function HomeScreen() {
  //   async function getSignalStrength() {
  //     if (Platform.OS === 'android') {
  //       const granted = await PermissionsAndroid.request(
  //         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //       );

  //       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //         WifiManager.reScanAndLoadWifiList()
  //           .then(info => {
  //            console.log(info);
  //           })
  //           .catch(err => {
  //             console.error('Lỗi lấy info WiFi:', err);
  //           });
  //       } else {
  //         console.log('Permission denied');
  //       }
  //     }
  //   }
  //   useEffect(() => {
  //     getSignalStrength();
  //   }, []);

  const { toggleTabBar } = useHideTabBar();
  const [text, setText] = useState("");

  useFocusEffect(() => {
    toggleTabBar(true);
  });

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.header}>
        <View>
          <Text style={Styles.appText}>Xin chào, Tuấn Nghĩa</Text>
          <Text style={styles.text_sub_heading}>Buổi trưa vui vẻ nhé</Text>
        </View>
        <Image
          source={require("@/assets/images/avatar_nam.png")}
          style={styles.avatar}
        />
      </View>

      <View>
        <AtInput
          mode="text"
          setValue={setText}
          value={text}
          icon={Icon.SearchIcon}
          style={styles.searchBox}
          endComponent={
            <TouchableOpacity style={styles.searchBoxEnd}>
              <Icon.ArrowRightIcon color="white" />
            </TouchableOpacity>
          }
        />
      </View>

      <View style={styles.section}>
        <View style={styles.section_header}>
          <Text style={styles.section_title}>Upcoming</Text>
          <Text style={Styles.text}>See all</Text>
        </View>

        <ScrollView
          contentContainerStyle={styles.chip_wrapper}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.chip_button}>
            <Text style={Styles.subText}>Hôm nay</Text>
          </View>
          <View style={[styles.chip_button, styles.chip_button_active]}>
            <Text style={[Styles.subText, styles.text_chip_active]}>
              Tuần này
            </Text>
          </View>
          <View style={styles.chip_button}>
            <Text style={Styles.subText}>Tại đây</Text>
          </View>
          <View style={styles.chip_button}>
            <Text style={Styles.subText}>Tại đây</Text>
          </View>
        </ScrollView>

        <ScrollView>
          <View style={styles.card_container}>
            <Image
              source={require("@/assets/images/illus_tech.png")}
              style={{ objectFit: "scale-down", width: "100%", height: 200 }}
            />

            <View style={styles.card_content}>
              <View style={styles.card_header}>
                <View>
                  <Text style={styles.card_name}>Checkin 7h</Text>
                  <Text style={styles.card_sub_name}>
                    INT2203 - Lập trình web
                  </Text>
                </View>
                <TouchableOpacity>
                  <Icon.HeartIcon stroke={2} size={28} color={COLOR.text} />
                </TouchableOpacity>
              </View>

              <View style={styles.card_details}>
                <Text style={styles.card_detail_text}>7h30</Text>
                <Text style={styles.card_detail_text}>GD3 - 203</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
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
  text_sub_heading: {
    ...Styles.subText,
    textAlign: "left",
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: space(999),
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
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

  card_container: {
    backgroundColor: Colors.yellow400,
    borderRadius: space(16),
    padding: space(16),
    borderStyle: "solid",
    borderColor: COLOR.borderInput,
    borderWidth: space(2),
    gap: space(8),
  },

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
    marginTop: space(16),
    borderWidth: space(2),
    borderColor: COLOR.borderInput,
    borderStyle: "dashed",
  },
});
