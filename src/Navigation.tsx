import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Example} from './Example';
import {TestModule} from './TestModule';

const Tab = createBottomTabNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="First" component={Example} />
        <Tab.Screen name="Second" component={TestModule} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
