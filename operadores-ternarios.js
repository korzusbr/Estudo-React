
/* Operador ternário é uma nova forma de utiliar uma situação de condicionamento, da mesma forma feita com
o operador if, porém com uma sintaxe reduzida. */

//MODO TRADICIONAL
// let msgMaiorIdate="";
// if (msgMaiorIdate >=18) {
//     msgMaiorIdate="É maior de idade";
// } else {
//     msgMaiorIdate="É menor de idade";
// }

//MODO TERNARIO
let idade=17;
let msgMaiorIdate=(idade >=18) ? "É maior de idade " : "É menor de idade";
console.log(`Valor da mensagem ${msgMaiorIdate}`);