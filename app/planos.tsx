const livrosstring = '{"PP": "Patriarcas e Profetas","PR": "Profetas e Reis", "AA": "Atos dos Apóstolos", "DTD": "O Desejado de Todas as Nações", "PJ": "Parábolas de Jesus","GC": "O Grande Conflito"}';

const planosstring = '{' +
    '"JAN_1": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"", "NOMES":"Prefacio"},' +
    '"JAN_2": {"CAPBIBLIA":"Salmos 3 a 6 e Genesis 1", "SIGLAES":"PP", "CAPES":"Cap. 01", "NOMES":"A Criação"},' +
    '"JAN_3": {"CAPBIBLIA":"Salmos 7 a 8  e Genesis 2", "SIGLAES":"PP", "CAPES":"Cap. 02", "NOMES":"Outro"},' +
    '"JAN_4": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 03", "NOMES":"Prefacio"},' +
    '"JAN_5": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 04", "NOMES":"Prefacio"},' +
    '"JAN_6": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 05", "NOMES":"Prefacio"},' +
    '"JAN_7": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 06", "NOMES":"Prefacio"},' +
    '"JAN_8": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 07", "NOMES":"Prefacio"},' +
    '"JAN_9": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 08", "NOMES":"Prefacio"},' +
    '"JAN_10": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 09", "NOMES":"Prefacio"},' +
    '"JAN_11": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 10", "NOMES":"Prefacio"},' +
    '"JAN_12": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 11", "NOMES":"Prefacio"},' +
    '"JAN_13": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 12", "NOMES":"Prefacio"},' +
    '"JAN_14": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 13", "NOMES":"Prefacio"},' +
    '"JAN_15": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 14", "NOMES":"Prefacio"},' +
    '"JAN_16": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 15", "NOMES":"Prefacio"},' +
    '"JAN_17": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 16", "NOMES":"Prefacio"},' +
    '"JAN_18": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 17", "NOMES":"Prefacio"},' +
    '"JAN_19": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 18", "NOMES":"Prefacio"},' +
    '"JAN_20": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 19", "NOMES":"Prefacio"},' +
    '"JAN_21": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 20", "NOMES":"Prefacio"},' +
    '"JAN_22": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 21", "NOMES":"Prefacio"},' +
    '"JAN_23": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 22", "NOMES":"Prefacio"},' +
    '"JAN_24": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 23", "NOMES":"Prefacio"},' +
    '"JAN_25": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 24", "NOMES":"Prefacio"},' +
    '"JAN_26": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 25", "NOMES":"Prefacio"},' +
    '"JAN_27": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 26", "NOMES":"Prefacio"},' +
    '"JAN_28": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 27", "NOMES":"Prefacio"},' +
    '"JAN_29": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 28", "NOMES":"Prefacio"},' +
    '"JAN_30": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 29", "NOMES":"Prefacio"},' +
    '"JAN_31": {"CAPBIBLIA":"Salmos 1 a 2", "SIGLAES":"PP", "CAPES":"Cap. 30", "NOMES":"Prefacio"}' +
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
    let planos = Object.assign({}, JSON.parse(livrosstring));
    return planos[chave];
}
