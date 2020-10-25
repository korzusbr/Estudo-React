/*
conseito de curto circuito é uma forma abreviada de chegar se u retorno de uma condição
é false ou não, onde o && significa retorno true e o || significa false.

exemplo tradicional

let isValid=true;
if (isValid) {
    console.log('o retorno é true');
} else {
    console.log('o retorno e falso);
}
*/

//uscando curso circuito
let isValid=false;
isValid && console.log("mensagem exibida para true"); //vai ser executado caso retorno seja true;
isValid || console.log("mensagem exibida para falso"); // vai ser executado caso o retono sej falso;