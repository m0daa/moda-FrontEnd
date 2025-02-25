import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Navbar from '../components/Navbar';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator tabBar={props => <Navbar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
}
