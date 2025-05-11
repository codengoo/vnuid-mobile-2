import { AtCheckbox } from "@/components/ui/checkbox";
import { space } from "@/constants";
import { StyleSheet, View } from "react-native";

interface IProps {
  isSave: boolean;
  setSave: React.Dispatch<React.SetStateAction<boolean>>;
}
export function LoginSave({ isSave, setSave }: IProps) {
  return (
    <View style={styles.container}>
      <AtCheckbox checked={isSave} setValue={setSave} label="Save device" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: space(4),
  },
});
