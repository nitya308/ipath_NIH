import * as Notifications from "expo-notifications";
import * as Device from 'expo-device';
const identifier = null;
const identifier2 = null;

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export async function schedulePushNotification() {
  try{
  identifier = await Notifications.scheduleNotificationAsync({
    content: {
      title: 'It’s been two weeks!',
      body: 'Let’s check in to see how things are going. Take the survey and compare your score to your previous one',
    },
    trigger: {
      seconds: 1209600,
      repeats: true
    },
  });
} catch{}
}

export async function surveyFinishedReminder() {
  console.log("scheduling reminder");
  identifier2 = await Notifications.scheduleNotificationAsync({
    content: {
      title: 'You left mid-survey',
      body: 'Finish the questions',
    },
    trigger: {
      seconds: 300,
    },
  });
}

export async function cancelPushNotifications() {
  console.log("cancelling");
  if (identifier != null) await Notifications.cancelScheduledNotificationAsync(identifier);
  if (identifier2 != null) await Notifications.cancelScheduledNotificationAsync(identifier);
}

export async function registerForPushNotificationsAsync() {
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }
}