import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/router/RootNavigator';
import Provider from './src/context/provider';
import {ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva'; // eva temasını içe aktarın

export default function App() {
  return (
    <Provider>
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ApplicationProvider>
    </Provider>
  );
}
