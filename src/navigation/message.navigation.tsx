import { DrawerNavigationProp, createDrawerNavigator } from "@react-navigation/drawer";
import {Slide1, Slide2} from '../screens';
import * as React from 'react';

type MenuDrawerParam = {
    Slide1: undefined
    Slide2: undefined
}
type MenuScreenNavigation = DrawerNavigationProp<MenuDrawerParam, "Slide1">
export type MenuStackTypes ={
    navigation: MenuScreenNavigation
}

export function MenuDrawer(){
    const Drawer = createDrawerNavigator<MenuDrawerParam>();
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Slide1" component={Slide1} />
            <Drawer.Screen name="Slide2" component={Slide2} />
        </Drawer.Navigator>
    )
}