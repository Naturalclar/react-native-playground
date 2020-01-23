import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Example} from './Example';
import {TestModule} from './TestModule';

const TabNavigator = createBottomTabNavigator(
  {
    First: {screen: Example},
    Second: {screen: TestModule},
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
