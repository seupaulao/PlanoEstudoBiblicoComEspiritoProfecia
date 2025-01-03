import { Button, Text, View } from "react-native";
import { getCapitulosBibliaPlano, getCapitulosESPlano, getNomeLivro, getSiglaESPlano, getTituloCapituloESPlano } from "./planos";

import { useNavigation } from "expo-router";

export default function DetalharScreen(props: { route: { params: { mes: string; dia: string; }; }; }) {
    const navigation = useNavigation();
    const { mes, dia } = props.route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around', marginTop: 8 }}>
          <Text>Details Screen</Text>
          <Text>MES: {JSON.stringify(mes.substring(0,3))}</Text>
          <Text>Dia: {dia}</Text>
          <Text>Chave: {mes.substring(0,3)+"_"+dia}</Text>
          <Text>Texto Biblico: {getCapitulosBibliaPlano( mes.substring(0,3)+"_"+dia )}</Text>
          <Button title="Realizou Leitura Biblia" onPress={() => {}} /> 
          <Text>Capitulos Espirito Profecia: {getCapitulosESPlano( mes.substring(0,3)+"_"+dia )}</Text> 
          <Text>Livro Espirito Profecia: {getNomeLivro( getSiglaESPlano( mes.substring(0,3)+"_"+dia ))}</Text> 
          <Text>Titulo Capitulo Espirito Profecia: {getTituloCapituloESPlano( mes.substring(0,3)+"_"+dia )}</Text> 
          <Button title="Realizou Leitura do Espírito de Profecia" onPress={() => {}} />
          <Button title=">Go to Home" onPress={() => navigation.goBack()} />
        </View>
      );
}