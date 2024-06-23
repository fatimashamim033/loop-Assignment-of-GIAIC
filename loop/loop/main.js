// Loop Assignments
//              1. Creating a Lesson Plan(Using for loop )
//                 Objective: Create a list of lesson objects in TypeScript with alternating statuses to indicate 
//                 whether each lesson is running this year.
// Steps to Follow:
//   1. Create a blank array: Start by setting up an empty array named myWork that will hold 
//      objects.
var myWork1 = [];
// 2. Use a loop to create lessons: Write a for loop that runs from 1 to 10. In each iteration:
// o Create an object representing a lesson.
for (var i = 1; i <= 10; i++) {
    var lesson = {};
}
// o Each lesson should have a name property, which is a string like "Lesson 1", 
// "Lesson 2", etc.
// o Each lesson should also have a status property, which alternates between true
// and false. This means "Lesson 1" will have status: true, "Lesson 2" will have 
// status: false, and so on.
for (var i = 1; i <= 10; i++) {
    var lesson = {
        name: "lesson".concat(i),
    };
}
// 3. Add the lesson to the array: Push each lesson object into the myWork array.
// 4. Print the result: Finally, log the myWork array to the console to see the list of lessons.
// Hints:
// • Use a ternary operator to set the status property based on whether the lesson number is 
// odd or even.
// • The modulo operator % can help determine if a number is even or odd.
var myWork = [];
for (var i = 1; i <= 10; i++) {
    var lesson = {
        name: "lesson".concat(i),
        status: i % 2 !== 0 ? true : false
    };
    myWork.push(lesson);
}
console.log(myWork);
// Conclusion: what we did in this question first we make an empty array named myWork , than write a for-loop from 1 to 10 ,than make an object in the
// block of code named lesson in which two properties name:string, status:boolean in whcich we print 10 lesson thorugh iteration and for status we
// have condition is if num % 2 !==0 ? true:false .  Use ternaray operator for condition. In the end push lesson to my work array so Inshort we make an
// object through iteration than push into an Array.
//**************************************************************************************************** */
//**************************************************************************************************** */
//***************************************************************************************************** */
//           2. Guessing Game (Using while loop )
//              Objective: Create a simple number guessing game where the user tries to guess a randomly 
//              generated number between 1 and a specified maximum value using a predefined set of guesses.
//      Steps to Follow:
//      1. Set a maximum value: Create a variable to store the maximum value for the number 
//      guessing game.
var maxValue = 10;
//      2. Generate a random number: Use Math.random() and Math.floor() to generate a 
//      random number between 1 and the maximum value. Log this value to the console for 
//      development purposes.
var randomNumber = Math.floor(Math.random() * 10) + 1;
console.log;
//      3. Track the guess status: Create a variable to track whether the user's guess is correct. Set 
//      it to false initially.
var isGuessCorrect = false; // Track the initial status false
//      4. Simulate user guesses: Use an array to store a series of predefined guesses.
var guesses = [2, 6, 5, 8, 7];
var index = 0; // initialization
//      5. Iterate over guesses: Use a while loop to iterate over the predefined guesses until the 
//      correct guess is made.
//      Check the user's guess: Inside the loop, check if the current guess matches the random 
//      number. Provide feedback if the guess is too high or too low.
while (index < guesses.length) {
    var currentGuess = guesses[index];
    console.log("User guess ".concat(currentGuess));
    if (currentGuess === randomNumber) {
        console.log("!Bingo the number is matach");
        isGuessCorrect = true;
        break;
    }
    else if (currentGuess > randomNumber) {
        console.log("Too high");
    }
    else {
        console.log("Less than random number");
    }
    index++;
}
if (!isGuessCorrect) {
    console.log("No more guesses left");
}
//************************************************************************************************************* */
//************************************************************************************************************* */
//************************************************************************************************************* */
//            3. Counter Incrementer (Using do while loop )
//              Objective: Create a program that increments a counter by a specified step value using a 
//              do...while loop and prints the counter value to the console until it reaches or exceeds 100.
//      Steps to Follow:
//      1. Set the starting counter to 0: Create a variable counter and initialize it to 0.
var counter = 0;
//      2. Create a variable, step, to increase your counter by: Define a variable step to hold 
//      the value by which the counter will be incremented.
var step = 10;
//     3. Add a do...while loop: In the loop, print the counter to the console and increment it by 
//      the step amount each iteration.
do {
    console.log("Counter", counter);
    counter += step;
} 
//      4. Continue to loop until the counter is equal to or more than 100: The loop should run 
//      as long as the counter is less than 100.
while (counter <= 100);
console.log(counter);
//************************************************************************************************************* */
//************************************************************************************************************** */
//*************************************************************************************************************** */
//              4.Exploring Objects with for...in Loop
//                Objective: Practice working with objects in TypeScript and iterating over their properties using 
//                a for...in loop.
//      Instructions:
//      1. Create a simple object with three items:
//      o Define an object called myObject with three properties: item1, item2, and item3, 
//      each with corresponding string values.
var muObject = {
    item1: 'string',
    item2: 'string',
    item3: 'string',
};
//      2. Use a for...in loop to get properties' names and values from the object:
//      o Iterate through the properties of myObject using a for...in loop.
//      o Inside the loop, print each property's name and its corresponding value to the 
//      console.
var muObject1 = {
    item1: "pasta",
    item2: "Tikka",
    item3: "Alfredo"
};
for (var obj in muObject) {
    console.log("Property:".concat(obj, ", value:").concat(muObject[obj]));
}
//************************************************************************************************************** */
//************************************************************************************************************** */
//************************************************************************************************************** */
//          5.Exploring Arrays with Loops(Using loop )
//          Objective: Practice working with arrays in TypeScript and using for loops and for...of loops 
//          to iterate through array elements.
//      Instructions:
//      1. Create an empty array:
//      o Define an empty array called myArray.
var myArray = [];
//      2. Run a loop 10 times, adding a new incrementing value to the array:
//      o Use a for loop to iterate 10 times.
//      o In each iteration, add a new incrementing value (starting from 1) to the myArray.
for (var i = 0; i <= 10; i++) {
    myArray.push(i);
}
//      3. Log the array into the console:
//      o After populating the array, log the myArray into the console.
console.log("myArray =", myArray);
//      4. Use the for loop to iterate through the array:
//      o Use a for loop to iterate through the array elements.
//      o Adjust the number of iterations based on the number of values in the array.
//      o Output each array element along with its index into the console.
//      Use the for...of loop to output the value into the console from the array:
//      o Use a for...of loop to iterate through the array elements.
//      o Output each array element directly into the console
for (var i = 0; i < myArray.length; i++) {
    console.log("index:".concat(i, ", value:").concat(myArray[i]));
}
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var value = myArray_1[_i];
    console.log("value:", value);
}
