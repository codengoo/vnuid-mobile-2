import { ChevronRightIcon, IIconProp } from '@/components/ui/icon';
import { COLOR, FontFamily, fontSize, space } from '@/constants';
import { ReactNode } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export interface IMenuItemProps {
  title: string;
  expandable?: boolean;
  onPress?: () => void;
  icon: (props: IIconProp) => ReactNode;
}
export function AtMenuItem({
  title,
  onPress,
  expandable,
  icon: Icon,
}: IMenuItemProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        gap: space(12),
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: space(16)
      }}>
      <View
        style={{
          flexDirection: 'row',
          gap: space(12),
          alignItems: 'center',
        }}>
        <Icon color={COLOR.text} size={space(24)} stroke={2} />
        <Text
          style={{
            fontFamily: FontFamily.Prompt,
            color: COLOR.text,
            fontSize: fontSize(16),
          }}>
          {title}
        </Text>
      </View>

      {expandable && <ChevronRightIcon />}
    </TouchableOpacity>
  );
}
