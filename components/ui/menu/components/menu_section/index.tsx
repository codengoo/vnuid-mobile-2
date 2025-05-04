import { Color, space } from '@/constants';
import { View } from 'react-native';
import { AtMenuItem, IMenuItemProps } from '../menu_item';

export interface IMenuSectionProps {
  items: IMenuItemProps[];
}
export function MenuSection({items}: IMenuSectionProps) {
  return (
    <View
      style={{
        backgroundColor: Color.yellow400,
        borderRadius: space(12),
        padding: space(12),
      }}>
      {items.map((item, index) => (
        <AtMenuItem key={index} {...item} />
      ))}
    </View>
  );
}
