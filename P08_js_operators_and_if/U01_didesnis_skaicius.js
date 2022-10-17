/*Parašykite progama, kuri praso ivesti dus kaicius ir isveda kuris didenis, arba abu lygus*/

let a, b;
a = window.prompt('iveskite pirma skaiciu', '0');
b = window.prompt('iveskite pirma skaiciu', '0');

if (a===b)
{
console.log('Skaiciai yra lygus');
}else if (+a > +b) {
    console.log('A yra didesnis');
} else{
    console.log('B yra didesnis');
}