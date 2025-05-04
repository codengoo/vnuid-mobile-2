import {ReactNode} from 'react';
import {KeyboardAvoidingView, Platform, StatusBar, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';

export const LoginLayout = ({children}: {children: ReactNode}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}
      keyboardVerticalOffset={0}>
      <SafeAreaView style={styles.container} edges={['top']}>
        <StatusBar hidden />
        {children}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export const LoginDecoratorLayout = ({children}: {children: ReactNode}) => {
  return <View style={styles.header}>{children}</View>;
};

export const LoginContentLayout = ({children}: {children: ReactNode}) => {
  return (
    <SafeAreaView style={styles.content} edges={['bottom']}>
      <View style={styles.content_body}>{children}</View>
    </SafeAreaView>
  );
};
