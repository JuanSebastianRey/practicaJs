import prompt from "prompt-sync";
import getRandomInt from "../js/module/aleatorio.js";

let input = prompt()
let opc = undefined;

do{
    const nm = Number(input("Ingrese el primer numero:"));
    const nm2 = Number(input("Ingrese el segundo numero:"));
    let s = Number(input(`Ingrese un numero entre el rango de ${nm} a ${nm2}: `))
    console.log(getRandomInt(nm, nm2, s));
    console.log(`Desea ingresar un numero diferente? 1. Sí 0. No`);
    opc = Number(input());
}while(opc);