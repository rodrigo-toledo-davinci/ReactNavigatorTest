import 'react-native-gesture-handler';
import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from "../screens/ProfileScreen";
import SettingScreen from "../screens/SettingScreen";

const Drawer = createDrawerNavigator();

export function DrawerNavigation(){

    return(

        <Drawer.Navigator>
            <Drawer.Screen name='ProfileScreen' component={ ProfileScreen } />
            <Drawer.Screen name='SettingScreen' component={ SettingScreen } />

        </Drawer.Navigator>

    )

}