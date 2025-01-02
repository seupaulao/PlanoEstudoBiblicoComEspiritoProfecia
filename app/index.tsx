import Linha from "./linha";
import MesCabecalho from "./cabecalho";
import { View } from "react-native";

export default function Index() {
  return (
    <View style={{padding: 10, flex: 1}}>
            <MesCabecalho texto="JANEIRO">
            <Linha dia="01" capBiblia="Salmos 1 a 2" sigla="PP" capEspirito="--" nomEspirito="Prefácio"/>
            <Linha dia="02" capBiblia="Salmos 4 a 6" sigla="PP" capEspirito="Cap. 01" nomEspirito="Porque foi permitido o pecado?"/>
            </MesCabecalho>
    </View>
  );
}
