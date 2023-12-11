// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain WHY your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

// const cohort = "India 2023"
//  console.log(cohort.split(" "))

// a) Your answer: 
// ["India", "2023"]
// b) Verify and explain:
//  ["India", "2023"] splits the string India 2023, this is due to console.log(cohort.split) which tagarts const cohort = "India 2023"
// --------------------2) What will this log?

// const greeter = (name) => {
//   `Hello, ${name}!`
// }
//  console.log(greeter("LEARN Student"))

// a) Your answer:
// output: "undefined"
// b) Verify and explain:
// There is no return statement in line 21 so it will log only as "undefined"
// "Hello, LEARN Student!" 

// --------------------3) What will this log?

// const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer:
// output: [ 11, 13, 15 ]
// b) Verify and explain:
// output: [ 11, 13, 15 ] due to .filter effecting number thats % 2 

// --------------------4) What will this log?

// const myCodingSkills = {
//   languages: ["JavaScript", "Ruby"],
//   frameworks: ["React", "Ruby on Rails"],
//   databases: "PostgreSQL",
//   versionControl: "GitHub"
// }
// console.log(myCodingSkills.languages[0])

// a) Your answer:
// output Javacript 
// b) Verify and explain:
// output: Javascript would be Javacript due it being in the index or 0

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "India"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer:
// Output would be Learn student: 'George', cohort: 'India', year: 2023
// b) Verify and explain:
// Learn { student: 'George', cohort: 'India', year: 2023} because 'learnStudent is an operator for Learn. Learn holds properties which is contained within it. 
// test text