import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StatusBar} from 'react-native';

import DrawerMenu from '../Components/DrawerMenu';
import Startup from '../Containers/Startup';
import ScreenOne from '../Containers/ScreenOne';
import ScreenTwo from '../Containers/ScreenTwo';
import {navigationRef} from './Root';

import {useTheme} from '../Theme';

const {Screen, Navigator} = createStackNavigator();
const Drawer = createDrawerNavigator();

function AppNavigator() {
  const {Layout, NavigationTheme} = useTheme();
  const {colors} = NavigationTheme;

  /* SideBar function - Implements a SideBarDrawer using react-navigation */
  const SideBar = () => {
    return (
      <>
        <Drawer.Navigator
          drawerType="front"
          drawerStyle={{backgroundColor: '#EEEFF3', width: 250}}
          overlayColor="rgba(0, 0, 0, 0.7)"
          drawerContent={() => <DrawerMenu />}
          screenOptions={{
            swipeEnabled: false,
          }}>
          <Drawer.Screen
            name="ScreenOne"
            component={ScreenOne}
            options={{
              headerTitle: '',
              headerShown: true,
              headerTintColor: '#5F64FF',
              headerStyle: {
                backgroundColor: '#EEEFF3',
              },
            }}
          />
          <Drawer.Screen
            name="ScreenTwo"
            component={ScreenTwo}
            options={{
              headerTitle: '',
              headerShown: true,
              headerTintColor: '#5F64FF',
              headerStyle: {
                backgroundColor: '#EEEFF3',
              },
            }}
          />
        </Drawer.Navigator>
      </>
    );
  };

  return (
    <SafeAreaView style={[Layout.fill, {backgroundColor: colors.card}]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={'dark-content'} />
        <Navigator
          initialRouteName="Startup"
          screenOptions={{headerShown: false}}>
          <Screen name="Startup" component={Startup} />
          <Screen name="ScreenOne" component={SideBar} />
          <Screen
            name="ScreenTwo"
            component={ScreenTwo}
          />
        </Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default AppNavigator;
