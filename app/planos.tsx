import AsyncStorage from '@react-native-async-storage/async-storage';

const livrosstring = '{"PP": "Patriarcas e Profetas","PR": "Profetas e Reis", "AA": "Atos dos Apóstolos", "DTD": "O Desejado de Todas as Nações", "PJ": "Parábolas de Jesus","GC": "O Grande Conflito"}';

const planosstring = '{' +
    '"JAN_1": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"", "NOMES":"Prefacio"},' +
    '"JAN_2": {"CAPBIBLIA":"Salmos 3 a 6", "SIGLAES":"PP", "CAPES":"Cap. 01", "NOMES":"Porque foi permitido o pecado?"},' +
    '"JAN_3": {"CAPBIBLIA":"Salmos 7 a 8 e Genesis 1", "SIGLAES":"PP", "CAPES":"Cap. 02", "NOMES":"A Criação"},' +
    '"JAN_4": {"CAPBIBLIA":"Salmos 9 e 10 e Genesis 2", "SIGLAES":"PP", "CAPES":"Cap. 03", "NOMES":"A Semana Literal"},' +
    '"JAN_5": {"CAPBIBLIA":"Salmos 11 e 12 e Genesis 3", "SIGLAES":"PP", "CAPES":"Cap. 04", "NOMES":"A Tentação e a Queda"},' +
    '"JAN_6": {"CAPBIBLIA":"Salmos 13 a 16", "SIGLAES":"PP", "CAPES":"Cap. 05", "NOMES":"O Plano da Redenção"},' +
    '"JAN_7": {"CAPBIBLIA":"Salmos 17 e Genesis 4", "SIGLAES":"PP", "CAPES":"Cap. 06", "NOMES":"Caim e Abel"},' +
    '"JAN_8": {"CAPBIBLIA":"Salmos 19 a 20 e Genesis 5", "SIGLAES":"PP", "CAPES":"Cap. 07", "NOMES":"Sete e Enoque"},' +
    '"JAN_9": {"CAPBIBLIA":"Salmos 21 e Genesis 6 e 7", "SIGLAES":"PP", "CAPES":"Cap. 08", "NOMES":"O Dilúvio"},' +
    '"JAN_10": {"CAPBIBLIA":"Genesis 8 a 10", "SIGLAES":"PP", "CAPES":"Cap. 09", "NOMES":"Depois do Dilúvio"},' +
    '"JAN_11": {"CAPBIBLIA":"Salmos 24 e Genesis 11", "SIGLAES":"PP", "CAPES":"Cap. 10", "NOMES":"A Torre de Babel"},' +
    '"JAN_12": {"CAPBIBLIA":"Genesis 12 a 15", "SIGLAES":"PP", "CAPES":"Cap. 11", "NOMES":"A Vocação de Abraão"},' +
    '"JAN_13": {"CAPBIBLIA":"Genesis 16 a 18", "SIGLAES":"PP", "CAPES":"Cap. 12", "NOMES":"Abraão em Canaã"},' +
    '"JAN_14": {"CAPBIBLIA":"Genesis 20 a 22", "SIGLAES":"PP", "CAPES":"Cap. 13", "NOMES":"A Prova de Fé"},' +
    '"JAN_15": {"CAPBIBLIA":"Genesis 19", "SIGLAES":"PP", "CAPES":"Cap. 14", "NOMES":"A Destruição de Sodoma"},' +
    '"JAN_16": {"CAPBIBLIA":"Genesis 23 a 24", "SIGLAES":"PP", "CAPES":"Cap. 15", "NOMES":"O Casamento de  Isaque"},' +
    '"JAN_17": {"CAPBIBLIA":"Genesis 25 a 27", "SIGLAES":"PP", "CAPES":"Cap. 16", "NOMES":"Jacó e Esaú"},' +
    '"JAN_18": {"CAPBIBLIA":"Genesis 28 a 31", "SIGLAES":"PP", "CAPES":"Cap. 17", "NOMES":"Fuga e Exílio de Jacó"},' +
    '"JAN_19": {"CAPBIBLIA":"Genesis 32 a 34", "SIGLAES":"PP", "CAPES":"Cap. 18", "NOMES":"A noite de luta"},' +
    '"JAN_20": {"CAPBIBLIA":"Genesis 35 a 38", "SIGLAES":"PP", "CAPES":"Cap. 19", "NOMES":"A volta para Canaã"},' +
    '"JAN_21": {"CAPBIBLIA":"Genesis 39 a 46", "SIGLAES":"PP", "CAPES":"Cap. 20", "NOMES":"José no Egito"},' +
    '"JAN_22": {"CAPBIBLIA":"Genesis 47 a 50", "SIGLAES":"PP", "CAPES":"Cap. 21", "NOMES":"José e seus irmãos"},' +
    '"JAN_23": {"CAPBIBLIA":"Êxodo 1 a 4", "SIGLAES":"PP", "CAPES":"Cap. 22", "NOMES":"Moisés"},' +
    '"JAN_24": {"CAPBIBLIA":"Êxodo 5 a 8", "SIGLAES":"PP", "CAPES":"Cap. 23", "NOMES":"As Pragas do Egito"},' +
    '"JAN_25": {"CAPBIBLIA":"Êxodo 9 a 12", "SIGLAES":"PP", "CAPES":"Cap. 24", "NOMES":"A Páscoa"},' +
    '"JAN_26": {"CAPBIBLIA":"Êxodo 13 a 15", "SIGLAES":"PP", "CAPES":"Cap. 25", "NOMES":"O Êxodo"},' +
    '"JAN_27": {"CAPBIBLIA":"Êxodo 16 a 18", "SIGLAES":"PP", "CAPES":"Cap. 26", "NOMES":"Do Mar Vermelho ao Sinai"},' +
    '"JAN_28": {"CAPBIBLIA":"Êxodo 19 a 22", "SIGLAES":"PP", "CAPES":"Cap. 27", "NOMES":"Israel Recebe a Lei"},' +
    '"JAN_29": {"CAPBIBLIA":"Êxodo 23 a 28", "SIGLAES":"**", "CAPES":"****", "NOMES":"****"},' +
    '"JAN_30": {"CAPBIBLIA":"Êxodo 29 a 32", "SIGLAES":"PP", "CAPES":"Cap. 28", "NOMES":"Idolatria no Sinai"},' +
    '"JAN_31": {"CAPBIBLIA":"Êxodo 33 a 37", "SIGLAES":"PP", "CAPES":"Cap. 29", "NOMES":"Inimizade de Satanás contra a Lei de Deus"},' +
    '"FEV_1": {"CAPBIBLIA":"Êxodo 38 a 40", "SIGLAES":"PP", "CAPES":"Cap. 30", "NOMES":"O Tabernáculo e Seus Serviços"},' +
    '"FEV_2": {"CAPBIBLIA":"Levítico 1 a 7", "SIGLAES":"**", "CAPES":"****", "NOMES":"****"},' +
    '"FEV_3": {"CAPBIBLIA":"Levítico 8 a 11", "SIGLAES":"PP", "CAPES":"Cap. 31", "NOMES":"O Pecado de Nadabe e Abiú"},' +
    '"FEV_4": {"CAPBIBLIA":"Levítico 12 a 15", "SIGLAES":"PP", "CAPES":"Cap. 32", "NOMES":"A Lei e os Concertos"},' +
    '"FEV_5": {"CAPBIBLIA":"Números 1 a 4", "SIGLAES":"PP", "CAPES":"Cap. 33", "NOMES":"Do Sinal a Cades"},' +
    '"FEV_6": {"CAPBIBLIA":"Números 5 a 12", "SIGLAES":"**", "CAPES":"****", "NOMES":"****"},' +
    '"FEV_7": {"CAPBIBLIA":"Números 13 a 14 e Deuteronômio 1", "SIGLAES":"PP", "CAPES":"Cap. 34", "NOMES":"Os Doze Espias"},' +
    '"FEV_8": {"CAPBIBLIA":"Números 15 a 17", "SIGLAES":"PP", "CAPES":"Cap. 35", "NOMES":"A Rebelião de Coré"},' +
    '"FEV_9": {"CAPBIBLIA":"Números 18 e 19 e Deuteronômio 2", "SIGLAES":"PP", "CAPES":"Cap. 36", "NOMES":"No Deserto"},' +
    '"FEV_10": {"CAPBIBLIA":"Números 20, 29 e 30", "SIGLAES":"PP", "CAPES":"Cap. 37", "NOMES":"A Rocha Ferida"},' +
    '"FEV_11": {"CAPBIBLIA":"Números 21:01-30, Cap. 31 a 33", "SIGLAES":"PP", "CAPES":"Cap. 38", "NOMES":"A Jornada em redor de Edom"},' +
    '"FEV_12": {"CAPBIBLIA":"Números 21:31-35, Cap. 34 a 36", "SIGLAES":"PP", "CAPES":"Cap. 39", "NOMES":"A Conquista de Basã"},' +
    '"FEV_13": {"CAPBIBLIA":"Números 22 a 24", "SIGLAES":"PP", "CAPES":"Cap. 40", "NOMES":"Balaão"},' +
    '"FEV_14": {"CAPBIBLIA":"Números 25 a 28", "SIGLAES":"PP", "CAPES":"Cap. 41", "NOMES":"Apostasia no Jordão"},' +
    '"FEV_15": {"CAPBIBLIA":"Deuteronômio 3 a 5", "SIGLAES":"PP", "CAPES":"Cap. 14", "NOMES":"A repetição da Lei"},' +
    '"FEV_16": {"CAPBIBLIA":"Deuteronômio 6 a 13", "SIGLAES":"**", "CAPES":"****", "NOMES":"****"},' +
    '"FEV_17": {"CAPBIBLIA":"Deuteronômio 14 a 17", "SIGLAES":"**", "CAPES":"****", "NOMES":"****"},' +
    '"FEV_18": {"CAPBIBLIA":"Deuteronômio 18 a 29", "SIGLAES":"**", "CAPES":"****", "NOMES":"****"},' +
    '"FEV_19": {"CAPBIBLIA":"Deuteronômio 30 a 34", "SIGLAES":"PP", "CAPES":"Cap. 43", "NOMES":"A Morte de Moisés"},' +
    '"FEV_20": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 19", "NOMES":"Prefacio"},' +
    '"FEV_21": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 20", "NOMES":"Prefacio"},' +
    '"FEV_22": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 21", "NOMES":"Prefacio"},' +
    '"FEV_23": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 22", "NOMES":"Prefacio"},' +
    '"FEV_24": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 23", "NOMES":"Prefacio"},' +
    '"FEV_25": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 24", "NOMES":"Prefacio"},' +
    '"FEV_26": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 25", "NOMES":"Prefacio"},' +
    '"FEV_27": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 26", "NOMES":"Prefacio"},' +
    '"FEV_28": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 27", "NOMES":"Prefacio"},' +
    '"MAR_1": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"", "NOMES":"Prefacio"},' +
    '"MAR_2": {"CAPBIBLIA":"Salmos 3 a 6 e Genesis 1", "SIGLAES":"PP", "CAPES":"Cap. 01", "NOMES":"A Criação"},' +
    '"MAR_3": {"CAPBIBLIA":"Salmos 7 a 8  e Genesis 2", "SIGLAES":"PP", "CAPES":"Cap. 02", "NOMES":"Outro"},' +
    '"MAR_4": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 03", "NOMES":"Prefacio"},' +
    '"MAR_5": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 04", "NOMES":"Prefacio"},' +
    '"MAR_6": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 05", "NOMES":"Prefacio"},' +
    '"MAR_7": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 06", "NOMES":"Prefacio"},' +
    '"MAR_8": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 07", "NOMES":"Prefacio"},' +
    '"MAR_9": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 08", "NOMES":"Prefacio"},' +
    '"MAR_10": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 09", "NOMES":"Prefacio"},' +
    '"MAR_11": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 10", "NOMES":"Prefacio"},' +
    '"MAR_12": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 11", "NOMES":"Prefacio"},' +
    '"MAR_13": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 12", "NOMES":"Prefacio"},' +
    '"MAR_14": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 13", "NOMES":"Prefacio"},' +
    '"MAR_15": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 14", "NOMES":"Prefacio"},' +
    '"MAR_16": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 15", "NOMES":"Prefacio"},' +
    '"MAR_17": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 16", "NOMES":"Prefacio"},' +
    '"MAR_18": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 17", "NOMES":"Prefacio"},' +
    '"MAR_19": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 18", "NOMES":"Prefacio"},' +
    '"MAR_20": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 19", "NOMES":"Prefacio"},' +
    '"MAR_21": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 20", "NOMES":"Prefacio"},' +
    '"MAR_22": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 21", "NOMES":"Prefacio"},' +
    '"MAR_23": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 22", "NOMES":"Prefacio"},' +
    '"MAR_24": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 23", "NOMES":"Prefacio"},' +
    '"MAR_25": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 24", "NOMES":"Prefacio"},' +
    '"MAR_26": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 25", "NOMES":"Prefacio"},' +
    '"MAR_27": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 26", "NOMES":"Prefacio"},' +
    '"MAR_28": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 27", "NOMES":"Prefacio"},' +
    '"MAR_29": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 28", "NOMES":"Prefacio"},' +
    '"MAR_30": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 29", "NOMES":"Prefacio"},' +
    '"MAR_31": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 30", "NOMES":"Prefacio"},' +
    '"ABR_1": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"", "NOMES":"Prefacio"},' +
    '"ABR_2": {"CAPBIBLIA":"Salmos 3 a 6 e Genesis 1", "SIGLAES":"PP", "CAPES":"Cap. 01", "NOMES":"A Criação"},' +
    '"ABR_3": {"CAPBIBLIA":"Salmos 7 a 8  e Genesis 2", "SIGLAES":"PP", "CAPES":"Cap. 02", "NOMES":"Outro"},' +
    '"ABR_4": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 03", "NOMES":"Prefacio"},' +
    '"ABR_5": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 04", "NOMES":"Prefacio"},' +
    '"ABR_6": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 05", "NOMES":"Prefacio"},' +
    '"ABR_7": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 06", "NOMES":"Prefacio"},' +
    '"ABR_8": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 07", "NOMES":"Prefacio"},' +
    '"ABR_9": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 08", "NOMES":"Prefacio"},' +
    '"ABR_10": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 09", "NOMES":"Prefacio"},' +
    '"ABR_11": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 10", "NOMES":"Prefacio"},' +
    '"ABR_12": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 11", "NOMES":"Prefacio"},' +
    '"ABR_13": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 12", "NOMES":"Prefacio"},' +
    '"ABR_14": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 13", "NOMES":"Prefacio"},' +
    '"ABR_15": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 14", "NOMES":"Prefacio"},' +
    '"ABR_16": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 15", "NOMES":"Prefacio"},' +
    '"ABR_17": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 16", "NOMES":"Prefacio"},' +
    '"ABR_18": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 17", "NOMES":"Prefacio"},' +
    '"ABR_19": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 18", "NOMES":"Prefacio"},' +
    '"ABR_20": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 19", "NOMES":"Prefacio"},' +
    '"ABR_21": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 20", "NOMES":"Prefacio"},' +
    '"ABR_22": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 21", "NOMES":"Prefacio"},' +
    '"ABR_23": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 22", "NOMES":"Prefacio"},' +
    '"ABR_24": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 23", "NOMES":"Prefacio"},' +
    '"ABR_25": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 24", "NOMES":"Prefacio"},' +
    '"ABR_26": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 25", "NOMES":"Prefacio"},' +
    '"ABR_27": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 26", "NOMES":"Prefacio"},' +
    '"ABR_28": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 27", "NOMES":"Prefacio"},' +
    '"ABR_29": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 28", "NOMES":"Prefacio"},' +
    '"ABR_30": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 29", "NOMES":"Prefacio"},' +
    '"MAI_1": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"", "NOMES":"Prefacio"},' +
    '"MAI_2": {"CAPBIBLIA":"Salmos 3 a 6 e Genesis 1", "SIGLAES":"PP", "CAPES":"Cap. 01", "NOMES":"A Criação"},' +
    '"MAI_3": {"CAPBIBLIA":"Salmos 7 a 8  e Genesis 2", "SIGLAES":"PP", "CAPES":"Cap. 02", "NOMES":"Outro"},' +
    '"MAI_4": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 03", "NOMES":"Prefacio"},' +
    '"MAI_5": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 04", "NOMES":"Prefacio"},' +
    '"MAI_6": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 05", "NOMES":"Prefacio"},' +
    '"MAI_7": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 06", "NOMES":"Prefacio"},' +
    '"MAI_8": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 07", "NOMES":"Prefacio"},' +
    '"MAI_9": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 08", "NOMES":"Prefacio"},' +
    '"MAI_10": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 09", "NOMES":"Prefacio"},' +
    '"MAI_11": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 10", "NOMES":"Prefacio"},' +
    '"MAI_12": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 11", "NOMES":"Prefacio"},' +
    '"MAI_13": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 12", "NOMES":"Prefacio"},' +
    '"MAI_14": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 13", "NOMES":"Prefacio"},' +
    '"MAI_15": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 14", "NOMES":"Prefacio"},' +
    '"MAI_16": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 15", "NOMES":"Prefacio"},' +
    '"MAI_17": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 16", "NOMES":"Prefacio"},' +
    '"MAI_18": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 17", "NOMES":"Prefacio"},' +
    '"MAI_19": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 18", "NOMES":"Prefacio"},' +
    '"MAI_20": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 19", "NOMES":"Prefacio"},' +
    '"MAI_21": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 20", "NOMES":"Prefacio"},' +
    '"MAI_22": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 21", "NOMES":"Prefacio"},' +
    '"MAI_23": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 22", "NOMES":"Prefacio"},' +
    '"MAI_24": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 23", "NOMES":"Prefacio"},' +
    '"MAI_25": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 24", "NOMES":"Prefacio"},' +
    '"MAI_26": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 25", "NOMES":"Prefacio"},' +
    '"MAI_27": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 26", "NOMES":"Prefacio"},' +
    '"MAI_28": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 27", "NOMES":"Prefacio"},' +
    '"MAI_29": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 28", "NOMES":"Prefacio"},' +
    '"MAI_30": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 29", "NOMES":"Prefacio"},' +
    '"MAI_31": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 30", "NOMES":"Prefacio"},' +
    '"JUN_1": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"", "NOMES":"Prefacio"},' +
    '"JUN_2": {"CAPBIBLIA":"Salmos 3 a 6 e Genesis 1", "SIGLAES":"PP", "CAPES":"Cap. 01", "NOMES":"A Criação"},' +
    '"JUN_3": {"CAPBIBLIA":"Salmos 7 a 8  e Genesis 2", "SIGLAES":"PP", "CAPES":"Cap. 02", "NOMES":"Outro"},' +
    '"JUN_4": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 03", "NOMES":"Prefacio"},' +
    '"JUN_5": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 04", "NOMES":"Prefacio"},' +
    '"JUN_6": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 05", "NOMES":"Prefacio"},' +
    '"JUN_7": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 06", "NOMES":"Prefacio"},' +
    '"JUN_8": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 07", "NOMES":"Prefacio"},' +
    '"JUN_9": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 08", "NOMES":"Prefacio"},' +
    '"JUN_10": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 09", "NOMES":"Prefacio"},' +
    '"JUN_11": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 10", "NOMES":"Prefacio"},' +
    '"JUN_12": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 11", "NOMES":"Prefacio"},' +
    '"JUN_13": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 12", "NOMES":"Prefacio"},' +
    '"JUN_14": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 13", "NOMES":"Prefacio"},' +
    '"JUN_15": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 14", "NOMES":"Prefacio"},' +
    '"JUN_16": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 15", "NOMES":"Prefacio"},' +
    '"JUN_17": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 16", "NOMES":"Prefacio"},' +
    '"JUN_18": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 17", "NOMES":"Prefacio"},' +
    '"JUN_19": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 18", "NOMES":"Prefacio"},' +
    '"JUN_20": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 19", "NOMES":"Prefacio"},' +
    '"JUN_21": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 20", "NOMES":"Prefacio"},' +
    '"JUN_22": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 21", "NOMES":"Prefacio"},' +
    '"JUN_23": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 22", "NOMES":"Prefacio"},' +
    '"JUN_24": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 23", "NOMES":"Prefacio"},' +
    '"JUN_25": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 24", "NOMES":"Prefacio"},' +
    '"JUN_26": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 25", "NOMES":"Prefacio"},' +
    '"JUN_27": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 26", "NOMES":"Prefacio"},' +
    '"JUN_28": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 27", "NOMES":"Prefacio"},' +
    '"JUN_29": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 28", "NOMES":"Prefacio"},' +
    '"JUN_30": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 29", "NOMES":"Prefacio"},' +
    '"JUL_1": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"", "NOMES":"Prefacio"},' +
    '"JUL_2": {"CAPBIBLIA":"Salmos 3 a 6 e Genesis 1", "SIGLAES":"PP", "CAPES":"Cap. 01", "NOMES":"A Criação"},' +
    '"JUL_3": {"CAPBIBLIA":"Salmos 7 a 8  e Genesis 2", "SIGLAES":"PP", "CAPES":"Cap. 02", "NOMES":"Outro"},' +
    '"JUL_4": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 03", "NOMES":"Prefacio"},' +
    '"JUL_5": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 04", "NOMES":"Prefacio"},' +
    '"JUL_6": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 05", "NOMES":"Prefacio"},' +
    '"JUL_7": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 06", "NOMES":"Prefacio"},' +
    '"JUL_8": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 07", "NOMES":"Prefacio"},' +
    '"JUL_9": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 08", "NOMES":"Prefacio"},' +
    '"JUL_10": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 09", "NOMES":"Prefacio"},' +
    '"JUL_11": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 10", "NOMES":"Prefacio"},' +
    '"JUL_12": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 11", "NOMES":"Prefacio"},' +
    '"JUL_13": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 12", "NOMES":"Prefacio"},' +
    '"JUL_14": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 13", "NOMES":"Prefacio"},' +
    '"JUL_15": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 14", "NOMES":"Prefacio"},' +
    '"JUL_16": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 15", "NOMES":"Prefacio"},' +
    '"JUL_17": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 16", "NOMES":"Prefacio"},' +
    '"JUL_18": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 17", "NOMES":"Prefacio"},' +
    '"JUL_19": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 18", "NOMES":"Prefacio"},' +
    '"JUL_20": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 19", "NOMES":"Prefacio"},' +
    '"JUL_21": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 20", "NOMES":"Prefacio"},' +
    '"JUL_22": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 21", "NOMES":"Prefacio"},' +
    '"JUL_23": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 22", "NOMES":"Prefacio"},' +
    '"JUL_24": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 23", "NOMES":"Prefacio"},' +
    '"JUL_25": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 24", "NOMES":"Prefacio"},' +
    '"JUL_26": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 25", "NOMES":"Prefacio"},' +
    '"JUL_27": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 26", "NOMES":"Prefacio"},' +
    '"JUL_28": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 27", "NOMES":"Prefacio"},' +
    '"JUL_29": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 28", "NOMES":"Prefacio"},' +
    '"JUL_30": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 29", "NOMES":"Prefacio"},' +
    '"JUL_31": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 30", "NOMES":"Prefacio"},' +
    '"AGO_1": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"", "NOMES":"Prefacio"},' +
    '"AGO_2": {"CAPBIBLIA":"Salmos 3 a 6 e Genesis 1", "SIGLAES":"PP", "CAPES":"Cap. 01", "NOMES":"A Criação"},' +
    '"AGO_3": {"CAPBIBLIA":"Salmos 7 a 8  e Genesis 2", "SIGLAES":"PP", "CAPES":"Cap. 02", "NOMES":"Outro"},' +
    '"AGO_4": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 03", "NOMES":"Prefacio"},' +
    '"AGO_5": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 04", "NOMES":"Prefacio"},' +
    '"AGO_6": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 05", "NOMES":"Prefacio"},' +
    '"AGO_7": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 06", "NOMES":"Prefacio"},' +
    '"AGO_8": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 07", "NOMES":"Prefacio"},' +
    '"AGO_9": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 08", "NOMES":"Prefacio"},' +
    '"AGO_10": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 09", "NOMES":"Prefacio"},' +
    '"AGO_11": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 10", "NOMES":"Prefacio"},' +
    '"AGO_12": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 11", "NOMES":"Prefacio"},' +
    '"AGO_13": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 12", "NOMES":"Prefacio"},' +
    '"AGO_14": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 13", "NOMES":"Prefacio"},' +
    '"AGO_15": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 14", "NOMES":"Prefacio"},' +
    '"AGO_16": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 15", "NOMES":"Prefacio"},' +
    '"AGO_17": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 16", "NOMES":"Prefacio"},' +
    '"AGO_18": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 17", "NOMES":"Prefacio"},' +
    '"AGO_19": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 18", "NOMES":"Prefacio"},' +
    '"AGO_20": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 19", "NOMES":"Prefacio"},' +
    '"AGO_21": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 20", "NOMES":"Prefacio"},' +
    '"AGO_22": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 21", "NOMES":"Prefacio"},' +
    '"AGO_23": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 22", "NOMES":"Prefacio"},' +
    '"AGO_24": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 23", "NOMES":"Prefacio"},' +
    '"AGO_25": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 24", "NOMES":"Prefacio"},' +
    '"AGO_26": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 25", "NOMES":"Prefacio"},' +
    '"AGO_27": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 26", "NOMES":"Prefacio"},' +
    '"AGO_28": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 27", "NOMES":"Prefacio"},' +
    '"AGO_29": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 28", "NOMES":"Prefacio"},' +
    '"AGO_30": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 29", "NOMES":"Prefacio"},' +
    '"AGO_31": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 30", "NOMES":"Prefacio"},' +
    '"SET_1": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"", "NOMES":"Prefacio"},' +
    '"SET_2": {"CAPBIBLIA":"Salmos 3 a 6 e Genesis 1", "SIGLAES":"PP", "CAPES":"Cap. 01", "NOMES":"A Criação"},' +
    '"SET_3": {"CAPBIBLIA":"Salmos 7 a 8  e Genesis 2", "SIGLAES":"PP", "CAPES":"Cap. 02", "NOMES":"Outro"},' +
    '"SET_4": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 03", "NOMES":"Prefacio"},' +
    '"SET_5": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 04", "NOMES":"Prefacio"},' +
    '"SET_6": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 05", "NOMES":"Prefacio"},' +
    '"SET_7": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 06", "NOMES":"Prefacio"},' +
    '"SET_8": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 07", "NOMES":"Prefacio"},' +
    '"SET_9": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 08", "NOMES":"Prefacio"},' +
    '"SET_10": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 09", "NOMES":"Prefacio"},' +
    '"SET_11": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 10", "NOMES":"Prefacio"},' +
    '"SET_12": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 11", "NOMES":"Prefacio"},' +
    '"SET_13": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 12", "NOMES":"Prefacio"},' +
    '"SET_14": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 13", "NOMES":"Prefacio"},' +
    '"SET_15": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 14", "NOMES":"Prefacio"},' +
    '"SET_16": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 15", "NOMES":"Prefacio"},' +
    '"SET_17": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 16", "NOMES":"Prefacio"},' +
    '"SET_18": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 17", "NOMES":"Prefacio"},' +
    '"SET_19": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 18", "NOMES":"Prefacio"},' +
    '"SET_20": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 19", "NOMES":"Prefacio"},' +
    '"SET_21": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 20", "NOMES":"Prefacio"},' +
    '"SET_22": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 21", "NOMES":"Prefacio"},' +
    '"SET_23": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 22", "NOMES":"Prefacio"},' +
    '"SET_24": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 23", "NOMES":"Prefacio"},' +
    '"SET_25": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 24", "NOMES":"Prefacio"},' +
    '"SET_26": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 25", "NOMES":"Prefacio"},' +
    '"SET_27": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 26", "NOMES":"Prefacio"},' +
    '"SET_28": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 27", "NOMES":"Prefacio"},' +
    '"SET_29": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 28", "NOMES":"Prefacio"},' +
    '"SET_30": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 29", "NOMES":"Prefacio"},' +
    '"OUT_1": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"", "NOMES":"Prefacio"},' +
    '"OUT_2": {"CAPBIBLIA":"Salmos 3 a 6 e Genesis 1", "SIGLAES":"PP", "CAPES":"Cap. 01", "NOMES":"A Criação"},' +
    '"OUT_3": {"CAPBIBLIA":"Salmos 7 a 8  e Genesis 2", "SIGLAES":"PP", "CAPES":"Cap. 02", "NOMES":"Outro"},' +
    '"OUT_4": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 03", "NOMES":"Prefacio"},' +
    '"OUT_5": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 04", "NOMES":"Prefacio"},' +
    '"OUT_6": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 05", "NOMES":"Prefacio"},' +
    '"OUT_7": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 06", "NOMES":"Prefacio"},' +
    '"OUT_8": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 07", "NOMES":"Prefacio"},' +
    '"OUT_9": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 08", "NOMES":"Prefacio"},' +
    '"OUT_10": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 09", "NOMES":"Prefacio"},' +
    '"OUT_11": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 10", "NOMES":"Prefacio"},' +
    '"OUT_12": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 11", "NOMES":"Prefacio"},' +
    '"OUT_13": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 12", "NOMES":"Prefacio"},' +
    '"OUT_14": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 13", "NOMES":"Prefacio"},' +
    '"OUT_15": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 14", "NOMES":"Prefacio"},' +
    '"OUT_16": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 15", "NOMES":"Prefacio"},' +
    '"OUT_17": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 16", "NOMES":"Prefacio"},' +
    '"OUT_18": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 17", "NOMES":"Prefacio"},' +
    '"OUT_19": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 18", "NOMES":"Prefacio"},' +
    '"OUT_20": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 19", "NOMES":"Prefacio"},' +
    '"OUT_21": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 20", "NOMES":"Prefacio"},' +
    '"OUT_22": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 21", "NOMES":"Prefacio"},' +
    '"OUT_23": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 22", "NOMES":"Prefacio"},' +
    '"OUT_24": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 23", "NOMES":"Prefacio"},' +
    '"OUT_25": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 24", "NOMES":"Prefacio"},' +
    '"OUT_26": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 25", "NOMES":"Prefacio"},' +
    '"OUT_27": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 26", "NOMES":"Prefacio"},' +
    '"OUT_28": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 27", "NOMES":"Prefacio"},' +
    '"OUT_29": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 28", "NOMES":"Prefacio"},' +
    '"OUT_30": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 29", "NOMES":"Prefacio"},' +
    '"OUT_31": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 30", "NOMES":"Prefacio"},' +
    '"NOV_1": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"", "NOMES":"Prefacio"},' +
    '"NOV_2": {"CAPBIBLIA":"Salmos 3 a 6 e Genesis 1", "SIGLAES":"PP", "CAPES":"Cap. 01", "NOMES":"A Criação"},' +
    '"NOV_3": {"CAPBIBLIA":"Salmos 7 a 8  e Genesis 2", "SIGLAES":"PP", "CAPES":"Cap. 02", "NOMES":"NOVro"},' +
    '"NOV_4": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 03", "NOMES":"Prefacio"},' +
    '"NOV_5": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 04", "NOMES":"Prefacio"},' +
    '"NOV_6": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 05", "NOMES":"Prefacio"},' +
    '"NOV_7": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 06", "NOMES":"Prefacio"},' +
    '"NOV_8": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 07", "NOMES":"Prefacio"},' +
    '"NOV_9": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 08", "NOMES":"Prefacio"},' +
    '"NOV_10": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 09", "NOMES":"Prefacio"},' +
    '"NOV_11": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 10", "NOMES":"Prefacio"},' +
    '"NOV_12": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 11", "NOMES":"Prefacio"},' +
    '"NOV_13": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 12", "NOMES":"Prefacio"},' +
    '"NOV_14": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 13", "NOMES":"Prefacio"},' +
    '"NOV_15": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 14", "NOMES":"Prefacio"},' +
    '"NOV_16": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 15", "NOMES":"Prefacio"},' +
    '"NOV_17": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 16", "NOMES":"Prefacio"},' +
    '"NOV_18": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 17", "NOMES":"Prefacio"},' +
    '"NOV_19": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 18", "NOMES":"Prefacio"},' +
    '"NOV_20": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 19", "NOMES":"Prefacio"},' +
    '"NOV_21": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 20", "NOMES":"Prefacio"},' +
    '"NOV_22": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 21", "NOMES":"Prefacio"},' +
    '"NOV_23": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 22", "NOMES":"Prefacio"},' +
    '"NOV_24": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 23", "NOMES":"Prefacio"},' +
    '"NOV_25": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 24", "NOMES":"Prefacio"},' +
    '"NOV_26": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 25", "NOMES":"Prefacio"},' +
    '"NOV_27": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 26", "NOMES":"Prefacio"},' +
    '"NOV_28": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 27", "NOMES":"Prefacio"},' +
    '"NOV_29": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 28", "NOMES":"Prefacio"},' +
    '"NOV_30": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 29", "NOMES":"Prefacio"},' +
    '"DEZ_1": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"", "NOMES":"Prefacio"},' +
    '"DEZ_2": {"CAPBIBLIA":"Salmos 3 a 6 e Genesis 1", "SIGLAES":"PP", "CAPES":"Cap. 01", "NOMES":"A Criação"},' +
    '"DEZ_3": {"CAPBIBLIA":"Salmos 7 a 8  e Genesis 2", "SIGLAES":"PP", "CAPES":"Cap. 02", "NOMES":"DEZro"},' +
    '"DEZ_4": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 03", "NOMES":"Prefacio"},' +
    '"DEZ_5": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 04", "NOMES":"Prefacio"},' +
    '"DEZ_6": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 05", "NOMES":"Prefacio"},' +
    '"DEZ_7": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 06", "NOMES":"Prefacio"},' +
    '"DEZ_8": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 07", "NOMES":"Prefacio"},' +
    '"DEZ_9": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 08", "NOMES":"Prefacio"},' +
    '"DEZ_10": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 09", "NOMES":"Prefacio"},' +
    '"DEZ_11": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 10", "NOMES":"Prefacio"},' +
    '"DEZ_12": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 11", "NOMES":"Prefacio"},' +
    '"DEZ_13": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 12", "NOMES":"Prefacio"},' +
    '"DEZ_14": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 13", "NOMES":"Prefacio"},' +
    '"DEZ_15": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 14", "NOMES":"Prefacio"},' +
    '"DEZ_16": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 15", "NOMES":"Prefacio"},' +
    '"DEZ_17": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 16", "NOMES":"Prefacio"},' +
    '"DEZ_18": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 17", "NOMES":"Prefacio"},' +
    '"DEZ_19": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 18", "NOMES":"Prefacio"},' +
    '"DEZ_20": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 19", "NOMES":"Prefacio"},' +
    '"DEZ_21": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 20", "NOMES":"Prefacio"},' +
    '"DEZ_22": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 21", "NOMES":"Prefacio"},' +
    '"DEZ_23": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 22", "NOMES":"Prefacio"},' +
    '"DEZ_24": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 23", "NOMES":"Prefacio"},' +
    '"DEZ_25": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 24", "NOMES":"Prefacio"},' +
    '"DEZ_26": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 25", "NOMES":"Prefacio"},' +
    '"DEZ_27": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 26", "NOMES":"Prefacio"},' +
    '"DEZ_28": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 27", "NOMES":"Prefacio"},' +
    '"DEZ_29": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 28", "NOMES":"Prefacio"},' +
    '"DEZ_30": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 29", "NOMES":"Prefacio"},' +
    '"DEZ_31": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 30", "NOMES":"Prefacio"}' +
