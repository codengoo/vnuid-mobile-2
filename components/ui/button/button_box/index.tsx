import { COLOR, space } from "@/constants";
import { ReactNode, useMemo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ChevronRightIcon } from "../../icon";
import { IIconProp } from "../../icon/type";
import { IAtButtonStyle, style } from "./styles";

interface AtButtonBoxProps extends IAtButtonStyle {
  icon?: (props: IIconProp) => ReactNode;
  title?: string;
  onPress?: () => void;
  expandable?: boolean;
  center?: boolean;
  disabled?: boolean;
  widthFull?: boolean;
}
export function AtButtonBox({
  icon: Icon,
  title,
  expandable,
  color,
  onPress,
  center,
  disabled,
  widthFull,
}: AtButtonBoxProps) {
  const styles = useMemo(() => style({ color, disabled }), [color, disabled]);

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.container,
        center && styles.center,
        widthFull && styles.widthFull,
      ]}
      onPress={onPress}
    >
      <View style={styles.titleWrapper}>
        {Icon && (
          <Icon
            color={color === "green" ? COLOR.textButton : COLOR.text}
            stroke={space(2)}
          />
        )}
        {title && <Text style={styles.title}>{title}</Text>}
      </View>
      {expandable && <ChevronRightIcon color={COLOR.text} stroke={space(2)} />}
    </TouchableOpacity>
  );
}
