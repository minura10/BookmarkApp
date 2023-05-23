import React from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  View,
  StatusBar
} from 'react-native';

import ComponentEx from '../../Components/ComponentEx';
import {navigate} from '../../Navigators/Root';
import { useGetPokemonByNameQuery } from '../../Services/UserService/FetchOne'

import {useTheme} from '../../Theme';

export default function ScreenOne() {
  const {Fonts, Gutters, Layout, Buttons} = useTheme();

  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')

  const navigateToNext = () => {
    navigate('ScreenTwo');
  };

  return (
    <>
    <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
    />
    <View style={[Layout.fill, Layout.colCenter, Gutters.smallHPadding]}>
      <View style={[Layout.colCenter, Gutters.smallHPadding]}>
        <ComponentEx />
        {error ? (
          <Text>Oh no, there was an error</Text>
        ) : isLoading ? (
          <Text>Loading...</Text>
        ) : data ? (
          <>
            <Text>{data.species.name}</Text>
            <Image 
              style={{width: 150, height: 150,}}
              source={{
                uri: data.sprites.front_shiny,
              }}>
            </Image>
          </>
        ) : null}
      </View>
      <TouchableOpacity
        style={[Buttons.outlineRounded]} //{styles.nextPageButton}
        onPress={() => navigateToNext()}>
        <Text style={Fonts.textRegular}>Go To Next Page</Text>
      </TouchableOpacity>
    </View>
    </>
  );
};
