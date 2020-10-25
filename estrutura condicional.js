let idade=21;
let paisPresentes=false;
let comprouBilhete=false;

const podeViajar=(idade >=18 || paisPresentes) && comprouBilhete;
console.log(`Pode viajar ${podeViajar}`);

let n1=6;
let n2=8
let media=(n1+n2)/2;
console.log(`Valor da media é: ${media}`);



let idadePassageiro=16;
let comprouPassagem=true;
let acompanhante=false;

if (comprouPassagem===true) {
    if(idadePassageiro >=18) {
        console.log("Tem permissão para viajar");
    } else {
         if(acompanhante) {
            console.log("Tem permissão para viajar");
        } else {
            console.log("Menores de 18 anos não podem viajar sozinhos");
        }
    }
} else {
        console.log("Você precisa de uma Passagem para Viajar");
}

