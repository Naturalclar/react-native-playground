/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import {StatusBar, Alert} from 'react-native';

import {Navigator} from './Navigation';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

const App = () => {
  const onRegister = (token: string) => {
    Alert.alert('Device Registered', `Token: ${token}`);
  };
  useEffect(() => {
    PushNotificationIOS.addEventListener('register', onRegister);
    return PushNotificationIOS.removeEventListener('register', onRegister);
  });
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Navigator />
    </>
  );
};

export default App;
