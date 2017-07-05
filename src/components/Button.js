/**
 * Button component
 */

import React, { Component } from 'react';
import {
  StyleSheet,      
  Text,            
  TouchableOpacity, 
  View              
} from 'react-native';

export default class Button extends Component {
  render({ onPress } = this.props) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.text}>{this.props.text.toUpperCase()}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  // Button container
  button: {
    borderRadius: 50,         
    borderWidth: 2,          
    borderColor: '#FFF',   
    paddingHorizontal: 100,    
    paddingVertical: 20,      
  },
  // Button text
  text: {
    color: '#FFF',
    fontWeight: 'bold',
    fontFamily: 'Avenir',
  },
});