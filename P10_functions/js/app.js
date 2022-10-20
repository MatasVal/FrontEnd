// BASICS
function helloWorld() {
    let worldText = 'World';
    console.log("Hello World!");
    console.log("Nice weather were having!");
    // console.log(`Hello ${worldText}!`);
}

helloWorld();
helloWorld();
helloWorld();

for (let i = 0; i < 20; i++) {
    helloWorld();
}

// Math funkcijos
let mathPi = Math.PI;
console.log(mathPi);
// let roundValueMath = Math.round(4,9); // INCORRECT ARGUMENT USAGE
let roundValueMath = Math.round(mathPi)
                        .toFixed(2);
console.log(roundValueMath);
let absValueMath = Math.abs(-456);
console.log(absValueMath);
let floorValueMath = Math.floor(2.8);
console.log(floorValueMath);
let ceilValueMath = Math.ceil(2.5);
console.log(ceilValueMath);
let powValueMath = Math.pow(2,5);
console.log(powValueMath);
let randomFromMath = Math.random()*10;
console.log(`Number was calculated: ${randomFromMath}`);

function throwDie() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Die was rolled: ${roll}`);
}
throwDie();

function throwDice() {
    throwDie();
    throwDie();
    throwDie();
}

throwDice();

//FUNCTIONS WITH ARGUMENTS 
console.log('hello'.toUpperCase());
console.log('hello'.indexOf('l'));

function greet(name){
console.log(`Hello ${name}`);
console.log(`Nice to meet you!`);
}

greet();
greet(null);
greet('Matas')

function throwDice(numRolls){
    for (let i = 0; i < numRolls; i++) {
        throwDie(); 
    }
}
throwDice(5);

function square(num){
    console.log(num*num);
}

square(9);

function sum(firstNumber, secondNumber){
console.log(firstNumber + secondNumber);
}

sum(8,9);

//DIVISION

function division(a, b){
    console.log(a/b);
}

division(9, 2)



// FUNCTIONS RETURNING VALUES


const yell = 'welcome'.toUpperCase();
console.log(yell);


function sumReturn(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}
console.log(sumReturn(87,56));

function sumBrokenReturn(firstNumber, secondNumber){
    return firstNumber + secondNumber;
    console.log(firstNumber + secondNumber); //neigyvedina sios dalies, nes jau grazinta reiksme
}

function sumTextReturn(firstNumber, secondNumber){
    return `Sum: ${firstNumber + secondNumber}`;
}
console.log(sumTextReturn(78,89));


function isGreen(color){
    if(color.toLowerCase() === 'green'){
        return true;
    }
    else{
        return false;
    }
}

console.log(`isGreen: ${isGreen('Green')}`);
console.log(`isGreen: ${isGreen('Blue')}`);


function isBetterGreen(color){
    if(color.toLowerCase() === 'green'){
        return true;
    }    
    return false;
    
}

function isBestGreen(color){
    return color.toLowerCase() === 'green';    
}


function containGreen(arr) {
    for (let color of arr) {
        console.log(color);
        if(color.toLowerCase() === 'green' || color === 'lime'){
            return true;
        }
        //return false; nerasom sito nes kitaip iseitume
    }
    return false;
}

let colorArray = ['Pink', 'Blue', 'Green'];
console.log(`contains Green: ${containGreen(colorArray)}`);



// SCOPE
// Function scope

function scopeExample(){
    let scopeName = 'Example scope';
    const creationDate =Date.UTC();
    var tag = 'learning';
    console.log(tag);
}

//console.log(tag); // not possible to access direct function scope

scopeExample();

//Block scope
let animal1 = 'Dog';

function PrintAnimal1(){
    let animal1 = 'Cat';
    console.log(animal1);
}

PrintAnimal1();

console.log(animal1);