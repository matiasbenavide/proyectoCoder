import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import ScreenNavigator from './navigation/ScreenNavigator';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  const [loaded] = useFonts({
    'play-fair': require('./assets/fonts/PlayfairDisplay-VariableFont_wght.ttf'),
    'play-fair-italic': require('./assets/fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf'),
  })

  if(!loaded) return <AppLoading/>

  return (
    <Provider store={store}>
      <ScreenNavigator/>
    </Provider>
  );
}