import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';

import store from './redux/configureStore';
import routes from './constants/routes';

const Stack = createNativeStackNavigator();

export default function App() {
  const renderStackScreens = () =>
    routes.map((r, i) => (
      <Stack.Screen key={i} name={r.name} component={r.component} />
    ));
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Redux_Saga">
            {renderStackScreens()}
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}
