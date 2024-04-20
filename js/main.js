import prompt from "prompt-sync";
import diez from "../js/module/mayor10.js";

let input = prompt()
let opc = undefined;

do{
    let nm =Number(input("Ingrese el numero: "));
    console.log(diez(nm));            
    console.log(`Desea ingresar un numero diferente? 1. Sí 0. No`);
    opc = Number(input());
}while(opc);