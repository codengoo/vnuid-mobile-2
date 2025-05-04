import { Colors, space, Space } from "@/constants";
import { useTranslation } from "react-i18next";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
export function ButtonLang() {
  const {
    i18n: { language, changeLanguage },
  } = useTranslation();

  const handleChangeLang = () => {
    if (language === "en") changeLanguage("vi");
    else if (language === "vi") changeLanguage("en");
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleChangeLang}>
      <View style={styles.flagWrapper}>
        {language === "en" ? (
          <Image
            source={require("@/assets/images/en.png")}
            style={{ height: "100%", aspectRatio: 2 }}
            resizeMode="contain"
          />
        ) : (
          <Image
            source={require("@/assets/images/vi.png")}
            style={{ height: "100%", aspectRatio: 2 }}
            resizeMode="contain"
          />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: Space.sm,
    alignItems: "center",
    backgroundColor: Colors.green200,
    padding: space(4),
    borderRadius: space(99),
  },

  flagWrapper: {
    width: space(24),
    height: space(24),
    borderRadius: space(20),
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
