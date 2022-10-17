


const hour = 20;
let greeting = 'Good Night';

if (hour< 18)
{
    greeting = 'Good day';
}

else{
    greeting = 'Good Night';
}

console.log(greeting);



if (hour< 10)
{
    greeting = 'Good morning';
} else if(hour> 20){
    greeting = 'Good day';
}else{
    greeting ='Good evening'
}

console.log(greeting);


let day = null;
console.log(day);
if (day) {
    greeting = 'GOOD DAY'
} else {
    greeting = 'NOT DAY'
}
console.log(greeting);
console.log(undefined === null);