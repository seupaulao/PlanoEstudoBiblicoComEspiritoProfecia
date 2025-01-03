import { Link, useLocalSearchParams, useNavigation, useRootNavigationState, useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from "react-native";
import { getCapitulosBibliaPlano, getCapitulosESPlano, getNomeLivro, getSiglaESPlano, getTituloCapituloESPlano } from "./planos";

//TODO usar mais Views - Melhorar apresentação dessa tela
//TODO substituir buttons por touchables ou Pressables [recomendado] - melhor ainda: faça seu proprio button
//TODO usar estilos para reduzir a complexidade dos styles fixos

export default function DetalharScreen() {
  //const router = useRouter();
  const navegacao = useNavigation();
  const params = useLocalSearchParams();
    const mes = params.mes;
    const dia = params.dia;
    const getChave = () => {
      return mes+"_"+dia;
    }
    return (
        <View style={{ flex: 1 }}>
           <Text style={{textAlign: 'center'}}>Dia de estudo: {dia}/{mes}</Text>
          <Text style={{textAlign: 'center'}}>Texto Biblico: {getCapitulosBibliaPlano( getChave() )}</Text>
          <Pressable style={styles.botaoazul} onPress={() => {}} ><Text style={styles.fontebotao}>Realizou o Estudo da Bíblia</Text></Pressable> 
          <Text style={{textAlign: 'center'}}>Capitulos Espirito Profecia: {getCapitulosESPlano( getChave() )}</Text> 
          <Text style={{textAlign: 'center'}}>Livro Espirito Profecia: {getNomeLivro( getSiglaESPlano( getChave() ))}</Text> 
          <Text style={{textAlign: 'center'}}>Titulo Capitulo Espirito Profecia: {getTituloCapituloESPlano( getChave() )}</Text> 
          <Pressable style={styles.botaoverde} onPress={() => {}} ><Text style={styles.fontebotao}>Realizou a Leitura do espírito de profecia</Text></Pressable>
          <Pressable style={styles.botaoazulforte} onPress={() => {navegacao.goBack()}} ><Text style={styles.fontebotaobranco}>Voltar</Text></Pressable>
        </View>
      );
}


const styles = StyleSheet.create({
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
    padding: 15
  },
  botaoazulforte: {
    backgroundColor: '#0000cccc',
    color: '#ffffff',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  botaoverde: {
    backgroundColor: '#00bb0035',
    color: '#ffffff',
    padding: 15
  }

});