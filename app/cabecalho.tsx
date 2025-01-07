import React, { PropsWithChildren } from "react";
import {StyleSheet, Text, View} from "react-native";

import Item from "./item";

type MesCabecalhoProps = PropsWithChildren<{
  texto: string;
  mes: any[];
}>;

export default function MesCabecalho({texto, mes}: MesCabecalhoProps) {
 
   return(
    <>

        <Text style={{textAlign: "center", fontWeight: 'bold'}}>{texto}</Text>
        <View style={estilo.container}>
          {mes.map((valor, index) => <Item  dia={valor.dia} mes={texto.substring(0,3)} key={index}/>   )}
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
  
  fonteDia: {
    fontSize: 16, 
    textAlign: "center"
  }
});
