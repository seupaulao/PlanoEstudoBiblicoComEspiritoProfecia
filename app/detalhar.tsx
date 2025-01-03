import { Link, useLocalSearchParams, useNavigation, useRootNavigationState, useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View, } from "react-native";
import { getCapitulosBibliaPlano, getCapitulosESPlano, getNomeLivro, getSiglaESPlano, getTituloCapituloESPlano } from "./planos";

import { useState } from 'react';

//TODO usar mais Views - Melhorar apresentação dessa tela
//TODO substituir buttons por touchables ou Pressables [recomendado] - melhor ainda: faça seu proprio button
//TODO usar estilos para reduzir a complexidade dos styles fixos

export default function DetalharScreen() {
  //const router = useRouter();
  const [leuBiblia, setLeuBiblia] = useState(0);
  const [leuEP, setLeuEP] = useState(0);
  const navegacao = useNavigation();
  const params = useLocalSearchParams();
    const mes = params.mes;
    const dia = params.dia;
    const getChave = () => {
      return mes+"_"+dia;
    }
    return (
        <View style={{ margin: 10, flexWrap: 'wrap', alignContent: 'center', }}>
          <View style={styles.blocoLeitura}>
              <Text style={styles.fontDescricaoTitulo}>Bíblia </Text>
              <Text style={styles.fontDescricao}>Dia de estudo: {dia}/{mes}</Text>
              <Text style={styles.fontDescricao}>Texto Biblico: {getCapitulosBibliaPlano( getChave() )}</Text>
          </View>
          <Pressable style={leuBiblia == 0 ? styles.botaoazul : styles.botaoverde} onPress={() => {setLeuBiblia(1);}} ><Text style={styles.fontebotao}>{leuBiblia == 0 ? "Realizou o Estudo da Bíblia": "Lido!"}</Text></Pressable> 
          <View style={styles.blocoLeitura}>
              <Text style={styles.fontDescricaoTitulo}>Espirito de Profecia </Text>
              <Text style={styles.fontDescricao}>Capitulo: {getCapitulosESPlano( getChave() )}</Text> 
              <Text style={styles.fontDescricao}>Livro: {getNomeLivro( getSiglaESPlano( getChave() ))}</Text> 
              <Text style={styles.fontDescricao}>Titulo: {getTituloCapituloESPlano( getChave() )}</Text> 
          </View>
          <Pressable style={leuEP == 0 ? styles.botaoazul : styles.botaoverde} onPress={() => {setLeuEP(1);}} ><Text style={styles.fontebotao}>{leuEP == 0 ? "Realizou a Leitura do Espírito de Profecia": "Lido!"}</Text></Pressable>
          <Pressable style={styles.botaoazulforte} onPress={() => {navegacao.goBack()}} ><Text style={styles.fontebotaobranco}>Voltar</Text></Pressable>
        </View>
      );
}


const styles = StyleSheet.create({
  fontDescricaoTitulo: {
    textAlign: 'center' , fontSize: 24, marginBlockEnd: 20
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
    marginTop: 50
    
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

