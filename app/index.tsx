import * as React from 'react';

import DetalharScreen from './detalhar';
import HomeScreen from './home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Pilha = createNativeStackNavigator();

export default function Index() {
   return (
 
      <Pilha.Navigator initialRouteName='Home'>
        <Pilha.Screen name="Home" component={HomeScreen} />
        <Pilha.Screen name="Detalhar" component={DetalharScreen} />     
      </Pilha.Navigator>
  
   );
 
}
