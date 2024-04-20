import prompt from "prompt-sync";
import edad from "../js/module/edad.js";

let input = prompt()
let opc = undefined;

do{
    let nm =Number(input("Ingrese su año de nacimiento: "));
    console.log(edad(nm));            
    console.log(`Desea ingresar un año diferente? 1. Sí 0. No`);
    opc = Number(input());
}while(opc);