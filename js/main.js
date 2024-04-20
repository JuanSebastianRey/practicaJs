import prompt from "prompt-sync";
import repite from "../js/module/saluda.js";

let input = prompt()
let opc = undefined;

do{
    let nm =input("Ingrese su nombre: ");
    console.log(repite(nm));
    console.log(`Desea ingresar un nombre diferente? 1. Sí 0. No`);
    opc = Number(input());
}while(opc);