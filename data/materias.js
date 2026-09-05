
// data/materias.js
export const materias = [
  {
    id: "eletronica",
    nome: "Eletrônica Básica",
    cor: "sky", // sky, emerald, amber, purple, etc.
    ferramentas: [
      {
        titulo: "Circuito: LED & Resistor",
        versao: "v1.0",
        descricao: "Simulador interativo de dimensionamento pela Lei de Ohm, tensão, corrente e teste de sobrecorrente.",
        link: "./materias/eletronica/led.html"
      }
    ]
  },
  {
    id: "sistemas-digitais",
    nome: "Sistemas Digitais",
    cor: "purple",
    ferramentas: [
      {
        titulo: "Minimizador de K-Map",
        versao: "v1.0",
        descricao: "Mapa de Karnaugh interativo de 2 a 4 variáveis com agrupamentos toroidais e saída SOP.",
        link: "./materias/SD_I/kmap.html"
      }
    ]
  },
  {
    id: "flip-flops",
    nome: "Flip-Flops",
    cor: "emerald",
    ferramentas: [
      {
        titulo: "Simulador de Flip-Flops",
        versao: "v1.0",
        descricao: "Simulador interativo de flip-flops D, JK e T com diagramas de tempo e tabelas de verdade.",
        link: "./materias/SD_I/Flip_Flop.html"
      }
    ]
  }
];