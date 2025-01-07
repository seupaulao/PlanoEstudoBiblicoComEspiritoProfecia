import { Pressable, ScrollView, Text, View } from "react-native";
import React, { useState } from "react";

import MesCabecalho from "./cabecalho";
import { limparBase } from "./planos";

export default function HomeScreen () {
     const [contador, setContador] = useState(0);
     const janeiro = [{dia: 1},{dia: 2},{dia: 3},{dia: 4},{dia: 5},{dia: 6},{dia: 7},{dia: 8},{dia: 9},{dia: 10},{dia: 11},{dia: 12},{dia: 13},{dia: 14},{dia: 15},{dia: 16},{dia: 17},{dia: 18},{dia: 19},{dia: 20},{dia: 21},{dia: 22},{dia: 23},{dia: 24},{dia: 25},{dia: 26},{dia: 27},{dia: 28},{dia: 29},{dia: 30},{dia: 31}];
        const fevereiro = [{dia: 1},{dia: 2},{dia: 3},{dia: 4},{dia: 5},{dia: 6},{dia: 7},{dia: 8},{dia: 9},{dia: 10},{dia: 11},{dia: 12},{dia: 13},{dia: 14},{dia: 15},{dia: 16},{dia: 17},{dia: 18},{dia: 19},{dia: 20},{dia: 21},{dia: 22},{dia: 23},{dia: 24},{dia: 25},{dia: 26},{dia: 27},{dia: 28}];
        const marco = [{dia: 1},{dia: 2},{dia: 3},{dia: 4},{dia: 5},{dia: 6},{dia: 7},{dia: 8},{dia: 9},{dia: 10},{dia: 11},{dia: 12},{dia: 13},{dia: 14},{dia: 15},{dia: 16},{dia: 17},{dia: 18},{dia: 19},{dia: 20},{dia: 21},{dia: 22},{dia: 23},{dia: 24},{dia: 25},{dia: 26},{dia: 27},{dia: 28},{dia: 29},{dia: 30},{dia: 31}];
        const abril = [{dia: 1},{dia: 2},{dia: 3},{dia: 4},{dia: 5},{dia: 6},{dia: 7},{dia: 8},{dia: 9},{dia: 10},{dia: 11},{dia: 12},{dia: 13},{dia: 14},{dia: 15},{dia: 16},{dia: 17},{dia: 18},{dia: 19},{dia: 20},{dia: 21},{dia: 22},{dia: 23},{dia: 24},{dia: 25},{dia: 26},{dia: 27},{dia: 28},{dia: 29},{dia: 30}];
        const maio = [{dia: 1},{dia: 2},{dia: 3},{dia: 4},{dia: 5},{dia: 6},{dia: 7},{dia: 8},{dia: 9},{dia: 10},{dia: 11},{dia: 12},{dia: 13},{dia: 14},{dia: 15},{dia: 16},{dia: 17},{dia: 18},{dia: 19},{dia: 20},{dia: 21},{dia: 22},{dia: 23},{dia: 24},{dia: 25},{dia: 26},{dia: 27},{dia: 28},{dia: 29},{dia: 30},{dia: 31}];
        const junho = [{dia: 1},{dia: 2},{dia: 3},{dia: 4},{dia: 5},{dia: 6},{dia: 7},{dia: 8},{dia: 9},{dia: 10},{dia: 11},{dia: 12},{dia: 13},{dia: 14},{dia: 15},{dia: 16},{dia: 17},{dia: 18},{dia: 19},{dia: 20},{dia: 21},{dia: 22},{dia: 23},{dia: 24},{dia: 25},{dia: 26},{dia: 27},{dia: 28},{dia: 29},{dia: 30}];
        const julho = [{dia: 1},{dia: 2},{dia: 3},{dia: 4},{dia: 5},{dia: 6},{dia: 7},{dia: 8},{dia: 9},{dia: 10},{dia: 11},{dia: 12},{dia: 13},{dia: 14},{dia: 15},{dia: 16},{dia: 17},{dia: 18},{dia: 19},{dia: 20},{dia: 21},{dia: 22},{dia: 23},{dia: 24},{dia: 25},{dia: 26},{dia: 27},{dia: 28},{dia: 29},{dia: 30},{dia: 31}];
        const agosto = [{dia: 1},{dia: 2},{dia: 3},{dia: 4},{dia: 5},{dia: 6},{dia: 7},{dia: 8},{dia: 9},{dia: 10},{dia: 11},{dia: 12},{dia: 13},{dia: 14},{dia: 15},{dia: 16},{dia: 17},{dia: 18},{dia: 19},{dia: 20},{dia: 21},{dia: 22},{dia: 23},{dia: 24},{dia: 25},{dia: 26},{dia: 27},{dia: 28},{dia: 29},{dia: 30},{dia: 31}];
        const setembro = [{dia: 1},{dia: 2},{dia: 3},{dia: 4},{dia: 5},{dia: 6},{dia: 7},{dia: 8},{dia: 9},{dia: 10},{dia: 11},{dia: 12},{dia: 13},{dia: 14},{dia: 15},{dia: 16},{dia: 17},{dia: 18},{dia: 19},{dia: 20},{dia: 21},{dia: 22},{dia: 23},{dia: 24},{dia: 25},{dia: 26},{dia: 27},{dia: 28},{dia: 29},{dia: 30}];
        const outubro = [{dia: 1},{dia: 2},{dia: 3},{dia: 4},{dia: 5},{dia: 6},{dia: 7},{dia: 8},{dia: 9},{dia: 10},{dia: 11},{dia: 12},{dia: 13},{dia: 14},{dia: 15},{dia: 16},{dia: 17},{dia: 18},{dia: 19},{dia: 20},{dia: 21},{dia: 22},{dia: 23},{dia: 24},{dia: 25},{dia: 26},{dia: 27},{dia: 28},{dia: 29},{dia: 30},{dia: 31}];
        const novembro = [{dia: 1},{dia: 2},{dia: 3},{dia: 4},{dia: 5},{dia: 6},{dia: 7},{dia: 8},{dia: 9},{dia: 10},{dia: 11},{dia: 12},{dia: 13},{dia: 14},{dia: 15},{dia: 16},{dia: 17},{dia: 18},{dia: 19},{dia: 20},{dia: 21},{dia: 22},{dia: 23},{dia: 24},{dia: 25},{dia: 26},{dia: 27},{dia: 28},{dia: 29},{dia: 30}];
        const dezembro = [{dia: 1},{dia: 2},{dia: 3},{dia: 4},{dia: 5},{dia: 6},{dia: 7},{dia: 8},{dia: 9},{dia: 10},{dia: 11},{dia: 12},{dia: 13},{dia: 14},{dia: 15},{dia: 16},{dia: 17},{dia: 18},{dia: 19},{dia: 20},{dia: 21},{dia: 22},{dia: 23},{dia: 24},{dia: 25},{dia: 26},{dia: 27},{dia: 28},{dia: 29},{dia: 30},{dia: 31}];

        const reloadPage = () => {
          setContador(contador + 1);
          limparBase();

        }
        return (
            <>
                    

                    
            <View style={{marginBlockEnd: 20, marginBlockStart: 20}}>
            <Text style={{textAlign: 'center', fontSize: 18}}>Clique no dia para realizar o estudo</Text>
            </View>
            <ScrollView>
              <View style={{ padding: 15 }}>
                <MesCabecalho texto="JANEIRO" mes={janeiro} />
              </View>
              <View style={{ padding: 18 }}>
                <MesCabecalho texto="FEVEREIRO" mes={fevereiro} />
              </View>
              <View style={{ padding: 15 }}>
                <MesCabecalho texto="MARÇO" mes={marco} />
              </View>
              <View style={{ padding: 18 }}>
                <MesCabecalho texto="ABRIL" mes={abril} />
              </View>
              <View style={{ padding: 15 }}>
                <MesCabecalho texto="MAIO" mes={maio} />
              </View>
              <View style={{ padding: 18 }}>
                <MesCabecalho texto="JUNHO" mes={junho} />
              </View>
              <View style={{ padding: 15 }}>
                <MesCabecalho texto="JULHO" mes={julho} />
              </View>
              <View style={{ padding: 18 }}>
                <MesCabecalho texto="AGOSTO" mes={agosto} />
              </View>
              <View style={{ padding: 18 }}>
                <MesCabecalho texto="SETEMBRO" mes={setembro} />
              </View>
              <View style={{ padding: 15 }}>
                <MesCabecalho texto="OUTUBRO" mes={outubro} />
              </View>
              <View style={{ padding: 18 }}>
                <MesCabecalho texto="NOVEMBRO" mes={novembro} />
              </View>
              <View style={{ padding: 15 }}>
                <MesCabecalho texto="DEZEMBRO" mes={dezembro} />
              </View>
            </ScrollView>
            <Pressable style={{backgroundColor: "orange", margin: 20, padding: 10}} onPress={()=>reloadPage()}>
                <Text style={{textAlign: 'center'}}>Apagar Base</Text>
            </Pressable>
            </>
          );
}