import { Icon } from "@/components";
import { Colors, space, Styles } from "@/constants";
import { setBio } from "@/helpers/login";

import { router, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";
export default function VerifyingFingerprintScreen() {
  const { password } = useLocalSearchParams<{ password: string }>();
  const handleSetBio = async () => {
    const isOK = await setBio(password);
    if (isOK) {
      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Set fingerprint successfully",
        autoHide: true,
      });
      router.replace("/profile");
    } else {
      Toast.show({
        type: "error",
        text1: "Failed",
        text2: "Please try again",
        autoHide: true,
      });
    }
  };

  useEffect(() => {
    handleSetBio();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/illus_wait_2.png")}
        style={{ width: "75%", objectFit: "contain", height: space(400) }}
      />

      <TouchableOpacity style={styles.button} onPress={handleSetBio}>
        <Text style={Styles.text}>Press to try again</Text>
        <Icon.FingerprintIcon stroke={1.75} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.yellow100,
    justifyContent: "center",
    alignItems: "center",
    gap: space(20),
  },

  button: {
    flexDirection: "row",
    gap: space(20),
  },
});
