import {Linking} from 'react-native';
import Toast from 'react-native-toast-message';

export const openLink = (url: string, message?: string) => {
  Linking.openURL(url).catch(err => {
    Toast.show({
      type: 'error',
      text1: message || 'Failed to open link',
    });
  });
};

export const handleSendMail = (email: string) => {
  const url = `mailto:${email}`;
  openLink(url);
};

export const handleCall = (phoneNumber: string) => {
  const url = `tel:${phoneNumber}`;
  openLink(url);
};

export const handleMap = (address: string) => {
  const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  openLink(url);
};
