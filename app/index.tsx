import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './home';
import { Link } from 'expo-router';

// import DetalharScreen from './detalhar';
// import HomeScreen from './home';

// import {createNativeStackNavigator} from '@react-navigation/native-stack';


//const Pilha = createNativeStackNavigator();

//TODO corrigir a navegação e a passagem de parametros via typescript para o tipo que nao dê erro
export default function Index() {
   return (
 
       <HomeScreen />
  
   );
}

const estilo = StyleSheet.create({
   button: {
      width: 100, 
      height: 25, 
      backgroundColor: '#0000dd55', 
      textAlign: 'center', 
      alignItems: 'center', 
      fontSize: 16
   }
})