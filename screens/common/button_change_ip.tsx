import { Styles } from "@/constants";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export function ButtonChangeIP() {
  const handlePress = () => {
    router.navigate("/change_ip");
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.buttonText}> IP</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    ...Styles.text,
  },
});
