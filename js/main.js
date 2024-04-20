import prompt from "prompt-sync";
import repite from "../js/module/repite.js";

let input = prompt()
let opc = undefined;

do{
    let nm =input("Ingrese una oracion: ");
    console.log(repite(nm));
    console.log(`Desea ingresar una palabra diferente? 1. Sí 0. No`);
    opc = Number(input());
}while(opc);