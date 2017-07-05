import React, { Component } from 'react';
import {
  StyleSheet,  
  Text,
  Image,
  Dimensions,        
  View          
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../components/Button';
import Swiper from '../components/Swiper';

const { width, height } = Dimensions.get('window');

export default class Screens extends Component {
  render() {
  return (
    <Swiper>
      {/* First screen */}
      <View style={[styles.slide, { backgroundColor: '#3F51B5' }]}>
        <Image style={styles.image01}   source={require('../img/profile.png')}/>
        <Text style={styles.header}>Onboarding</Text>
        <Text style={styles.text}>Uma ótima maneira de introduzir e explicar para o usuário a funcionalidade do aplicativo.</Text>
        <Text style={styles.text}></Text>
      </View>
      <View style={[styles.slide, { backgroundColor: '#0a65d6' }]}>
        <Image style={styles.image02}   source={require('../img/reactnative.png')}/>
        <Text style={styles.header}>React Native</Text>
        <Text style={styles.text}>Permitindo escrever apenas uma vez, para ambas as plataformas</Text>
      </View>
      <View style={[styles.slide, { backgroundColor: '#d60a0a' }]}>
        <Image style={styles.image03}  source={require('../img/free.png')}/>
        <Text style={styles.textDois}>Aproveitei o Tema Livre para criar o Onboarding, com um design um pouco diferente. </Text>
        <Image style={styles.logos}>
        <Icon name="logo-apple" {...iconStylesMac} />
        <Text>            </Text>
        <Icon name="logo-android" {...iconStylesAndroid} />
        </Image>
      </View>
    </Swiper>
  );
}
}

const iconStylesAndroid = {
  size: 75,
  color: '#a4c639',
};
const iconStylesMac = {
  size: 75,
  color: '#FFF',
};

const styles = StyleSheet.create({
  logos: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
  },
  slide: {
    flex: 1,                
    justifyContent: 'center',   
    alignItems: 'center',       
  },
  header: {
    top: -40,
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  textOnboarding: {
    color: '#FFF',
    fontFamily: 'Avenir',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 40,
    textAlign: 'center',
  },
  text: {
    top: -30,
    color: '#FFF',
    fontFamily: 'Avenir',
    fontSize: 18,
    marginHorizontal: 40,
    textAlign: 'center',
  },
  textDois: {
    top: -60,
    color: '#FFF',
    fontFamily: 'Avenir',
    fontSize: 18,
    marginHorizontal: 40,
    textAlign: 'center',
  },
  image01: {
    top: -100,
    height: 150,
    width: 150,
    borderRadius: 75,
    backgroundColor: '#3F51B5',
  },
  image02: {
    top: -200,
    height: 150,
    width: width,
    borderRadius: 0,
    backgroundColor: '#3F51B5',
  },
  image03: {
    top: -140,
    height: 150,
    width: 150,
    borderRadius: 5,
    backgroundColor: '#d60a0a',
  },
});