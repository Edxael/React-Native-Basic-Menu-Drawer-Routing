import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import AboutView from './AboutView';
import HomeView from './HomeView';
import DashboardView from './DashboardView';

const Drawer = createDrawerNavigator();

const ViewsRouting = () => {
  return (
    <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeView} />
            <Drawer.Screen name="About" component={AboutView} />
            <Drawer.Screen name="Dashboard" component={DashboardView} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default ViewsRouting;