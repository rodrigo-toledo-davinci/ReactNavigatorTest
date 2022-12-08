import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { DrawerNavigation } from './navigation/DrawerNavigation';
import { Text } from 'react-native';

export default function App() {
 
  return (
    
    <NavigationContainer>
        <Text>Mi aplicacion</Text>
        <DrawerNavigation/>
    </NavigationContainer>  
    
  );
}