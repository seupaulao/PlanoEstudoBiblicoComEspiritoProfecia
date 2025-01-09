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
    '"FEV_20": {"CAPBIBLIA":"Josué 1 a 4", "SIGLAES":"PP", "CAPES":"Cap. 44", "NOMES":"A Travessia do Jordão"},' +
    '"FEV_21": {"CAPBIBLIA":"Josué 5 a 7", "SIGLAES":"PP", "CAPES":"Cap. 45", "NOMES":"A Queda de Jericó"},' +
    '"FEV_22": {"CAPBIBLIA":"Josué 8 a 11", "SIGLAES":"PP", "CAPES":"Cap. 46", "NOMES":"As bênçãos e as maldições"},' +
    '"FEV_23": {"CAPBIBLIA":"Josué 12 a 17", "SIGLAES":"PP", "CAPES":"Cap. 47", "NOMES":"Aliança com os Gebeonitas"},' +
    '"FEV_24": {"CAPBIBLIA":"Josué 18 a 21", "SIGLAES":"PP", "CAPES":"Cap. 48", "NOMES":"A divisão de Canaã"},' +
    '"FEV_25": {"CAPBIBLIA":"Josué 22 a 24", "SIGLAES":"PP", "CAPES":"Cap. 49", "NOMES":"Prefacio"},' +
    '"FEV_26": {"CAPBIBLIA":"Deut. 14:22-29; Núm. 18:21-32, Lev. 17 a 20; 27:30-34", "SIGLAES":"PP", "CAPES":"Cap. 50", "NOMES":"O Dízimo"},' +
    '"FEV_27": {"CAPBIBLIA":"Levítico 25 e 26", "SIGLAES":"PP", "CAPES":"Cap. 51", "NOMES":"O Cuidado de Deus para com os  pobres"},' +
    '"FEV_28": {"CAPBIBLIA":"Levítico 21 a 24", "SIGLAES":"PP", "CAPES":"Cap. 52", "NOMES":"As Festas Anuais"},' +
    '"MAR_1": {"CAPBIBLIA":"Juízes 1 a 4", "SIGLAES":"PP", "CAPES":"Cap. 53", "NOMES":"Os primeiros juízes"},' +
    '"MAR_2": {"CAPBIBLIA":"Juízes 5 a 12", "SIGLAES":"**", "CAPES":"****", "NOMES":"****"},' +
    '"MAR_3": {"CAPBIBLIA":"Juízes 13 a 16", "SIGLAES":"PP", "CAPES":"Cap. 54", "NOMES":"Sansão"},' +
    '"MAR_4": {"CAPBIBLIA":"Salmos 17 a 21", "SIGLAES":"**", "CAPES":"****", "NOMES":"****"},' +
    '"MAR_5": {"CAPBIBLIA":"Rute 1 e 2 e I Samuel 1", "SIGLAES":"PP", "CAPES":"Cap. 55", "NOMES":"O Menino Samuel"},' +
    '"MAR_6": {"CAPBIBLIA":"Rute 3 e 4 e I Samuel 2", "SIGLAES":"PP", "CAPES":"Cap. 56", "NOMES":"Eli e seus filhos"},' +
    '"MAR_7": {"CAPBIBLIA":"I Samuel 3 a 6; I Crônicas 13 a 15", "SIGLAES":"PP", "CAPES":"Cap. 57", "NOMES":"A Arca tomada pelos filisteus"},' +
    '"MAR_8": {"CAPBIBLIA":"I Reis 4:38-41; II Reis 2:15-18; I Samuel 7 a 9", "SIGLAES":"PP", "CAPES":"Cap. 58", "NOMES":"A Escola dos Profetas"},' +
    '"MAR_9": {"CAPBIBLIA":"I Samuel 10 a 12", "SIGLAES":"PP", "CAPES":"Cap. 59", "NOMES":"O Primeiro Rei de Israel"},' +
    '"MAR_10": {"CAPBIBLIA":"I Samuel 13 a 14", "SIGLAES":"PP", "CAPES":"Cap. 60", "NOMES":"A Presunção de Saul"},' +
    '"MAR_11": {"CAPBIBLIA":"I Samuel 15", "SIGLAES":"PP", "CAPES":"Cap. 61", "NOMES":"A Rejeição de Saul"},' +
    '"MAR_12": {"CAPBIBLIA":"I Samuel 16", "SIGLAES":"PP", "CAPES":"Cap. 62", "NOMES":"A Unção de Davi"},' +
    '"MAR_13": {"CAPBIBLIA":"I Samuel 17 a 19", "SIGLAES":"PP", "CAPES":"Cap. 63", "NOMES":"Davi e Golias"},' +
    '"MAR_14": {"CAPBIBLIA":"Salmos 34 e 57; I Samuel 20 a 22", "SIGLAES":"PP", "CAPES":"Cap. 64", "NOMES":"A Fuga de Davi"},' +
    '"MAR_15": {"CAPBIBLIA":"Salmos 121 e I Samuel 23 a 26", "SIGLAES":"PP", "CAPES":"Cap. 65", "NOMES":"A Magnanimidade de Davi"},' +
    '"MAR_16": {"CAPBIBLIA":"I Samuel 27 e 31 e I Crônicas 10", "SIGLAES":"PP", "CAPES":"Cap. 66", "NOMES":"A Morte de Saul"},' +
    '"MAR_17": {"CAPBIBLIA":"I Samuel 28", "SIGLAES":"PP", "CAPES":"Cap. 67", "NOMES":"Feitiçaria Antiga e Moderna"},' +
    '"MAR_18": {"CAPBIBLIA":"I Samuel 29 e 30 e II Samuel 1", "SIGLAES":"PP", "CAPES":"Cap. 68", "NOMES":"Davi em Ziclague"},' +
    '"MAR_19": {"CAPBIBLIA":"II Samuel 2 a 5 e I Crônicas 11", "SIGLAES":"PP", "CAPES":"Cap. 69", "NOMES":"Davi chamado ao trono"},' +
    '"MAR_20": {"CAPBIBLIA":"II Samuel 6 a 10 e I Crônicas 12, 16 e 17", "SIGLAES":"PP", "CAPES":"Cap. 70", "NOMES":"O Reinado de Davi"},' +
    '"MAR_21": {"CAPBIBLIA":"Salmos 32 e 51, II Samuel 11 a 14", "SIGLAES":"PP", "CAPES":"Cap. 71", "NOMES":"O Pecado e Arrependimento de Davi"},' +
    '"MAR_22": {"CAPBIBLIA":"Salmos 3, II Samuel 15 a 20", "SIGLAES":"PP", "CAPES":"Cap. 72", "NOMES":"Rebelião de Absalão"},' +
    '"MAR_23": {"CAPBIBLIA":"Salmos 18, II Samuel 21 a 24", "SIGLAES":"PP", "CAPES":"Cap. 73", "NOMES":"Os Últimos anos de Davi"},' +
    '"MAR_24": {"CAPBIBLIA":"I Reis 1 a 3", "SIGLAES":"**", "CAPES":"****", "NOMES":"****"},' +
    '"MAR_25": {"CAPBIBLIA":"II Crônicas 1, I Reis 4 a 6", "SIGLAES":"PR", "CAPES":"Cap. 01", "NOMES":"Salomão"},' +
    '"MAR_26": {"CAPBIBLIA":"II Crônicas 2, I Reis 7 e 8", "SIGLAES":"PR", "CAPES":"Cap. 02", "NOMES":"O Templo e sua Dedicação"},' +
    '"MAR_27": {"CAPBIBLIA":"II Crônicas 3, I Reis 9 e 10", "SIGLAES":"PR", "CAPES":"Cap. 03", "NOMES":"Orgulho da Prosperidade"},' +
    '"MAR_28": {"CAPBIBLIA":"II Crônicas 4 e 5, I Reis 11", "SIGLAES":"PR", "CAPES":"Cap. 04", "NOMES":"Resultado da Transgressão"},' +
    '"MAR_29": {"CAPBIBLIA":"II Crônicas 6 a 9", "SIGLAES":"PR", "CAPES":"Cap. 05", "NOMES":"O Arrependimento"},' +
    '"MAR_30": {"CAPBIBLIA":"I Reis 12 e 13", "SIGLAES":"PR", "CAPES":"Cap. 06", "NOMES":"O Reino Resgatado"},' +
    '"MAR_31": {"CAPBIBLIA":"II Crônicas 10 e 11, I Reis 14", "SIGLAES":"PR", "CAPES":"Cap. 07", "NOMES":"Jeroboão"},' +
    '"ABR_1": {"CAPBIBLIA":"II Crônicas 12, I Reis 15 e 16", "SIGLAES":"PR", "CAPES":"Cap. 08", "NOMES":"Apostasia Nacional"},' +
    '"ABR_2": {"CAPBIBLIA":"II Crônicas 13 e 14, I Reis 17", "SIGLAES":"PR", "CAPES":"Cap. 09", "NOMES":"Elias o Tesbita"},' +
    '"ABR_3": {"CAPBIBLIA":"II Crônicas 15 e 16, I Reis 18:1-19", "SIGLAES":"PR", "CAPES":"Cap. 10", "NOMES":"A Voz de Severa Repreensão"},' +
    '"ABR_4": {"CAPBIBLIA":"II Crônicas 18 e 19, I Reis 18:20-46", "SIGLAES":"PR", "CAPES":"Cap. 11", "NOMES":"O Carmelo"},' +
    '"ABR_5": {"CAPBIBLIA":"II Crônicas 20 e 21", "SIGLAES":"PR", "CAPES":"Cap. 12", "NOMES":"De Jezreel a Horebe"},' +
    '"ABR_6": {"CAPBIBLIA":"II Crônicas 22 e 23 e I Reis 19", "SIGLAES":"PR", "CAPES":"Cap. 13", "NOMES":"Que Fazer aqui?"},' +
    '"ABR_7": {"CAPBIBLIA":"I Reis 20 a 22", "SIGLAES":"PR", "CAPES":"Cap. 14", "NOMES":"No Espírito e Virtude de Elias"},' +
    '"ABR_8": {"CAPBIBLIA":"I Crônicas 1 e 2, II Crônicas 17", "SIGLAES":"PR", "CAPES":"Cap. 15", "NOMES":"Josafá"},' +
    '"ABR_9": {"CAPBIBLIA":"I Crônicas 3 e 4", "SIGLAES":"PR", "CAPES":"Cap. 16", "NOMES":"A queda da Casa de Acabe"},' +
    '"ABR_10": {"CAPBIBLIA":"I Crônicas 5, II Reis 1 e 2", "SIGLAES":"PR", "CAPES":"Cap. 17", "NOMES":"O Chamado de Elizeu"},' +
    '"ABR_11": {"CAPBIBLIA":"II Reis 3 e 12", "SIGLAES":"PR", "CAPES":"Cap. 18", "NOMES":"As Águas Purificadas"},' +
    '"ABR_12": {"CAPBIBLIA":"II Reis 4,13 e 14", "SIGLAES":"PR", "CAPES":"Cap. 19", "NOMES":"Um Profeta de Paz"},' +
    '"ABR_13": {"CAPBIBLIA":"II Reis 5 a 8", "SIGLAES":"PR", "CAPES":"Cap. 20", "NOMES":"Naamã"},' +
    '"ABR_14": {"CAPBIBLIA":"II Reis 9 a 11", "SIGLAES":"PR", "CAPES":"Cap. 21", "NOMES":"O Fim do Ministério de Elizeu"},' +
    '"ABR_15": {"CAPBIBLIA":"Jonas 1 a 4", "SIGLAES":"PR", "CAPES":"Cap. 22", "NOMES":"A Grande Cidade de Nínive"},' +
    '"ABR_16": {"CAPBIBLIA":"Oséias 1 a 3", "SIGLAES":"PR", "CAPES":"Cap. 23", "NOMES":"O Cativeiro Assírio"},' +
    '"ABR_17": {"CAPBIBLIA":"Oséias 4 a 10", "SIGLAES":"**", "CAPES":"****", "NOMES":"****"},' +
    '"ABR_18": {"CAPBIBLIA":"Oséias 11 a 14", "SIGLAES":"PR", "CAPES":"Cap. 24", "NOMES":"Destr: Porque lhe Falta Conhecimento"},' +
    '"ABR_19": {"CAPBIBLIA":"Isaías 1 a 6", "SIGLAES":"PR", "CAPES":"Cap. 25", "NOMES":"O chamado de Isaías"},' +
    '"ABR_20": {"CAPBIBLIA":"Isaías 40 a 42", "SIGLAES":"PR", "CAPES":"Cap. 26", "NOMES":"Eis aqui está o vosso Deus"},' +
    '"ABR_21": {"CAPBIBLIA":"II Crônicas 28, II Reis 15 a 17", "SIGLAES":"PR", "CAPES":"Cap. 27", "NOMES":"Acaz"},' +
    '"ABR_22": {"CAPBIBLIA":"Isaías 37 a 39, II Reis 18 a 20", "SIGLAES":"PR", "CAPES":"Cap. 28", "NOMES":"Ezequias"},' +
    '"ABR_23": {"CAPBIBLIA":"II Crônicas 29 a 32", "SIGLAES":"PR", "CAPES":"Cap. 29", "NOMES":"Os Embaixadores de Babilônia"},' +
    '"ABR_24": {"CAPBIBLIA":"Naum 1 a 3", "SIGLAES":"PR", "CAPES":"Cap. 30", "NOMES":"Liberto da Assíria"},' +
    '"ABR_25": {"CAPBIBLIA":"Isaías 7 a 11", "SIGLAES":"PR", "CAPES":"Cap. 31", "NOMES":"Esperança para os Gentios"},' +
    '"ABR_26": {"CAPBIBLIA":"II Reis 21 a 23", "SIGLAES":"PR", "CAPES":"Cap. 32", "NOMES":"Manassés e Josias"},' +
    '"ABR_27": {"CAPBIBLIA":"II Crônicas 24 a 27", "SIGLAES":"PR", "CAPES":"Cap. 33", "NOMES":"O Livro da Lei"},' +
    '"ABR_28": {"CAPBIBLIA":"Jeremias 1 a 3", "SIGLAES":"PR", "CAPES":"Cap. 34", "NOMES":"Jeremias"},' +
    '"ABR_29": {"CAPBIBLIA":"II Reis 24 e 25", "SIGLAES":"PR", "CAPES":"Cap. 35", "NOMES":"A Condenação Iminente"},' +
    '"ABR_30": {"CAPBIBLIA":"II Crônicas 33 a 36", "SIGLAES":"PR", "CAPES":"Cap. 36", "NOMES":"O Último Rei de Judá"},' +
    '"MAI_1": {"CAPBIBLIA":"Jeremias 36 a 38", "SIGLAES":"PR", "CAPES":"Cap. 37", "NOMES":"Levados Cativos para a Babilônia"},' +
    '"MAI_2": {"CAPBIBLIA":"Jeremias 29 a 32", "SIGLAES":"PR", "CAPES":"Cap. 38", "NOMES":"Luz em Meio as Trevas"},' +
    '"MAI_3": {"CAPBIBLIA":"I Crônicas 6 a 8, Daniel 1", "SIGLAES":"PR", "CAPES":"Cap. 39", "NOMES":"Daniel na Corte Babilônica"},' +
    '"MAI_4": {"CAPBIBLIA":"Daniel 2, 7 e 8", "SIGLAES":"PR", "CAPES":"Cap. 40", "NOMES":"O Sonho de Nabucodonosor"},' +
    '"MAI_5": {"CAPBIBLIA":"I Crônicas 9, Daniel 3", "SIGLAES":"PR", "CAPES":"Cap. 41", "NOMES":"A Fornalha Ardente"},' +
    '"MAI_6": {"CAPBIBLIA":"Daniel 4", "SIGLAES":"PR", "CAPES":"Cap. 42", "NOMES":"A Verdadeira Grandeza"},' +
    '"MAI_7": {"CAPBIBLIA":"Daniel 5", "SIGLAES":"PR", "CAPES":"Cap. 43", "NOMES":"O Vigia Invisível"},' +
    '"MAI_8": {"CAPBIBLIA":"Daniel 6", "SIGLAES":"PR", "CAPES":"Cap. 44", "NOMES":"Na Cova dos Leões"},' +
    '"MAI_9": {"CAPBIBLIA":"Esdras 1 a 3", "SIGLAES":"PR", "CAPES":"Cap. 45", "NOMES":"A Volta do Exílio"},' +
    '"MAI_10": {"CAPBIBLIA":"Ageu 1 e 2", "SIGLAES":"PR", "CAPES":"Cap. 46", "NOMES":"Os Profetas de Deus o ajudavam"},' +
    '"MAI_11": {"CAPBIBLIA":"Zacarias 1 a 4", "SIGLAES":"PR", "CAPES":"Cap. 47", "NOMES":"Josué e o Anjo"},' +
    '"MAI_12": {"CAPBIBLIA":"Zacarias 5 a 9", "SIGLAES":"PR", "CAPES":"Cap. 48", "NOMES":"Nem por Força e Nem por Violência"},' +
    '"MAI_13": {"CAPBIBLIA":"Ester 1 a 3", "SIGLAES":"PR", "CAPES":"Cap. 49", "NOMES":"Nos dias da Rainha Ester"},' +
    '"MAI_14": {"CAPBIBLIA":"Esdras 4 a 6", "SIGLAES":"PR", "CAPES":"Cap. 50", "NOMES":"Esdras, o Sacerdote e Escriba"},' +
    '"MAI_15": {"CAPBIBLIA":"Esdras 7 a 10", "SIGLAES":"PR", "CAPES":"Cap. 51", "NOMES":"Um Reavivamento Espiritual"},' +
    '"MAI_16": {"CAPBIBLIA":"Neemias 1 e 2", "SIGLAES":"PR", "CAPES":"Cap. 52", "NOMES":"Um Homem Oportuno"},' +
    '"MAI_17": {"CAPBIBLIA":"Ester 4, Neemias 3 e 4", "SIGLAES":"PR", "CAPES":"Cap. 53", "NOMES":"Os Reconstrutores do Muro"},' +
    '"MAI_18": {"CAPBIBLIA":"Ester 5 a 7, Neemias 5", "SIGLAES":"PR", "CAPES":"Cap. 54", "NOMES":"Condenadas a Extorção"},' +
    '"MAI_19": {"CAPBIBLIA":"Ester 8 a 10, Neemias 6", "SIGLAES":"PR", "CAPES":"Cap. 55", "NOMES":"Ciladas dos Pagãos"},' +
    '"MAI_20": {"CAPBIBLIA":"Neemias 7 a 10", "SIGLAES":"PR", "CAPES":"Cap. 56", "NOMES":"Instruídos na Lei de Deus"},' +
    '"MAI_21": {"CAPBIBLIA":"Neemias 11 a 13", "SIGLAES":"PP", "CAPES":"Cap. 57", "NOMES":"Reforma"},' +
    '"MAI_22": {"CAPBIBLIA":"Zacarias 10 a 14", "SIGLAES":"PP", "CAPES":"Cap. 58", "NOMES":"A Vinda de um Libertador"},' +
    '"MAI_23": {"CAPBIBLIA":"Malaquias 1 a 4", "SIGLAES":"PP", "CAPES":"Cap. 59", "NOMES":"A Casa de Israel"},' +
    '"MAI_24": {"CAPBIBLIA":"Isaías 63 a 66", "SIGLAES":"PP", "CAPES":"Cap. 60", "NOMES":"Visões da Glõria Futura"},' +
    '"MAI_25": {"CAPBIBLIA":"Marcos 1 a 3", "SIGLAES":"DTN", "CAPES":"****", "NOMES":"****"},' +
    '"MAI_26": {"CAPBIBLIA":"Isaías 12 e 13, Mateus 1", "SIGLAES":"DTN", "CAPES":"Cap. 01", "NOMES":"Deus Conosco"},' +
    '"MAI_27": {"CAPBIBLIA":"Isaías 14 a 16", "SIGLAES":"DTN", "CAPES":"Cap. 02", "NOMES":"O Povo Escolhido"},' +
    '"MAI_28": {"CAPBIBLIA":"Isaías 17 a 19", "SIGLAES":"DTN", "CAPES":"Cap. 03", "NOMES":"A Plenitude dos tempos"},' +
    '"MAI_29": {"CAPBIBLIA":"Isaías 20 a 22, Lucas 2:1-20", "SIGLAES":"DTN", "CAPES":"Cap. 04", "NOMES":"Vos Nasceu Hoje o Salvador"},' +
    '"MAI_30": {"CAPBIBLIA":"Isaías 23 a 25, Lucas 2:21-38", "SIGLAES":"DTN", "CAPES":"Cap. 05", "NOMES":"A Dedicação"},' +
    '"MAI_31": {"CAPBIBLIA":"Isaías 26 a 28, Mateus 2", "SIGLAES":"DTN", "CAPES":"Cap. 06", "NOMES":"Vimos a Sua Estrela"},' +
    '"JUN_1": {"CAPBIBLIA":"Isaías 29 e 30, Lucas 2:39-40", "SIGLAES":"DTN", "CAPES":"Cap. 07", "NOMES":"Em Criança"},' +
    '"JUN_2": {"CAPBIBLIA":"Isaías 31 a 33, Lucas 2:41-52", "SIGLAES":"DTN", "CAPES":"Cap. 08", "NOMES":"A Visita Pascoal"},' +
    '"JUN_3": {"CAPBIBLIA":"Isaías 34 a 36", "SIGLAES":"DTN", "CAPES":"Cap. 09", "NOMES":"Dias de Luta"},' +
    '"JUN_4": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"DTN", "CAPES":"Cap. 10", "NOMES":"A Voz do Deserto"},' +
    '"JUN_5": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"DTN", "CAPES":"Cap. 11", "NOMES":"O Batismo"},' +
    '"JUN_6": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"DTN", "CAPES":"Cap. 12", "NOMES":"A Tentação"},' +
    '"JUN_7": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"DTN", "CAPES":"Cap. 13", "NOMES":"A Vitória"},' +
    '"JUN_8": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"DTN", "CAPES":"Cap. 14", "NOMES":"Achamos o Messias"},' +
    '"JUN_9": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"DTN", "CAPES":"Cap. 15", "NOMES":"Nas Bodas"},' +
    '"JUN_10": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"DTN", "CAPES":"Cap. 16", "NOMES":"Em Seu Templo"},' +
    '"JUN_11": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"DTN", "CAPES":"Cap. 17", "NOMES":"Nicodemos"},' +
    '"JUN_12": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"DTN", "CAPES":"Cap. 18", "NOMES":"É necessário que Ele Cresça"},' +
    '"JUN_13": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"DTN", "CAPES":"Cap. 19", "NOMES":"Junto ao poço de Jacó"},' +
    '"JUN_14": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"DTN", "CAPES":"Cap. 20", "NOMES":"Se não virdes Sinais e Milagres"},' +
    '"JUN_15": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"DTN", "CAPES":"Cap. 21", "NOMES":"Betesda e o Sinédrio"},' +
    '"JUN_16": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"DTN", "CAPES":"Cap. 22", "NOMES":"Prisão e Morte de João Batista"},' +
    '"JUN_17": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"DTN", "CAPES":"Cap. 23", "NOMES":"O reino dos Céus está Próximo"},' +
    '"JUN_18": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"DTN", "CAPES":"Cap. 24", "NOMES":"Não é este o Filho do Carpinteiro?"},' +
    '"JUN_19": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"DTN", "CAPES":"Cap. 25", "NOMES":"O Chamado a Beira do Mar"},' +
    '"JUN_20": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"DTN", "CAPES":"Cap. 26", "NOMES":"Em Cafarnaum"},' +
    '"JUN_21": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"DTN", "CAPES":"Cap. 27", "NOMES":"Podes tornar-me limpo"},' +
    '"JUN_22": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"DTN", "CAPES":"Cap. 28", "NOMES":"Levi Mateus"},' +
    '"JUN_23": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"DTN", "CAPES":"Cap. 29", "NOMES":"O Sábado"},' +
    '"JUN_24": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"DTN", "CAPES":"Cap. 30", "NOMES":"Nomeou Doze"},' +
    '"JUN_25": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"DTN", "CAPES":"Cap. 31", "NOMES":"O Sermão da Montanha"},' +
    '"JUN_26": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"DTN", "CAPES":"Cap. 32", "NOMES":"O Centurião"},' +
    '"JUN_27": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"DTN", "CAPES":"Cap. 33", "NOMES":"Quem são os Meus Irmãos?"},' +
    '"JUN_28": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"DTN", "CAPES":"Cap. 34", "NOMES":"O Convite"},' +
    '"JUN_29": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"DTN", "CAPES":"Cap. 35", "NOMES":"Cala-te, Aquieta-te"},' +
    '"JUN_30": {"CAPBIBLIA":"Jeremias 39 a 41, Lucas 8:40-56", "SIGLAES":"DTN", "CAPES":"Cap. 36", "NOMES":"O Toque da Fé"},' +
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

export function limparBase() {
  const keys = AsyncStorage.getAllKeys();
  keys.then(
    (chaves) => {
      chaves.forEach(x => apagar(x));
    }
  );

}
