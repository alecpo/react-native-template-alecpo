import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '#/screens/HomeScreen';

const RootStackNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }} headerMode='screen'>
      <Screen name='Home' component={HomeScreen} />
    </Navigator>
  );
};

export default RootStackNavigator;
