import { Icon } from "@/components";
import { Colors, space, Styles } from "@/constants";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function LanguageScreen() {
  const {
    i18n: { language, changeLanguage },
  } = useTranslation();
  
  const LangSet = useMemo(() => {
    return [
      {
        label: "Tiêng Việt",
        value: "vi",
        checked: language === "vi",
      },
      {
        label: "English",
        value: "en",
        checked: language === "en",
      },
    ];
  }, [language]);

  const handleChangeLang = (lang: string) => {
    changeLanguage(lang);
  };

  return (
    <View style={Styles.container}>
      <View style={styles.container}>
        {LangSet.map((item) => (
          <TouchableOpacity
            onPress={() => handleChangeLang(item.value)}
            style={[styles.btn_container, item.checked && styles.btn_checked]}
          >
            <Text style={styles.text}>{item.label}</Text>
            {item.checked && <Icon.CheckIcon />}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: space(8),
  },

  btn_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: space(12),
    borderRadius: space(8),
    borderColor: Colors.black100,
    borderBottomWidth: space(2),
  },

  btn_checked: {
    borderWidth: space(2),
    borderColor: Colors.green300,
    backgroundColor: Colors.green200,
  },

  text: {
    ...Styles.text,
    fontWeight: "500",
  },
});
