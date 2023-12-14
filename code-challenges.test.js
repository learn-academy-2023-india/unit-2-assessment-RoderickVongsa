// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependency

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// Pseudo code:

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.
// tried to solve but still couldnt get answer
describe("multiplyByThree", () => {
    it("is a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3", () => {
     
const object1 = { number: 15 }
// fixed missing code from mistake earlier
for(let i= 1; i <= object1.number; i++){
    if (i === object1.number && i % 3 === 0) {
        console.log(`${object1.number} is divisible by three`);
    } else if (i % 3 === 0) {
        console.log(i)
    }
}
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Using loop for this  problem
// ran with node and it seemed to work as it gave me "15 is divisible by three"
for(let i= 1; i <= object2.number; i++){
    if (i === object2.number && i % 3 === 0) {
        console.log(`${object2.number} is divisible by three`);
    } else if (i % 3 === 0) {
        console.log(i)
    }
}
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }

for(let i= 1; i <= object3.number; i++){
    if (i === object3.number && i % 3 === 0) {
        console.log(`${object3.number} is divisible by three`);
    } else if (i % 3 === 0) {
        console.log(i)
    }
}
expect(multiplyByThree(object1)).toEqual([18, 21, 24, 27, 30])
expect(multiplyByThree(object2)).toEqual([0, 0, 0, 0, 0])
expect(multiplyByThree(object3)).toEqual([72, 81, 90, 99, 108])
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.
// Pseudo code:
// tried to run it but it seems to fail when running yarn jest
// was not able to make the function pass


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
// attempted to test but still haven't graps the concept
// will review to understand how test works
describe("capitalizeFirstLetter", () => {
    it("is a function that takes in an array of words and returns an array with all the firstlettercapitalize", () => {
     
const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

const capitalizeFirstLetter = (words) => {
    return words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  };

  test("Capitalize first letter of each word in randomNouns1", () => {
    const result = capitalizeFirstLetter(randomNouns1);
    const expected = ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"];
    expect(result).toEqual(expected);
  });
  
  test("Capitalize first letter of each word in randomNouns2", () => {
    const result = capitalizeFirstLetter(randomNouns2);
    const expected = ["Temperature", "Database", "Chopsticks", "Mango"];
    expect(result).toEqual(expected);
  });
  
// b) Create the function that makes the test pass.

// Pseudo code:
// created a function called "capitalizeFirstLetter" and to return with .toUpperCase + .slice so I can separate the index from the 1st word
// The test passed
// Did the same with second randomNouns was also able to pass
