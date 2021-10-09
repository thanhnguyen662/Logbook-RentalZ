import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/navigations/Tabs';

const Stack = createStackNavigator();

// Color Switch Component

const App = () => {
   return (
      <NativeBaseProvider>
         <SafeAreaProvider>
            <NavigationContainer>
               <Stack.Navigator
                  screenOptions={{ headerShown: false }}
                  initialRouteName='Tabs'
               >
                  <Stack.Screen name='Tabs' component={Tabs} />
               </Stack.Navigator>
            </NavigationContainer>
         </SafeAreaProvider>
      </NativeBaseProvider>
   );
};
export default App;
