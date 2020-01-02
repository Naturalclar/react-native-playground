import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Example} from './Example';

const TabNavigator = createBottomTabNavigator(
  {
    First: {screen: Example},
    Second: {screen: Example},
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: 'transparent',
      },
    },
  },
);

export const Navigator = createAppContainer(TabNavigator);
