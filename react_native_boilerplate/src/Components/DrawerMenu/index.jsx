import React from 'react';
import {Image, Text} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import {navigate} from '../../Navigators/Root';

import {useTheme} from '../../Theme';
import styles from './styles';

const DrawerMenu = () => {
  const {Images} = useTheme();

  const goToScreenOne = () => {
    navigate('ScreenOne');
  };

  const goToScreenTwo = () => {
    navigate('ScreenTwo');
  };

  return (
    <>
      <DrawerContentScrollView>
        <Image
          style={styles.logo}
          source={Images.logo}
          resizeMode={'contain'}
        />
        <DrawerItem label="SCREEN ONE" onPress={goToScreenOne} />
        <DrawerItem label="SCREEN TWO" onPress={goToScreenTwo} />
        {/* Another way of creating drawer menu items using a view is commented out below */}
        {/* <View style={styles.topBlock}>
          <TouchableOpacity onPress={goToScreenOne}>
            <Text style={styles.menuText}>SCREEN ONE</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.topBlock}>
          <TouchableOpacity onPress={goToScreenTwo}>
            <Text style={styles.menuText}>SCREEN TWO</Text>
          </TouchableOpacity>
        </View> */}
      </DrawerContentScrollView>
      <Text style={styles.versionText}>Version 1.0.0 (1)</Text>
    </>
  );
};

export default DrawerMenu;
