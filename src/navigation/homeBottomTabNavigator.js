import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Text} from 'react-native';
import Home from '../screens/Home';
import Camera from '../screens/Camera';

const Tab = createBottomTabNavigator();

const HomeBottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {
          backgroundColor: '#000',
        },
        activeTintColor: '#fff',
      }}>
      <Tab.Screen name={'Home'} component={Home} />

      <Tab.Screen name="Upload" component={Camera} />
    </Tab.Navigator>
  );
};

export default HomeBottomTabNavigator;
