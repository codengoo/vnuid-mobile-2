import { Space, Styles } from "@/constants";
import { Pressable, StyleSheet, Text } from "react-native";

interface AtButtonLinkProps {
  title: string;
  onPress?: () => void;
}

export function AtButtonLink({ title, onPress }: AtButtonLinkProps) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Space.sd,
    paddingVertical: Space.sm,
  },
  title: {
    ...Styles.text,
    fontWeight: "600",
  },
});
