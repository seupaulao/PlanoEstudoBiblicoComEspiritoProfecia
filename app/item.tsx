import {StyleSheet, Text} from "react-native";
import {useEffect, useState} from "react";

import { Link } from "expo-router";
import { recuperarValor } from "./planos";

export default function Item(props: any) {
    const [meuEstilo, setMeuEstilo] = useState(estilo.caixa); 


    function verificarBancoCor(): void {
         var dado = recuperarValor( props.mes + "_" + props.dia);
         dado.then((z)=>{
            if (z.length <= 0) {
              setMeuEstilo(estilo.caixa);
            } else {
              if (z.length > 1) {
                 setMeuEstilo(estilo.caixaverde);
              } else {
                setMeuEstilo(estilo.caixaamarela);
              }
            }
         });
    }

  useEffect(()=>fazerEfeito());

  const fazerEfeito = () => {

      verificarBancoCor();
  }

  function enviarESomar(): void {

       verificarBancoCor();
          
  }

    return (
    <Link 
                
                onPress={()=>enviarESomar()}
                href={{pathname: '/detalhar', params: {mes: props.mes, dia: props.dia}}}
                style={ meuEstilo }>
                  <Text style={estilo.fonteDia}>
                    { props.dia.toString().length > 1 ? props.dia : "0"+props.dia.toString()}
                    </Text>
                </Link>);
}


const estilo = StyleSheet.create({
 
  caixa: {
    backgroundColor: "red", 
    textAlign: 'center',
    padding: 10,
    paddingTop: 15,
    marginTop: 5,
    marginRight: 5,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignContent: 'flex-end',
  },
  caixaamarela: {
    backgroundColor: "yellow", 
    textAlign: 'center',
    padding: 10,
    marginTop: 5,
    paddingTop: 15,
    marginRight: 5,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignContent: 'flex-end',
  },
  caixaverde: {
    backgroundColor: "green", 
    textAlign: 'center',
    padding: 12,
    paddingTop: 15,
    marginTop: 8,
    marginRight: 5,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignContent: 'flex-end',
  },
  fonteDia: {
    fontSize: 16, 
    textAlign: "center"
  }
});


