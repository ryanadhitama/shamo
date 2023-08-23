import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SplashScreen } from '../pages';

export type RootStackParamList = {
  SplashScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default Router;
