import { space, Styles } from "@/constants";
import { StyleSheet, Text, View } from "react-native";

interface IProps {
  description: string;
  children?: React.ReactNode[];
}
export function LoginForm({ children, description }: IProps) {
  return (
    <View style={styles.container}>
      <Text style={Styles.centerText}>{description}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    gap: space(8),
    alignItems: "center",
  },
});
