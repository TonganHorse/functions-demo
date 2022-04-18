let anakinsHealth = 100;

// console.log(String(anakinsHealth));
// console.log(Boolean(anakinsHealth));


// change string to number
// console.log(Number(anakinsHealth)); 
// console.log(+anakinsHealth);
// console.log(parseInt(anakinsHealth));

// STRING METHODS
let theWinnerIs = 'Anakin is the winner';
let winner = theWinnerIs.replace('n', 'l')
let newWinnerIs = theWinnerIs.replaceAll('n','l')
// console.log(newWinnerIs);
// console.log(winner);

let newWinnerSplit = theWinnerIs.split(' ');
// console.log(newWinnerSplit);

let newWinnerJoin = newWinnerSplit.join('    -    ');
// console.log(newWinnerJoin);


// FUNCTIONS

function isAnakinAlive() {
    if (anakinsHealth > 0) {
        console.log('anakin is alive')
    } else {
        console.log('anakin is dead')
    }
}

isAnakinAlive();


function surpriseAttack(attack) {
    anakinsHealth -= attack;
    isAnakinAlive();
}

// surpriseAttack(100)

function greeting(person1, person2) {
    // console.log(`${person1} says to ${person2}: Hello there`)
}

// greeting("obiwan kenobi", "general grevious")

function rollDice() {
    let possibleRolls = [1, 2, 3, 4, 5, 6];
    let randomNumber = Math.floor(Math.random() * possibleRolls.length);
    return possibleRolls[randomNumber];
}
let firstRoll = rollDice();
let secondRoll = rollDice();
// console.log(firstRoll);

function diceMulitplier() {
    let firstRoll = rollDice();
    let secondRoll = rollDice();

    return firstRoll * secondRoll;
}

let multipliedRoll = diceMulitplier();
console.log(multipliedRoll);