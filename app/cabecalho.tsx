import React, { PropsWithChildren } from "react";
import {Text, TouchableOpacity, View} from "react-native";

import { useNavigation } from "expo-router";

//import { getCapitulosBibliaPlano, getNomeLivro } from "./planos";

type MesCabecalhoProps = PropsWithChildren<{
  texto: string;
  mes: any[];
}>;
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
          {mes.map(valor => 
            <TouchableOpacity 
            onPress={() => navigation.navigate("Detalhar", {mes: texto, dia: valor.dia})}
            style={{width: 50, 
            height: 50, backgroundColor: "red", 
            marginTop: 8, alignContent: "center", 
            alignItems: "center", 
            justifyContent: "center"}}>
              <Text style={{fontSize: 16, textAlign: "center"}}>
                {valor.dia}
                </Text>
            </TouchableOpacity>  )}
        </View>
   
         
    </>
   );
}

