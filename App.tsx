/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigation from './src/navigations/BottomTabNavigation';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  
  return (
    <NavigationContainer>

  <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="BottomNavigation" component={BottomTabNavigation} />
    </Stack.Navigator>
</NavigationContainer>
  );
}



export default App;
