import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import FlashMessage from 'react-native-flash-message';
import { Provider, useSelector } from 'react-redux';
import Router from './router';
import store from './redux/store';
import { Loading } from '@components';

const MainApp = () => {
  const { isLoading } = useSelector((state: any) => state.globalReducer);
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlashMessage position="top" />
      {isLoading && <Loading />}
    </>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
