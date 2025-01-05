import React, { PropsWithChildren, useEffect, useState } from "react";
import {StyleSheet, Text, View} from "react-native";

import { Link } from "expo-router";
import { recuperarValor } from "./planos";

type MesCabecalhoProps = PropsWithChildren<{
  texto: string;
  mes: any[];
}>;

export default function MesCabecalho({texto, mes}: MesCabecalhoProps) {
 
  const [estilos, setEstilos] = useState([]);
  const [ch, setCh] = useState([]);
  const getChave = (mes: string, dia: string) => {
    return mes+"_"+dia;
  }

  useEffect(() => {
    zerar()
  }, []);

  const zerar = () => {
    setCh([]);
    setEstilos([]);
    console.log('foi chamado??')
  }


  function recuperarEstilo(chave: string): import("react-native").StyleProp<import("react-native").TextStyle> {

    //TODO problema eh que o valor armazenado eh assincrono e vem de uma promessa, e esse valor
    //nao chega em tempo de execucao na variavel
    const valor = recuperarValor(chave);
    let estilocurr: any ;
    valor.then( (x) => {
      if ( x.length <= 0) {
        estilocurr = estilo.caixa;
      } else {
        if (x.length < 2) {
          estilocurr = estilo.caixaamarela;
        } else {
          estilocurr = estilo.caixaverde;
        }
      }
      estilos.push(estilocurr);
      ch.push(chave);
    });
    //console.log("Tambem Fez isso:", estilos.length, estilos);
  
    console.log(chave, estilos, ch); 

    //const vv = ch.findIndex(x => x == chave);

    //console.log(vv, estilos[vv]);

    return estilo.caixa;
  }

   return(
    <>
        <Text style={{textAlign: "center"}}>{texto}</Text>
        <View style={estilo.container}>
          {mes.map((valor, index) => 
            <Link 
            key={getChave(texto.substring(0,3), valor.dia)}
            href={{pathname: '/detalhar', params: {mes: texto.substring(0,3), dia: valor.dia}}}
            style={ recuperarEstilo(getChave(texto.substring(0,3), valor.dia)) }>
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
