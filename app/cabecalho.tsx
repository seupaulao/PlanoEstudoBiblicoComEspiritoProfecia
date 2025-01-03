import { Link, useNavigation } from "expo-router";
import React, { PropsWithChildren } from "react";
import {Text, TouchableOpacity, View} from "react-native";

//import { getCapitulosBibliaPlano, getNomeLivro } from "./planos";

type MesCabecalhoProps = PropsWithChildren<{
  texto: string;
  mes: any[];
}>;

//TODO corrigir a navegação para o padrão EXPO
export default function MesCabecalho({texto, mes}: MesCabecalhoProps) {
  const navigation = useNavigation();
   return(
    <>
        <Text style={{textAlign: "center"}}>{texto}</Text>
        <View style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          marginTop: 15,
        }}>
          {mes.map((valor, index) => 
            <Link 
            key={index}
           // onPress={() => navigation.navigate("Detalhar", {mes: texto, dia: valor.dia})}
            href={{pathname: '/detalhar', params: {mes: texto.substring(0,3), dia: valor.dia}}}
            style={{
            //width: 50, 
            //height: 50, 
            backgroundColor: "red", 
            textAlign: 'center',
            padding: 10,
            marginTop: 5,
            marginRight: 5,
            justifyContent: 'center',
            alignContent: 'flex-end',
            
}}>
              <Text style={{fontSize: 16, textAlign: "center"}}>
                { valor.dia.toString().length > 1 ? valor.dia : "0"+valor.dia.toString()}
                </Text>
            </Link>  )}
        </View>
   
         
    </>
   );
}

