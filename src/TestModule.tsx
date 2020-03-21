import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, Text} from 'react-native';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

const styles = StyleSheet.create({
  container: {flex: 1},
});

export const TestModule = () => {
  useEffect(() => {
    PushNotificationIOS.checkPermissions(result => {
      console.warn(result);
    });
    PushNotificationIOS.requestPermissions();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={async () => {
          PushNotificationIOS.scheduleLocalNotification({
            alertBody: 'Test Local Notification',
            fireDate: new Date().toISOString(),
          });
        }}>
        <Text>Press Me!</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={async () => {
          console.warn(await PushNotificationIOS.getInitialNotification());
        }}>
        <Text>Get getInitialNotification</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
