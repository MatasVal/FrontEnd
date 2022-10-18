console.log('hello switch');
let data = new Date('2022-01-01');
switch (data.getDay()) {
    case 0:
        day = 'Sekmadienis'
        break;
    case 1:
        day = 'Pirmadienis'
        break;
    case 2:
        day = 'Antradienis'
        break;  
    case 3:
        day = 'Treciadienis'
        break;  
    case 4:
        day = 'Ketvirtadienis'
        break; 
    case 5:
        day = 'Penktadienis'
        break;  
    case 6:
        day = 'Sestadienis'
        break;
    default:
        day ='';       
}
console.log(`  day=${day}`);

//-------------------

switch (data.getDay()) 
{
    case 1:
        break;
    case 2:
    case 3:
    case 4:
    case 5:
        txt = 'Darbo diena';
        break;
    case 0:
    case 6:
        txt = 'Savaitgalis';
        break;
    default:
        txt ='kita';
}


let d = data.getDay();
console.log(` ---${d}   ${typeof d}`);
console.log(` txt=${txt}`);

//-------------------

console.log('-----------------');

let x = '0';
switch (x) 
{
    case 0:
        txt= 'isjungta'
        break;
    case 1:
        txt= 'ijungta'
        break;
    case '0':
        txt= 'NULIS'
        break;
    default:
        txt= 'nezinoma'
        
}
console.log(` reiksme=${txt}`);

