const fitBitData = {
    totalSteps: 308727,
    // totalSteps: 308727, // We just override ANYTHING with the same name
    totalKms: 387.7,
    avgCalorieBurn: 400,
    workoutsThisWeek: '5 of 7',
    avgGoodSleep: '2:13',
    45: 'forty five',
    '79 trombones': 'great song'
};

console.log(fitBitData.totalSteps);
// console.log(fitBitData.45); // Throws error. Needs a different syntax to access property.

// Dot syntax
let dataDotSyntax = {a:1, b:2, c:3};
console.log(dataDotSyntax.a);

// Square bracket syntax
const numbers = {
    100: 'one hundred',
    16: 'sixteen'
};

console.log(numbers[100]); // 100 gets converted to '100' string
console.log(numbers['100']);
console.log(fitBitData['avgCalorieBurn']);
console.log(fitBitData['79 trombones']);

const pallete = {
    red: '#eb4d4b',
    yellow: '#f9ca24',
    blue: '#ff336b'
};

console.log(pallete.blue);

// Lets user pick random color
let mysteryColor = 'blue';
console.log(pallete[mysteryColor]);




// ADDING AND UPDATE PROPERTIES
const userReviews = {};
// userReviews['colorEnabled'] = true;
userReviews['queenBee49'] = 4.0;
userReviews.mrSmith78 = 3.5;

userReviews['queenBee49'] += 0.5;
userReviews.mrSmith78++;

console.log(userReviews);






// NESTING ARRAYS AND OBJECTS
const student = {
    firstName: 'David',
    lastName: 'Jones',
    strengths: ['Music', 'Art'],
    exams: {
        midterm: 10,
        final: 9
    },
    // fullName function returns a string
    // public string fullName()
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    },
    // logFullName logs into REPL fullname
    // public void logFullName()
    logFullName: function() {
        console.log(this.firstName, this.lastName);
    }
};

console.log(student.fullName());

const studentAvgExamMarkCount = 2;
const studentAvgExamMark = (student.exams.midterm + student.exams.final) / studentAvgExamMarkCount;

console.log(student.strengths[1]);

const shoppingCart = [
    {
        product: 'Jenga',
        price: 6.88,
        quantity: 1
    },
    {
        product: 'Warcraft TableTop',
        price: 49.99,
        quantity: 3
    },
    {
        product: 'Pandemic',
        price: 39.99,
        quantity: 2
    }
];

console.log(shoppingCart);

const game = {
    player1: {
        username: 'Blue',
        playgingAs: 'X'
    },
    player2: {
        username: 'Red',
        playgingAs: 'O'
    },
    board: [
        ['O', null, 'X']
        [null, 'X', 'O']
        ['X', 'O', null]
    ]
}


// OBJECTS and reference types
const pallete2 = pallete; //Assigning a reference
pallete2.green = '#ebf876';
pallete2.blue = '#30336b';
console.log(pallette);





//ARRAY/OBJECT EQUALITY
let nums = [1,2,3];
let mysteryNums = [1,2,3];

console.log(nums===mysteryNums);
console.log(nums==mysteryNums);


let moreNums = nums;

console.log(moreNums===nums);

const user2 ={
    username: 'Brownie45',
    email: 'brownie85@gmail.com',
    notifications: []
};

console.log(user2.notifications==[]);


console.log(!user2.notifications.length);
console.log(!user2.notifications.length > 0);
console.log(user2.notifications.length === 0);

const movieReviews = {
    Arrival: 9.5,
    Alien: 9.5,
    Amelie: 9.5,
    'In Bruges': 9.5,
    Amadeus: 9.5
}

movieReviews['Lord of The Rings'] = 9.8;

for (let propKey of Object.keys(movieReviews)) {
    console.log(`${propKey} -> ${movieReviews[propKey]}`);
}

const movieRatings = Object.values(movieReviews);
let totalRating = 0;
for(let propValue of movieRatings){
    console.log(propValue);
    totalRating += propValue;
}

console.log(totalRating);
console.log(totalRating/movieRatings.length);
