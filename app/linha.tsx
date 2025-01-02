import { Button, Text, View } from "react-native";

import React from "react";

export function ItemEspirito(props: { 
    sigla: string | undefined; 
    capEspirito: string | undefined; 
    nomEspirito: string | undefined}) {
    return (
        <>
            <View style={{width: 100, height: 50, }}><Button title="Ler"></Button></View>
            <View style={{width: 100, height: 50, }}><Text>{props.sigla}</Text></View>
            <View style={{width: 100, height: 50, }}><Text>{props.capEspirito}</Text></View>
            <View style={{width: 200, height: 50, }}><Text>{props.nomEspirito}</Text></View>    
        </>
    );
}

export function ItemBiblia(props: { 
    capBiblia: string | undefined; 
   }) {
    return (
        <>
            <View style={{width: 100, height: 50, }}><Button title="Ler"></Button></View>
            <View style={{width: 200, height: 50, }}><Text>{props.capBiblia}</Text></View>
        </>
    );
}

export default function Linha(props: { dia: string | undefined; 
    capBiblia: string | undefined; 
    sigla: string | undefined; 
    capEspirito: string | undefined; 
    nomEspirito: string | undefined}) {
   return(
     <View style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 8,
        backgroundColor: '#cc0c0c0c',
            }}>
            <View style={{width: 100, height: 50, }}><Text>{props.dia}</Text></View>
            <ItemBiblia capBiblia={props.capBiblia}/> 
            <ItemEspirito sigla={props.sigla} capEspirito={props.capEspirito} nomEspirito={props.nomEspirito}/>   
    </View>
   );
}