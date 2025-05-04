import { space } from '@/constants';
import { View } from 'react-native';
import { IMenuSectionProps, MenuSection } from './components/menu_section';

export interface IMenuProps {
  menu: IMenuSectionProps[];
}

export function AtMenu({menu}: IMenuProps) {
  return (
    <View
      style={{
        flex: 1,
        marginTop: space(32),
        padding: space(12),
        flexDirection: 'column',
        gap: space(12),
      }}>
      {menu.map((item, index) => (
        <MenuSection key={index} items={item.items} />
      ))}
    </View>
  );
}
