/*parašykite programą kurioje ivedami 3 skaiciai
ir išvedama ar yra neigiamų skaičių tarp tų trijų*/

let x, y, z;
x = window.prompt('iveskite pirma skaiciu', '0');
y = window.prompt('iveskite pirma skaiciu', '0');
z = window.prompt('iveskite pirma skaiciu', '0');

if (+x < 0 || +y < 0 || +z < 0){
    console.log('   YRA neigiamu');

}else{
    console.log('   VISI teigiami');
}

console.log('---------------------------');


let kiekis = 0;

if (+x < 0){
    kiekis++
}
if (+y < 0){
    kiekis++
}
if (+z < 0){
    kiekis++
}


if (kiekis < 0){
    console.log('   YRA neigiamu');
    
}else{
    console.log('   VISI teigiami');
}
console.log(`neigiamu kiekis yra ${kiekis}`);