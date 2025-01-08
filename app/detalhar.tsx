import { Link, useLocalSearchParams } from 'expo-router';
import { Pressable, StyleSheet, Text, View, } from "react-native";
import { getCapitulosBibliaPlano, getCapitulosESPlano, getNomeLivro, getSiglaESPlano, getTituloCapituloESPlano, gravarValor, recuperarValor } from "./planos";
import { useEffect, useState } from 'react';

import { router } from 'expo-router';

// import {
//   useNavigation,
// } from '@react-navigation/native';

//import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DetalharScreen() {

  const [leuBiblia, setLeuBiblia] = useState(0);
  const [leuEP, setLeuEP] = useState(0);

  // const navegacao = useNavigation();
  const params = useLocalSearchParams();
  
  const mes = params.mes;
  const dia = params.dia;

  const getChave = () => {
      return mes+"_"+dia;
  }
  useEffect(()=>getBanco(),[]);

  const getBanco = () => {
    const dado = recuperarValor( getChave() )
    dado.then(x => {
      if (x.indexOf('b') >= 0) 
      {
        setLeuBiblia(1);
      }
      if (x.indexOf('x') >= 0) 
      {
          setLeuEP(1);
      }
    });


  }

  const gravarLeituraBiblia = () => {
      if (leuBiblia == 0) {
        setLeuBiblia(1);
        const dado = recuperarValor( getChave() );
        dado.then(x => {
           if (x.length <= 0) {
              gravarValor( getChave(), "b" );
           } else {
              gravarValor(getChave(), x + "b")
           } 
        });  
      }
   }

  const gravarLeituraEP = () => {
    if (leuEP == 0) {
      setLeuEP(1);
      const dado = recuperarValor( getChave() );
        dado.then(x => {
           if (x.length <= 0) {
              gravarValor( getChave(), "x" );
           } else {
              gravarValor(getChave(), x + "x")
           } 
      });  
    }
}

const voltar = () => {
    router.replace('/home');
}

    return (
        <View style={ styles.container }>
          <View style={styles.blocoLeitura}>
              <Text style={styles.fontDescricaoTitulo}>Bíblia </Text>
              <Text style={styles.fontDescricao}>Dia de estudo: {dia}/{mes}</Text>
              <Text style={styles.fontDescricao}>Texto Biblico: {getCapitulosBibliaPlano( getChave() )}</Text>
          </View>
          <Pressable style={leuBiblia == 0 ? styles.botaoazul : styles.botaoverde} onPress={() => { gravarLeituraBiblia() }} ><Text style={styles.fontebotao}>{leuBiblia == 0 ? "Realizou o Estudo da Bíblia": "Lido!"}</Text></Pressable> 
          <View style={styles.blocoLeitura}>
              <Text style={styles.fontDescricaoTitulo}>Espirito de Profecia </Text>
              <Text style={styles.fontDescricao}>Capitulo: {getCapitulosESPlano( getChave() )}</Text> 
              <Text style={styles.fontDescricao}>Livro: {getNomeLivro( getSiglaESPlano( getChave() ))}</Text> 
              <Text style={styles.fontDescricao}>Titulo: {getTituloCapituloESPlano( getChave() )}</Text> 
          </View>
          <Pressable style={leuEP == 0 ? styles.botaoazul : styles.botaoverde} onPress={() => { gravarLeituraEP() }} ><Text style={styles.fontebotao}>{leuEP == 0 ? "Realizou a Leitura do Espírito de Profecia": "Lido!"}</Text></Pressable>
          <Pressable style={styles.botaoazulforte} onPress={() => {voltar()}} ><Text style={styles.fontebotaobranco}>Voltar</Text></Pressable>
        </View>
      );
}


const styles = StyleSheet.create({
  container: {
    margin: 10,  alignContent: 'center', flexDirection: 'column', justifyContent: 'center'
  },
  fontDescricaoTitulo: {
    textAlign: 'center' , fontSize: 24, marginBlockEnd: 20, fontWeight: 'bold'
  },
  fontDescricao: {
    textAlign: 'left' , fontSize: 18, marginBlockStart: 10
  },
  blocoLeitura: {
    marginTop: 15
  }, 
  fontebotao: {
      fontSize: 16,
      textAlign: 'center'
  },
  fontebotaobranco: {
    fontSize: 16,
    textAlign: 'center',
    color: "white"
},
  botaoazul: {
    backgroundColor: '#0000cc35',
    color: '#ffffff',
    padding: 15,
    marginTop: 50,
    justifyContent: 'center'
    
  },
  botaoazulforte: {
    backgroundColor: '#0000cccc',
    color: '#ffffff',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 10
  },
  botaoverde: {
    backgroundColor: '#00bb0035',
    color: '#ffffff',
    padding: 15,
    marginTop: 50
  }

});

