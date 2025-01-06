import {StyleSheet, Text} from "react-native";
import {useEffect, useState} from "react";

import { Link } from "expo-router";
import { recuperarValor } from "./planos";

export default function Item(props: any) {
    const [meuEstilo, setMeuEstilo] = useState(estilo.caixa); 
    const [cont, setCont] = useState(0);

    function verificarBancoCor(): void {
         console.log('Item.tsx -- useeffect');
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

    useEffect(()=>verificarBancoCor());

    return (
    <Link 
                onPress={()=>setCont(cont + 1)}
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


