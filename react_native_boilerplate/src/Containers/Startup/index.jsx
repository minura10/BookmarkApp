import React, {useEffect} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {navigateAndSimpleReset} from '../../Navigators/Root';
import ComponentEx from '../../Components/ComponentEx';

import {useTheme} from '../../Theme';

export default function Startup() {
  const {Gutters, Fonts, Layout} = useTheme();

  const {t} = useTranslation();

  useEffect(() => {
    navigateToScreenOne()
  }, []);

  const navigateToScreenOne = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
    // Navigate and reset to ScreenOne
      navigateAndSimpleReset('ScreenOne');
  }

  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <ComponentEx />
      <ActivityIndicator size={'large'} style={[Gutters.largeVMargin]} />
      <Text style={Fonts.textCenter}>{t('welcome')}</Text>
    </View>
  );
};
