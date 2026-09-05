
// data/materias.js
export const materias = [
  {
    id: "eletronica",
    nome: "Eletrônica",
    semestre: 4,
    cor: "sky", // sky, emerald, amber, purple, etc.
    ferramentas: [
      {
        titulo: "Circuito: LED & Resistor",
        descricao: "Simulador interativo de dimensionamento pela Lei de Ohm, tensão, corrente e teste de sobrecorrente.",
        link: "./materias/semestre4/eletronica/led.html"
      }
    ]
  },
  {
    id: "sistemas-digitaisI",
    nome: "Sistemas Digitais I",
    semestre: 2,
    cor: "purple",
    ferramentas: [
      {
        titulo: "Minimizador de K-Map",
        descricao: "Mapa de Karnaugh interativo de 2 a 4 variáveis com agrupamentos toroidais e saída SOP.",
        link: "./materias/semestre2/SD_I/kmap.html"
      },
      {
        titulo: "Simulador de Flip-Flops",
        descricao: "Simulador interativo de flip-flops D, JK e T com diagramas de tempo e tabelas de verdade.",
        link: "./materias/semestre2/SD_I/Flip_Flop.html"
      }
    ]
  }
];