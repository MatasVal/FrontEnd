console.log('HELLO STRING');
let str = "Apple, Banana, Kiwi";
let p = str.slice(7, 13);
console.log(`    ${p}`);
p = str.slice(-12, -6);
console.log(`    ${p}`);
//--------------------------
p = str.substring(7, 13);
console.log(`    ${p}`);
//--------------------------
console.log('------------------------------');
let text = 'Please visit Microsoft and Microsoft Windows!';
let n = text.replace('Microsoft', 'CodeAcademy');
console.log(`    ${n}`);

n = text.replace('MICROSOFT', 'CodeAcademy');
console.log(`    ${n}`);
n = text.replace(/MICROSOFT/i, 'CodeAcademy');
console.log(`    ${n}`);
n = text.replace(/Microsoft/g, 'CodeAcademy');
console.log(`    ${n}`);
//--------------------------
console.log('------------------------------');
text = 'Hello World!';
let txtU = text.toUpperCase();
console.log(`    ${txtU}`);
let txtL = text.toLowerCase();
console.log(`    ${txtL}`);
console.log('------------------------------');
let t1 = 'Hello';
let t2 = ' World!';
let t3 = t1.concat(" ", t2);
console.log(`  ${t3}`);
t4 = t1 + ' ' + t2; 
console.log(`  ${t4}`);

console.log('------------------------------');
text = '                 Hello World!             ';
console.log(`pries trim() ${text} |`);
console.log(`po trim() ${text.trim()} |`);
console.log(`po trim() ${text.trimStart()} |`);
console.log(`po trim() ${text.trimEnd()} |`);
console.log('------------------------------');

text = 'HELLO WORLD!';
let c = text.charAt(0);
console.log(`  ${c} -${typeof c}`);

let c1 = text[0];
console.log(`  ${c1} -${typeof c1}`);
text[0] = 'A';
console.log(`  ${text}`);
console.log(`  ${text[0]}`);
console.log('------------------------------');
let arr= text.split('');
console.log(arr);
arr= text.split(' ');
console.log(arr);
console.log(arr[1]);
console.log(arr[3]);