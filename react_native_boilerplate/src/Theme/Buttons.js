import {StyleSheet} from 'react-native';

import Gutters from './Gutters';
import Layout from './Layout';

export default function ({Colors}) {
  const base = {
    ...Layout.center,
    ...Gutters.largeHPadding,
    height: 40,
    backgroundColor: Colors.primary,
  };
  const rounded = {
    ...base,
    padding: 5,
    borderRadius: 5,
    borderWidth: 2, //added to get a border around Auto button
    borderColor: Colors.primary, //added to change the border color of Auto button to primary
    justifyContent: 'center',
    alignItems: 'center',
  };

  return StyleSheet.create({
    base,
    rounded,
    outline: {
      ...base,
      backgroundColor: Colors.transparent,
      borderWidth: 2,
      borderColor: Colors.primary,
    },
    outlineRounded: {
      ...rounded,
      backgroundColor: Colors.primary,
    },
  });
}
