import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import MainNavigator from './navigation';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  const [loaded] = useFonts({
    'press-start-2p': require('./assets/fonts/PressStart2P-Regular.ttf'),
  })

  if(!loaded) return <AppLoading/>

  return (
    <Provider store={store}>
      <MainNavigator/>
    </Provider>
  );
}