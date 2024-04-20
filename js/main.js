import prompt from "prompt-sync";
import bmi from "../js/module/bmi.js";

let input = prompt()
let opc = undefined;

do{
    let nm =Number(input("Ingrese su peso: "));
    let nm2 =Number(input("Ingrese su altura: "));
    console.log(bmi(nm, nm2));            
    console.log(`Desea ingresar datos diferentes? 1. Sí 0. No`);
    opc = Number(input());
}while(opc);