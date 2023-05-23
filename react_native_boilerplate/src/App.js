import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';

import AppNavigator from './Navigators/AppNavigator';
import {store} from './Stores/store';
import './Translations';

const App = () => (
  <Provider store={store}>
    {/**
     * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
     * and saved to redux.
     * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
     * for example `loading={<SplashScreen />}`.
     * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
     */}
      <AppNavigator />
  </Provider>
);

export default App;
