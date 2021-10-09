import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HamburgerIcon, InfoOutlineIcon } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import Form from '../screens/Form';
import FuncButton from '../screens/FuncButton';

const Tab = createBottomTabNavigator();

const Tabs = () => {
   return (
      <Tab.Navigator
         screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
         }}
      >
         <Tab.Screen
            name='Form'
            component={Form}
            options={{
               tabBarIcon: ({ color, focused }) => (
                  <HamburgerIcon
                     name={focused ? 'clipboard' : 'clipboard-outline'}
                     size={5}
                     color={color}
                  />
               ),
            }}
         />
         <Tab.Screen
            name='FuncButton'
            component={FuncButton}
            options={{
               tabBarIcon: ({ color, focused }) => (
                  <InfoOutlineIcon
                     name={focused ? 'clipboard' : 'clipboard-outline'}
                     size={5}
                     color={color}
                  />
               ),
            }}
         />
      </Tab.Navigator>
   );
};

export default Tabs;

const styles = StyleSheet.create({});
