import { COLOR, Colors, space, Styles } from "@/constants";
import { Dispatch, SetStateAction, useMemo } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

interface IAtChipProps<T> {
  setValue: Dispatch<SetStateAction<T>>;
  value: T;
  menu: {
    label: string;
    value: T;
  }[];
  width?: number;
}

export function AtTab<T>({ value, menu, setValue, width }: IAtChipProps<T>) {
  const itemWidth = useMemo(
    () => (width !== undefined ? (width - (menu.length - 1) * space(12)) / menu.length : undefined),
    [width]
  );

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {menu.map((item, index) => (
        <TouchableOpacity
          onPress={() => setValue(item.value)}
          style={[
            styles.chip_button,
            value === item.value && styles.chip_button_active,
            itemWidth !== undefined && { width: itemWidth },
          ]}
          key={"tab" + index}
        >
          <Text style={[styles.chip_text, value === item.value && styles.text_chip_active]}>
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: space(12),
  },

  chip_button: {
    backgroundColor: Colors.white,
    borderRadius: space(99),
    padding: space(8),
    paddingHorizontal: space(20),
    borderWidth: space(1),
    borderColor: Colors.black100
  },

  chip_text: {
    ...Styles.subText,
    textAlign: "center",
  },
  chip_button_active: {
    backgroundColor: Colors.yellow500,
    borderColor: Colors.yellow500
  },

  text_chip_active: {
    color: COLOR.text,
  },
});
