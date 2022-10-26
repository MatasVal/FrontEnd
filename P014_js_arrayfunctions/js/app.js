let topSongs =[
    'Thunderstruck',
    'Able To Live',
    'Come Down To Us',
    'Rival Dealer',
    'Nothing Around Us'
];

topSongs[topSongs.length]='Fortune Song';
topSongs.push('Tie Keliai');
topSongs.push('Zombiai Atrieda');
topSongs.push(true);
console.log(topSongs.push('Candy Shop'));
console.log(`Dainu length: ${topSongs.push('Boruzele')}`);

const poppedIncorrectVal = topSongs.pop();//Boruzele
topSongs.pop();//Candy Shop
topSongs.pop();//true
console.log(poppedIncorrectVal);
console.log(topSongs);

let dishesToWash = ['big plater'];
dishesToWash.unshift('large plate'); //Returns array length
console.log(dishesToWash.unshift('small plate'));
dishesToWash.unshift('cereal bowl');
dishesToWash.unshift('mug');
dishesToWash.unshift('dirty spoon');
dishesToWash.unshift('fork', 'knife');
console.log(dishesToWash);

let removeDish = dishesToWash.shift(); //removes first array element and returns it
console.log(`${removeDish} was cleaned`);
console.log(dishesToWash);
dishesToWash.shift();
dishesToWash.shift();
dishesToWash.shift();
dishesToWash.shift();
dishesToWash.shift();
dishesToWash.shift();
dishesToWash.shift();

console.log(dishesToWash);
console.log('Dishes were cleaned');




//CONCAT
//joins 2 arrays and creates a new array from them both
let fruits = ['apple', 'banana'];
let veggies = ['asparagus', 'brussel sprouts'];
let meats = ['steak', 'chicken breast'];

let veganFood= fruits.concat(veggies);

console.log(fruits.concat(veggies));
console.log(fruits);
console.log(fruits, veggies);
console.log(veganFood);

let allFood = fruits.concat(veggies, meats);
console.log(allFood);


//INCLUDES AND INDEXOF
//include retuns a boolean
//indexOf retuns an integer. if nothing is found retuns -1
let ingredients = [
    'Water',
    'Eel',
    'Corn',
    'Flour',
    'Cheese',
    'Shrimp',
    'Brown sugar',
    'Butter'
];

console.log(ingredients.includes('fish'));//False
console.log(ingredients.includes('Shrimp'));//true
console.log(ingredients.includes('sugar'));//false
console.log(ingredients.includes('Water', 3));//we start searching from Flour, gives false
console.log(ingredients.includes('Cheese', 3));

if(ingredients.includes('Flour')){
    console.log('I am gluten free, i cannot eat that');
}

console.log(ingredients.indexOf('Eel'));
console.log(ingredients.indexOf('sugar'));
console.log(ingredients.indexOf('maple syrup'));
console.log(ingredients.indexOf('Cheese', 5));//search for cheese from Shrimp
console.log(ingredients.indexOf('Cheese', 3));


//REVERSE AND JOIN
//Reverse - Mutates array 
//Join - joins all elements into a single array without mutation
let letters= [
    'T',
    'C',
    'E',
    'P',
    'S',
    'E',
    'R'
]

let randomArrayForReverse =[
    12.3,
    60,
    false
];

console.log(letters);
console.log(letters.reverse()); //Mutates array
console.log(letters);

console.log(letters.join());
console.log(letters.join('&'));
console.log(letters.join('.'));
console.log(letters);

console.log(randomArrayForReverse.join());
console.log(randomArrayForReverse.reverse());
console.log(randomArrayForReverse.join());



