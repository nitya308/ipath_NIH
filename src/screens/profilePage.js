import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions, ScrollView, Modal, Pressable } from 'react-native';
import { connect, useSelector } from 'react-redux';
import Bookmark from '../assets/icons/bookmarkwhite.svg';
import Bell from '../assets/icons/bell.svg';
import LogOutIcon from '../assets/icons/logout.svg';
import Notifications from '../components/profile/notifications';
import Close from '../assets/icons/close.svg';
import SavedTreatments from '../components/profile/saved-treatments';
import { logoutUser } from '../actions/index';
import { fetchFirstName, fetchSavedTreatments, fetchTreatments } from '../actions';

import firebase from '../services/datastore';
import { SafeAreaView } from 'react-native-safe-area-context';
const auth = firebase.auth();
function ProfilePage(props) {
  const user = useSelector((state) => state.user)
  const [nextPage, setNextPage] = useState(0);
  const [scrollRef, setScrollRef] = useState(null);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);

  useEffect(() => {
    const fetch1 = async () => { fetchTreatments(); }
    const fetch2 = async () => { fetchSavedTreatments(user.userId); }
    const firstName = async () => { fetchFirstName(user.userId); }
    firstName();
    fetch1();
    fetch2();
  }, [])

  const firstNameValue = useSelector((state) => state.user.firstName);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      props.logoutUser();
    } catch (error) {
      alert.log(error);
    }
  };

  const scroll = () => {
    if (scrollRef) {
      scrollRef.scrollToEnd();
    }
  }

  return (
    <SafeAreaView>
      <ScrollView horizontal={true} pagingEnabled={true} ref={(ref) => { setScrollRef(ref) }}>
        <View style={styles.container}>
          <Text style={styles.name}>{firstNameValue}</Text>
          <Text style={styles.email}>{user.userEmail}</Text>
          <TouchableHighlight underlayColor="gray" style={styles.touchable} onPress={() => { setNextPage(1); scroll() }}>
            <View style={styles.button}>
              <Bookmark strokeColor="#000000" style={styles.icon} />
              <Text style={styles.buttonText}>Saved Treatments</Text>
            </View>
          </TouchableHighlight >
          <TouchableHighlight underlayColor="gray" style={styles.touchable} onPress={() => { setNextPage(2); scroll(); }} >
            <View style={styles.button}>
              <Bell strokeColor="#FFFFFF" style={styles.icon} />
              <Text style={styles.buttonText}>Notifications</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="gray" style={styles.touchable} onPress={() => setLogoutModalVisible(true)}>
            <View style={styles.button}>
              <LogOutIcon strokeColor="#FFFFFF" style={styles.icon} />
              <Text style={styles.buttonText}>Log Out?</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.container}>
          {nextPage === 1 ? <SavedTreatments /> : nextPage === 2 ? <Notifications /> : null}
        </View>
        <Modal animationType="none" visible={logoutModalVisible} onRequestClose={() => setLogoutModalVisible(!logoutModalVisible)}>
          <View style={styles.modal}>
            <Pressable style={styles.close} onPress={() => { setLogoutModalVisible(!logoutModalVisible) }}>
              <Close></Close>
            </Pressable>
            <Text style={styles.modalHeader}>Log Out?</Text>
            <Text style={styles.modalText}>Are you sure you want to log out?</Text>
            <TouchableHighlight underlayColor="gray" style={styles.modalbuttons} onPress={() => { setLogoutModalVisible(!logoutModalVisible) }}>
              <View style={[styles.modalbutton, {backgroundColor: "#E9E9FA"}]}>
                <Text style={[styles.modalbuttonText, {color: "#545454"}]}>Cancel</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="gray" style={styles.modalbuttons} onPress={handleSignOut}>
              <View style={styles.modalbutton}>
                <Text style={styles.modalbuttonText}>Log Out?</Text>
              </View>
            </TouchableHighlight>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
}
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
    marginTop: 10,
    flex: 1,
    alignItems: 'center',
    width: windowWidth,
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 30
  },
  email: {
    marginTop: 10,
    fontStyle: 'italic',
    fontSize: 15
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  description: {
    fontStyle: 'italic',
    fontSize: 18,
    padding: 15
  },
  touchable: {
    height: 48,
    width: 311,
    marginTop: 25,
    borderRadius: 10
  },
  close: {
    position: 'absolute',
    right: 5,
    top: 5,
  },
  button: {
    flex: 0,
    flexDirection: 'row',
    backgroundColor: '#5451F8',
    height: 50,
    width: 311,
    alignItems: 'center',
    borderRadius: 10
  },
  icon: {
    marginLeft: 20
  },
  buttonText: {
    fontWeight: 'bold',
    marginLeft: 20,
    color: "#FFFFFF",
    fontSize: 18,
  },
  modal: {
    margin: 20,
    marginVertical: 200,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalHeader: {
    fontFamily: 'Poppins-Bold',
    fontSize: 25,
    paddingVertical: 20,
  },
  modalText: {
    fontSize: 20,
    padding: 10,
    textAlign: 'center'
  },
  modalbuttons: {
    height: 48,
    width: 311,
    marginVertical: 15,
    borderRadius: 50,
    alignItems: 'center'
  },
  modalbutton: {
    backgroundColor: '#5451F8',
    height: 50,
    width: 250,
    alignItems: 'center',
    borderRadius: 50
  },
  modalbuttonText: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: "#FFFFFF",
    fontSize: 18,
    lineHeight: 50,
  },
});


export default connect(null, { logoutUser, fetchFirstName, fetchSavedTreatments, fetchTreatments })(ProfilePage);