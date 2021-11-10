////////// PROBLEM 1 //////////
/*
  Create a variable called 'lovesCode' and set it equal to true. 
  Check to see if 'lovesCode' is equal to true or false. 
  If it is true, console log "I love to code!"
  If it is not, console log "Coding has its challenges."
*/

let lovesCode = true 
if (lovesCode === true){
  console.log("I love to code!")
} else {console.log("Coding has its challenges")

}

// For problems 2-3 use the following lines of code:
var amysAge = 29
var brittanisAge = 34
var amysBirthYear = 1991
var brittanisBirthYear = 1986

////////// PROBLEM 2 //////////

/*
  Using an if statement and a comparison operator, create code that will check if Amy or Brittani is older, and then console.log '{name} is older'. Hint: Consider what will happen if they are the same age. Handle this situation.
*/

if (amysAge >= brittanisAge){
  console.log('Amy is older.')
}else {
  console.log('Brittani is older.')
}



////////// PROBLEM 3 //////////

/*
  Using an if statement and a comparison operator, create code that will check if Amy and Brittani were born in the same year. If they were, console.log 'Amy & Brittani were born in the same year'. If they were not, console.log 'Amy & Brittani were not born in the same year'
*/

if (amysBirthYear === brittanisBirthYear){
  console.log("Amy and Brittani were born in the same year.")
} else {
  console.log("Amy and Brittani were not born in the same year.")
}


////////// PROBLEM 4 //////////

let temperature = 55
let rain = true

/*
  Using an if statement and a comparison operator, create code that will log a suggestion on what type of clothes one should wear for the day, based on the above temperature and rain.
  If it is 80 degrees or above, and raining, one should wear a t-shirt and take an umbrella. If it is between 60 and 80 degrees, and raining, one should wear a rain-jacket. If it is 60 degrees or below, one should wear a jacket and carry an umbrella. Come up with your own clothing suggestions based on those temperature parameters when it is not raining.
*/

if (temperature > 80 && rain === true){
  console.log('Wear a t-shirt and bring an umbrella.')
}else if(temperature < 80 && temperature > 60 && rain === true){
  console.log('Wear a jacket.')
}else if(temperature < 60 && rain === true){
  console.log('Wear a jacket and bring an umbrella.')
}else if(temperature > 80){
  console.log('Put on some shorts and a t-shirt.')
}else if(temperature < 60){
  console.log('Grab a coat, it is cold!')
}else if(temperature < 80 && temperature > 60){
  console.log('T-shirt and jeans is all you need!')
}


////////// PROBLEM 5 //////////

/*
  Create a for-loop that runs 10 times, and on each iteration logs the word 'hello'.
*/

for (let i = 0; i <10; i++){
  console.log("Hello!")
}


////////// PROBLEM 6 //////////

/*
  Create a for-loop that runs 10 times, logging the numbers 1 through 10. Ex, on the first iteration it would log 1, on the second iteration it would log 2.
*/

for(let i = 1; i < 11; i++){
  console.log(i)
}


////////// PROBLEM 7 //////////

/*
  Create a for-loop that logs the numbers 0 through 10 backwards. Ex, on the first iteration it would log 10, on the second iteration it would log 9.
*/

for (let i = 10; i > 0; i--){
  console.log(i)
}

let score = 0
let passingScore = 7

////////// PROBLEM 8 //////////

/*
  Create a while-loop that logs "Your score is not high enough" while the score variable above is below passingScore. In each iteration of the loop, increase the score by one. If your code is successful, you will see your logged statement 7 times.
*/

while(score < passingScore){
  console.log('Your score is not high enough')
   score ++
}

////////// INTERMEDIATE PROBLEMS //////////

////////// PROBLEM 9 //////////
/*
  Create a variable called 'changeMyMind' and set it equal to true. 
  Check to see if changeMyMind is set to true or false, if it is true, change the status to false, if it is false, change the status to true.

*/

let changeMyMind = true
changeMyMind = !changeMyMind
console.log(changeMyMind)
changeMyMind = !changeMyMind
console.log(changeMyMind)


// ////////// PROBLEM 10 //////////
// // Try to change the value of changeMyMind (irrespective of whether it is true or false) and then console.log it's new status. It should log true. Hint: use the not operator.

// //CODE HERE

changeMyMind != changeMyMind
console.log(changeMyMind)

////////// ADVANCED PROBLEMS //////////

////////// PROBLEM 11 //////////

let z = 5
for (let z = 5; z > 0; z--){
    console.log(z)
  } for (let z = 4; z >0; z--){
    console.log(z)
  } for (let z = 3; z >0; z--){
    console.log(z)}
    for (let z = 2; z >0; z--){
      console.log(z)}
      for (let z = 1; z >0; z--){
        console.log(z)
      }

