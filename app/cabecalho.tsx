import React, { PropsWithChildren } from "react";
import {StyleSheet, Text, View} from "react-native";

import { Link } from "expo-router";

type MesCabecalhoProps = PropsWithChildren<{
  texto: string;
  mes: any[];
}>;

export default function MesCabecalho({texto, mes}: MesCabecalhoProps) {

   return(
    <>
        <Text style={{textAlign: "center"}}>{texto}</Text>
        <View style={estilo.container}>
          {mes.map((valor, index) => 
            <Link 
            key={index}
            href={{pathname: '/detalhar', params: {mes: texto.substring(0,3), dia: valor.dia}}}
            style={estilo.caixa}>
              <Text style={estilo.fonteDia}>
                { valor.dia.toString().length > 1 ? valor.dia : "0"+valor.dia.toString()}
                </Text>
            </Link>  )}
        </View>
    </>
   );
}

const estilo = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: 15,
  },
  caixa: {
    backgroundColor: "red", 
    textAlign: 'center',
    padding: 10,
    marginTop: 5,
    marginRight: 5,
    justifyContent: 'center',
    alignContent: 'flex-end',
  },
  fonteDia: {
    fontSize: 16, 
    textAlign: "center"
  }
});
