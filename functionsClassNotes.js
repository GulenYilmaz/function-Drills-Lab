let fruits = ["apples", "bananas", "grapes", "oranges", "watermelon", "honeydew", "pears", "pineapple", "mangoes", "dragonfruit"];

// Write a for-loop that console logs each fruit in the fruits array

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// Write code that removes the first item from the fruits array
// console.log(fruits)
// let removedElement = fruits.shift()
// console.log(fruits, removedElement)

// Remove the last item from the array
// console.log(fruits)
// fruits.pop()
// console.log(fruits)

// Add "blueberries" to the end of the array
// console.log(fruits)
// fruits.push("blueberries")
// console.log(fruits)

// Add "starfruit" to beginning of the array
// console.log(fruits)
// fruits.unshift("starfruit")
// console.log(fruits)

// Write code that removes the 4th item from the array and return it

// console.log(fruits, fruits.length)
// let removedFruits = fruits.splice(3,3)
// for (let i = 0; i < removedFruits.length; i++) {
//   console.log(removedFruits[i]);
// }

// Write code that add in the following items after the 7th item in the fruits array
// ["lettuce", "tomatoes", "pickles"]

// console.log(fruits)
// fruits.splice(6, 0, "Hello today is Thursday")
// console.log(fruits)


// Bonus: Write code that takes array and reverses order of elements

// console.log(fruits)
// let reversedArray = [];
// for (let i = fruits.length - 1; i < fruits.length && i >= 0; i--) {
//   console.log(fruits[i])
//   reversedArray.push(fruits[i])
// }
// console.log(reversedArray)
let reversedArray = [];
while (fruits.length > 0) {
  console.log(reversedArray)
  reversedArray.push(fruits.pop())
  console.log(reversedArray)
}

// console.log(fruits)
// fruits.reverse()
// console.log(fruits)