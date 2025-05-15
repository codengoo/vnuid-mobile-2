import { AtBottomSheet } from "@/components";
import { Colors, space } from "@/constants";
import { fetchSubjectDetail } from "@/helpers/subject";
import { ICourse } from "@/types";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useFocusEffect, useLocalSearchParams } from "expo-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
export default function SubjectClassScreen() {
  const { subject_id } = useLocalSearchParams();
  const [isLoading, setLoading] = useState(false);
  const [subject, setSubject] = useState<ICourse | null>(null);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const fetchSubject = async () => {
    try {
      setLoading(true);
      const data = await fetchSubjectDetail(subject_id as string);
      if (data) setSubject(data);
      //    bottomSheetModalRef.current?.expand();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubject();
  }, [subject_id]);

  useFocusEffect(
    useCallback(() => {
      if (subject) {
        bottomSheetModalRef.current?.present();
      }
    }, [subject])
  );

  // if (isLoading || !subject) return <AtLoading />;
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView edges={["top"]}>
        <View>
          <Image
            source={require("@/assets/images/illus_tech.png")}
            style={{
              objectFit: "contain",
              width: "100%",
              height: space(250),
            }}
          />
        </View>
      </SafeAreaView>

      <AtBottomSheet
        ref={bottomSheetModalRef}
        hasBackdrop={false}
        backgroundColor={Colors.white}
        snapPoints={["75%", "90%"]}
        paddingSide={false}
      >
        <View style={{ flex: 1 }}>
          <Text>{subject?.name}</Text>
          <Text>{subject?.code}</Text>
          <Text>{subject?.address}</Text>
          <Text>{subject?.start_time}</Text>

          {/* Giang vien */}
        </View>
      </AtBottomSheet>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.yellow200,
    flex: 1,
  },
});
