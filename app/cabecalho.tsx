import { Button, Text, View } from "react-native";
import React, { PropsWithChildren } from "react";

type MesCabecalhoProps = PropsWithChildren<{
  texto: string;
  // values: string[];
  // selectedValue: string;
  // setSelectedValue: (value: string) => void;
}>;
export default function MesCabecalho({texto, children}: MesCabecalhoProps) {
   return(
    <>
        <Text style={{textAlign: "center"}}>{texto}</Text>
        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 8,
    backgroundColor: 'aliceblue',
        }}>
            <View style={{width: 100, height: 50, backgroundColor: 'powderblue'}}><Text>Dia</Text></View>
            <View style={{width: 100, height: 50, backgroundColor: 'powderblue'}}><Text>&nbsp;</Text></View>
            <View style={{width: 200, height: 50, backgroundColor: 'powderblue'}}><Text>Livro, Capítulos e Versículos</Text></View>
            <View style={{width: 100, height: 50, backgroundColor: 'powderblue'}}><Text>&nbsp;</Text></View>
            <View style={{width: 100, height: 50, backgroundColor: 'powderblue'}}><Text>Livro EP</Text></View>
            <View style={{width: 100, height: 50, backgroundColor: 'powderblue'}}><Text>Capítulo</Text></View>
            <View style={{width: 200, height: 50, backgroundColor: 'powderblue'}}><Text>Espírito de Profecia</Text></View>
        </View>
   

        {children}
         
    </>
   );
}

