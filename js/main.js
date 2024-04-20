import prompt from "prompt-sync";
import suma from "../js/module/suma.js";

let input = prompt()
let opc = undefined;

do{
    let nm =Number(input("Ingrese el primer numero: "));
    let nm2 = Number(input("Ingrese el segundo numero: "));
    console.log(suma(nm, nm2));            
    console.log(`Desea ingresar un nombre diferente? 1. Sí 0. No`);
    opc = Number(input());
}while(opc);