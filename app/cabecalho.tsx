import React, { PropsWithChildren } from "react";
import {Text, View} from "react-native";

type MesCabecalhoProps = PropsWithChildren<{
  texto: string;
  mes: any[];
}>;
export default function MesCabecalho({texto, mes}: MesCabecalhoProps) {
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
            <View style={{width: 50, 
            height: 50, backgroundColor: "red", 
            marginTop: 8, alignContent: "center", 
            alignItems: "center", 
            justifyContent: "center"}}>
              <Text style={{fontSize: 16, textAlign: "center"}}>
                {valor.dia}
                </Text>
            </View>  )}
        </View>
   
         
    </>
   );
}

