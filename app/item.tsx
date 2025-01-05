import {StyleSheet, Text} from "react-native";

import { Link } from "expo-router";
import {useState} from "react";

export default function Item(props: any) {
    const [meuEstilo, setMeuEstilo] = useState(estilo.caixa); 
    const getChave = (mes: string, dia: string) => {
        return mes+"_"+dia;
      }
    return (
    <Link 
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