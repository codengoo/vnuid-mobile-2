import { useTranslation } from 'react-i18next';
import { Image, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
export function ButtonLang() {
  const {
    i18n: {language, changeLanguage},
  } = useTranslation();

  const handleChangeLang = () => {
    if (language === 'en') changeLanguage('vi');
    else if (language === 'vi') changeLanguage('en');
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleChangeLang}>
      <View style={styles.flagWrapper}>
        {language === 'en' ? (
          <Image
            source={require('@/assets/images/en.png')}
            style={{height: '100%', aspectRatio: 2}}
            resizeMode="contain"
          />
        ) : (
          <Image
            source={require('@/assets/images/vi.png')}
            style={{height: '100%', aspectRatio: 2}}
            resizeMode="contain"
          />
        )}
      </View>
    </TouchableOpacity>
  );
}
