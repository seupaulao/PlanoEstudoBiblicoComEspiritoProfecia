import React, { PropsWithChildren, useEffect, useState } from "react";
import {StyleSheet, Text, View} from "react-native";

import Item from "./item";
import { Link } from "expo-router";
import { recuperarValor } from "./planos";

type MesCabecalhoProps = PropsWithChildren<{
  texto: string;
  mes: any[];
}>;

export default function MesCabecalho({texto, mes}: MesCabecalhoProps) {
 
  const [meuEstilo, setMeuEstilo] = useState(estilo.caixa);
  //const [ch, setCh] = useState([]);
  const getChave = (mes: string, dia: string) => {
    return mes+"_"+dia;
  }

  useEffect(() => {
    recuperarEstilo("JAN_9");
  }, []);

  const zerar = () => {
   // setCh([]);
   // setEstilos([]);
    console.log('foi chamado??')
  }


  function recuperarEstilo(chave: string): import("react-native").StyleProp<import("react-native").TextStyle> {

    //TODO problema eh que o valor armazenado eh assincrono e vem de uma promessa, e esse valor
    //nao chega em tempo de execucao na variavel
    const valor = recuperarValor(chave);
   // let estilocurr: any ;
    valor.then( (x) => {
      if ( x.length <= 0) {
        setMeuEstilo(estilo.caixa);
      } else {
        if (x.length < 2) {
          setMeuEstilo(estilo.caixaamarela);
        } else {
          setMeuEstilo(estilo.caixaverde);
        }
      }
    });

    return meuEstilo;
  }

   return(
    <>
        <Text style={{textAlign: "center"}}>{texto}</Text>
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
  caixa: {
    backgroundColor: "red", 
    textAlign: 'center',
    padding: 10,
    marginTop: 5,
    marginRight: 5,
    justifyContent: 'center',
    alignContent: 'flex-end',
  },
  caixaamarela: {
    backgroundColor: "yellow", 
    textAlign: 'center',
    padding: 10,
    marginTop: 5,
    marginRight: 5,
    justifyContent: 'center',
    alignContent: 'flex-end',
  },
  caixaverde: {
    backgroundColor: "green", 
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
