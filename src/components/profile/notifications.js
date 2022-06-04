import React, { useState } from 'react';
import { View, StyleSheet, Text, Switch } from 'react-native';
import { Linking, NativeModules, Platform} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const { RNAndroidOpenSettings } = NativeModules;

const openAppSettings = () => {
  if (Platform.OS === 'ios') {
    Linking.openURL("app-settings:");
  } else {
    RNAndroidOpenSettings.appDetailsSettings();
  }
};

function Notifications(props) {
  const [notificationsOn, setNotificationsOn] = useState(false);
  const [soundsOn, setSoundsOn] = useState(false);
  const [badgesOn, setBadgesOn] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configure Notifications</Text>
      <TouchableHighlight style={styles.settingContainer} onPress={() => openAppSettings()}>
        <Text>Change Notifications preferences in settings</Text>
      </TouchableHighlight>
      {/* <View style={styles.settingContainer}>
        <Text>Sounds</Text>
        <Switch trackColor={{ false: 'gray', true: "#469C97" }}
          onChange={() => setSoundsOn(!soundsOn)}
          value={soundsOn}
        />
      </View>
      <View style={styles.settingContainer}>
        <Text>Badges</Text>
        <Switch trackColor={{ false: 'gray', true: "#469C97" }}
          onChange={() => setBadgesOn(!badgesOn)}
          value={badgesOn}
        />
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: "center",
    width: '100%',
    marginTop: 5,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 16,
    color: "#000",
    marginLeft: 5,
    fontWeight: "600",
  },
  settingContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    padding: 10,
    backgroundColor: '#E3EFF0',
    width: 311,
    height: 50,
    borderRadius: 10,
  }
})
export default Notifications;