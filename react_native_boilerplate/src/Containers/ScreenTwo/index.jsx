import React, {useEffect} from 'react';
import {Alert, BackHandler, Text, TouchableOpacity, View, StatusBar} from 'react-native';

import {navigate} from '../../Navigators/Root';
import {useTheme} from '../../Theme';
import styles from './styles';

export default function ScreenTwo() {
  const {Fonts, Gutters, Layout} = useTheme();

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  const backAction = () => {
    Alert.alert('Are you sure you want exit?', '', [
      {
        text: 'YES',
        onPress: () => {
          BackHandler.exitApp();
        },
      },
      {
        text: 'NO',
        onPress: () => {},
      },
    ]);
    return true;
  };

  const navigatePrevious = () => {
    navigate('ScreenOne');
  };

  return (
    <>
    <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
    />
    <View style={[Layout.fill, Layout.colCenter, Gutters.smallHPadding]}>
      <View style={[[Layout.colCenter, Gutters.smallHPadding]]} />
      <View style={[Gutters.smallHPadding, Gutters.largeVMargin]}>
        <Text style={[Fonts.textRegular, styles.title]}>Hi There!</Text>
        <Text style={Fonts.textRegular}>This is your second screen</Text>
      </View>
      <TouchableOpacity
        style={styles.previousPageButton}
        onPress={() => navigatePrevious()}>
        <Text style={Fonts.textRegular}>Go To Previous Page</Text>
      </TouchableOpacity>
    </View>
    </>
  );
};
