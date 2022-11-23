import React from 'react';
import { StyleSheet, Text, Image, View, TouchableWithoutFeedback, TextComponent, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const windowHeight = Dimensions.get('window').height;

function SwiperComponent(props, { navigation }) {
  return (
    <View style={windowHeight > 670 ? styles.bigBorderSwiper : styles.borderSwiper}>
      <Swiper style={styles.wrapper}
        showsButtons={false}
        autoplay={true}
        autoplayTimeout={5}
        loop={true}
        paginationStyle={styles.paginate}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}>
        <View style={styles.slides}>
          <Text style={windowHeight > 670 ? styles.bigText :styles.text}>Depression is more common than you might think – especially for cancer patients. 1 in 4 adults with cancer experience symptoms of depression, but the good  news is it can be managed!</Text>
        </View>
        <View style={styles.slides}>
          <Text style={windowHeight > 670 ? styles.bigText :styles.text}>There’s a treatment out there for everyone. Some people prefer to meet with a physician while others like to receive care in a self-guided way. Learn more about treatment types in the “Learn” tab. </Text>
        </View>
        <View style={styles.slides}>
          <Text style={windowHeight > 670 ? styles.bigText :styles.text}>It can be overwhelming to sift through so many treatment options. That’s where iPath can help! Set your preferences and browse options that might work for you under the “Treatments” tab.</Text>
        </View>
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 10,
  },
  slides: {
    flex: 1,
    fontFamily: 'Poppins-Medium',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#5451F8',
    borderRadius: 10,
    margin: 5
  },
  text: {
    color: '#FCFCFF',
    fontSize: 11,
    fontFamily: 'Poppins-Medium',
    margin: 15,
    marginBottom: 20,
  },
  bigText: {
    color: '#FCFCFF',
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    margin: 20,
  },
  borderSwiper: {
    borderRadius: 20,
    height: 120,
  },
  bigBorderSwiper: {
    borderRadius: 20,
    height: 180,
  },
  dot: {
    backgroundColor: '#FCFCFF',
  },
  activeDot: {
    backgroundColor: '#5451F8',
    borderWidth: 1,
    borderColor: '#FCFCFF',
  },
  paginate: {
    position: 'absolute',
    bottom: 20,
    right: 0,
  }
});

export default SwiperComponent;