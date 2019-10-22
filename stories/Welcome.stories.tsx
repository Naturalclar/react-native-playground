import React from 'react';
import {View, Text} from 'react-native';

export default {
  title: 'Welcome',
};

export const toStorybook = () => (
  <View>
    <Text>Hello World!</Text>
  </View>
);

toStorybook.story = {
  name: 'to Storybook',
};