'}';

export function getCapitulosBibliaPlano(chave: string): string {
    let planos = Object.assign({}, JSON.parse(planosstring));
    return planos[chave].CAPBIBLIA;
}
export function getCapitulosESPlano(chave: string): string {
    let planos = Object.assign({}, JSON.parse(planosstring));
    return planos[chave].CAPES;
}
export function getTituloCapituloESPlano(chave: string): string {
    let planos = Object.assign({}, JSON.parse(planosstring));
    return planos[chave].NOMES;
}
export function getSiglaESPlano(chave: string): string {
    let planos = Object.assign({}, JSON.parse(planosstring));
    return planos[chave].SIGLAES;
}
export function getNomeLivro(chave: string): string {
    if (chave=="**") return '**';
    let planos = Object.assign({}, JSON.parse(livrosstring));
    return planos[chave];
}

  export async function gravarValor(chave: string, valor: string) {
      try {
        await AsyncStorage.setItem(chave, valor);
      }  catch (e) {  }
  }

  export async function recuperarValor (chave: string): Promise<string> {
    try {
      const valor = await AsyncStorage.getItem(chave);
      if (valor == null) return "";
      return valor;
    }  catch (e) {
      return ""; 
    }
  }

export function apagar(chave: string) {
  AsyncStorage.removeItem(chave);
}
