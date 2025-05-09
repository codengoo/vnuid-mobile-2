import { Colors, space } from "@/constants";
import { router } from "expo-router";
import { useMemo } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

interface AtAvatarProps {
  shape?: "square" | "circle";
  size?: number;
  isPadding?: boolean;
  borderSize?: number;
}

export function AtAvatar({
  shape = "circle",
  size = 128,
  isPadding = false,
  borderSize = 2,
}: AtAvatarProps) {
  const styles = useMemo(() => style(size, borderSize), [size]);
  const gotoProfile = () => router.navigate("/user_info");
  
  return (
    <TouchableOpacity
      onPress={gotoProfile}
      style={[
        styles.container,
        shape === "circle" ? styles.rounded : styles.square,
        isPadding && styles.padding,
      ]}
    >
      <Image
        source={require("@/assets/images/avatar_nam.png")}
        style={[styles.avatar, shape === "circle" ? styles.rounded : styles.square]}
      />
    </TouchableOpacity>
  );
}

const style = (size: number, borderSize: number) =>
  StyleSheet.create({
    container: {
      borderColor: Colors.black700,
      borderWidth: space(borderSize),
      backgroundColor: Colors.yellow300,
    },

    avatar: {
      width: space(size),
      height: space(size),
    },

    rounded: {
      borderRadius: space(999),
    },

    square: {
      borderRadius: space(24),
    },

    padding: {
      padding: space(4),
    },
  });
