"Use strict"
// // declarar variables en js
// // var variable global
// // let variable
// // const es constante
// // let y const nacen porque son variables con alcance o scope {}

// // let edad= prompt("dame tu edad");
// // // Number(edad);
// // // let edadmenos= edad-5
// // console.log(edad+10)
// // console.log(typeof(edad+10))
// // // document.write(nombre);

// // // tipos de datos

// // let texto ='Mi nombre es Diego"Otro texto"';
// // let numero = 4;
// // console.log(numero);
// // String(numero);
// // Number(numero);

// let boolean =true;

// let menor =(10==='10');
// console.log(menor);

// let fecha = new Date();

// // operadores aritmeticos
// let suma = 1+2;
// let resta = 1-2;
// let multiplicacion = 1*2;
// let division = 1/2;
// let mod =10 % 5;

// let uno = 1
// uno++;
// console.log(uno);

// let dos = 2
// dos--;
// console.log(dos);

// // operadores relacionales

// let mayor = 10 > 5;
// let menor = 5 < 10;
// let mayorigualque = 10 <= 5;
// let menorigualque = 10>= 5;
// let igual = 10 == '10';
// let exactamente igual = 10 === 10;
// let diferente = 10!= 5;


//Tipos de datos especiales o compuestss 

// Arrays = vectores conjunto de datos y pueden ser diferente tipo, 

let frutas = ['pera','manzana','platano',null];
let numeros = ['cinco',6,23,'veinte'];

//Objetos

let persona = {nombre:'Diego', edad: 18, correo:'diego@ucol'};

//onjeto JSON(Java Script Object notation) formato de intercambio de datos ligero y descriptivo

let personas = [
    {nombre:'Diego', edad: 18, correo:'diego@ucol'},
    {nombre:'Juan', edad: 28, correo:'juan@ucol'},
    {nombre:'Pedro', edad: 38, correo:'pedro@ucol'},
    persona,
]; 

// destructuracion -> personas[2].nombre

// operadores logicos o boolean (true or false) 

let numero1=10;
let numero2=14;

// AND o Y 
let and = (numero1 >10 && numero2 >10);
// para que un and tenga true todas las condiciones se tienen que cumplir todas las condiciones, sino, saldra false

//OR o O 
let or = (numero1 >10 || numero2 >10);
// para que un or tenga true se debe de cumplir minimo una sola condicion, si no se cumple ninguna saldra false

// NOT o NEGACION
let negacion = !(numero1 > 10 ); false
