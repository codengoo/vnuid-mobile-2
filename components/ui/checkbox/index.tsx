import { space } from '@/constants';
import { Dispatch, SetStateAction } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { CheckIcon } from '../icon';
import { styles } from './styles';

interface CustomCheckboxProps {
  label?: string;
  checked: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
  disabled?: boolean;
}

export function AtCheckbox({
  label,
  checked,
  setValue,
  disabled,
}: CustomCheckboxProps) {
  return (
    <TouchableOpacity
      onPress={() => !disabled && setValue(!checked)}
      style={styles.container}
      activeOpacity={disabled ? 1 : 0.7}>
      <View
        style={[
          styles.checkbox,
          checked && styles.checked,
          disabled && styles.disabledCheckbox,
        ]}>
        {checked && <CheckIcon stroke={2.5} size={space(16)} />}
      </View>

      {label && (
        <Text style={[styles.label, disabled && styles.disabledLabel]}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
}
