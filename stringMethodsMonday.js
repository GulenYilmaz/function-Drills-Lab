//Creating a global health variable for our camper to use throughout our file. 
let camperHealth = 100

//Convert our health number to a string 
// const healthString = camperHealth.toString()
const healthString = String(camperHealth)

//Convert our health number into a boolean
//Any number other than 0 will be true, 0 will be false
const healthBoolean = Boolean(camperHealth)
// console.log(healthBoolean)


//Creating a string global variable to display the winner of a fight
let theWinnerIs = 'Bear is the winner'

//Changing the winner from 'Bear' to 'Camper'
const newWinner = theWinnerIs.replace('Bear', 'Camper')
// console.log(newWinner)


//Checking our string to make sure the 'Camper' strin is within the newWinner text
if(newWinner.includes('Camper')){
  // console.log('The string is correct')
}

//Lowercasing every letter of our string
const lowerCaseWinner = newWinner.toLowerCase()
// console.log(lowerCaseWinner)

//Creating an array of strings from our newWinner text and telling it to find the single empty white space in the newWinner text and split on that. 
const arrayOfStrings = newWinner.split(' ')
// console.log(arrayOfStrings)

//Joining our array back into a string and concatenating each item on a hyphen
const hyphenatedString = arrayOfStrings.join('-')
// console.log(hyphenatedString)


//Creating a function that will console log whether or not our camper is still alive. 
function isCamperAlive() {
  console.log(`Camper's health is ${camperHealth}`)
  if(camperHealth <= 0){
    console.log('RIP CAMPER, you will be missed')
  } else {
    console.log('Camper is alive')
  }
}

// isCamperAlive()

//Creating a function that will take in an amount of damage as a parameter and decrease the camper's health by that amount
function surpriseAttack(attackAmount) {
  camperHealth -= attackAmount
  isCamperAlive()
}

surpriseAttack(10) 
surpriseAttack(40) 
surpriseAttack(50) 


//Creating a function that will console log a greeting between two name parameters that are passed in. 
function greeting(name1, name2) {
  return name1 + ' waved to ' + name2
}


console.log(greeting('Stuart', 'Tien'))


//Creating a function that will return a random dice number
function rollDice() {
  let possibleRolls = [1,2,3,4,5,6]
  let randomNumber = Math.floor( Math.random() * possibleRolls.length )
  return possibleRolls[randomNumber]
}


// function rollMultipleDie() {
//   const firstRoll = rollDice()
//   const secondRoll = rollDice()
//   return firstRoll + secondRoll
// }

//Creating a function that will roll two dice and add the dice together. 
function rollMultipleDie() {
  return rollDice() + rollDice()
}

console.log(rollMultipleDie())