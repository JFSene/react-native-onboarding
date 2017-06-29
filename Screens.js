import React, { Component } from 'react';
import {
  StyleSheet,   // CSS-like styles
  Text,         // Renders text
  View          // Container component
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from './Button';
import Swiper from './Swiper';

export default class Screens extends Component {
  render() {
  return (
    <Swiper>
      {/* First screen */}
      <View style={[styles.slide, { backgroundColor: '#999999' }]}>
        <Icon name="logo-apple" {...iconStyles} />
        <Text style={styles.header}>iOS</Text>
        <Text style={styles.textMac}>This can be an iOS App!</Text>
      </View>
      {/* Second screen */}
      <View style={[styles.slide, { backgroundColor: '#0f9d58' }]}>
        <Icon name="logo-android" {...iconStyles} />
        <Text style={styles.header}>Android</Text>
        <Text style={styles.text}>This is an Android App</Text>
      </View>
      {/* Third screen */}
      <View style={[styles.slide, { backgroundColor: '#2E8DEF' }]}>
        <Icon name="logo-windows" {...iconStyles} />
        <Text style={styles.header}>Windows</Text>
        <Text style={styles.text}>Totaly written in a Windows 10 machine using Expo + Ract-Native</Text>
      </View>
    </Swiper>
  );
}
}

const iconStyles = {
  size: 100,
  color: '#ffffff',
};


const styles = StyleSheet.create({
  // Slide styles
  slide: {
    flex: 1,                    // Take up all screen
    justifyContent: 'center',   // Center vertically
    alignItems: 'center',       // Center horizontally
  },
  // Header styles
  header: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  // Text below header
  text: {
    color: '#FFF',
    fontFamily: 'Avenir',
    fontSize: 18,
    marginHorizontal: 40,
    textAlign: 'center',
  },
  textMac: {
    color: '#ffffff',
    fontFamily: 'Avenir',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 40,
    textAlign: 'center',
  },
});