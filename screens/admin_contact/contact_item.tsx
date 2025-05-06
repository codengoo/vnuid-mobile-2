import { Icon } from "@/components";
import { Colors, FontFamily, space } from "@/constants";
import { handleCall, handleMap, handleSendMail } from "@/helpers/link";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ItemProps {
  type: "phone" | "email" | "address";
  value: string;
}

export function ContextItem({ type, value }: ItemProps) {
  const handlePress = () => {
    switch (type) {
      case "phone":
        handleCall(value);
        break;
      case "email":
        handleSendMail(value);
        break;
      case "address":
        handleMap(value);
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {type === "phone"
          ? "Số điện thoại"
          : type === "email"
          ? "Email"
          : "Địa chỉ"}
      </Text>
      <View style={styles.value_wrapper}>
        <Text style={styles.value}>{value}</Text>
        <TouchableOpacity onPress={handlePress} style={styles.btn}>
          {type === "phone" ? (
            <Icon.CallIcon />
          ) : type === "email" ? (
            <Icon.MailIcon />
          ) : (
            <Icon.MapIcon />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: space(8),
  },

  title: {
    fontFamily: FontFamily.Prompt,
    fontSize: space(12),
    color: Colors.black500,
  },

  value: {
    fontFamily: FontFamily.Prompt,
    flexShrink: 1,
  },

  btn: {
    width: space(32),
  },

  value_wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: space(8),
  },
});
