import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import styled from 'styled-components/native';
import { Provider } from 'react-redux';

import axios from 'axios';

import COLORS from '#/utils/colors';

import storeConfig from '#/store/storeConfig';

import RootStackNavigator from '#/navigation/RootStackNavigator';

import { SERVER_URL } from '#/config/api';

axios.defaults.baseURL = SERVER_URL;

const App = () => {
  const store = storeConfig();

  return (
    <SafeAreaProvider>
      <StyledSafeAreaView>
        <Provider store={store}>
          <StatusBar
            backgroundColor={COLORS.darkGray}
            barStyle='light-content'
          />
          <NavigationContainer>
            <RootStackNavigator />
          </NavigationContainer>
        </Provider>
      </StyledSafeAreaView>
    </SafeAreaProvider>
  );
};

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  background-color: ${COLORS.darkGray};
`;

export default App;
