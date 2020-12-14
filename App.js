import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Screen/Login';
import Register from './Screen/Register'
import Products from './Screen/Products';
import BillProducts from './Screen/BillProducts';

{/*
quản lý, chuyển màn hình
npm install @react-navigation/native @react-navigation/stack
expo install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
*/}

export const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ title: 'Login' }} name='Login' component={Login} />
        <Stack.Screen options={{ title: 'Register' }} name='Register' component={Register} />
        <Stack.Screen options={{ title: 'Products' }} name='Products' component={Products} />
        <Stack.Screen options={{ title: 'BillProducts' }} name='BillProducts' component={BillProducts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#54546c',
    alignItems: 'center',
    justifyContent: 'center',
  },
});