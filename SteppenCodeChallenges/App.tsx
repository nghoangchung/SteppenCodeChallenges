import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Example from './src/components/NativebaseExample';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'example'} component={Example} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
