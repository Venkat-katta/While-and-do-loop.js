// // // 1.What will the following code output?

console.log("1) answer: no output");

let x11 = 5;
while (x11 < 3) {
  console.log(`1)  ${x11}`);
  x11++;
}
// answer:no output
//==================================================================================================
// 2. What will be the result of the following code?
console.log("2) answer");

let y11 = 0;
do {
  console.log(y11);
  y11++;
} while (y11 < 2);

// answer is:0,1
// =========================================================================================================
// 3. Which statement is true about the difference between while and do...while loops?
//  a) while loops execute at least once, while do...while loops may not execute at all.
//  b) do...while loops execute at least once, while while loops may not execute at all.
// c) Both while and do...while loops execute at least once.
//  d) Neither loop guarantees execution of the code block

//b) do...while loops execute at least once, while while loops may not execute at all.
//Explanation:
//  while loop: Executes zero or more times, depending on the condition.
   //do...while loop: Executes at least once, regardless of the condition.
//============================================================================================================================   

//4. What will the following code print?
console.log("4) answer");

let count = 5;
do {
  console.log(count);
  count--;
} while (count > 0);

// // // answer:5,4,3,2,1
// //=============================================================================================================

console.log("5) answer: (b) do-while loop");

// // 5. Which of the following loops will execute the code block at least once, even
// // if the condition is initially false?
// // a) while loop
// // b) do...while loop
// // c) for loop
// // d) for...in loop

// // answer:"b" do-while loop

// // Why do...while is special:
// // In a do...while loop, the code inside the do block is executed before the condition is checked. This guarantees that the code block runs at least once, even if the condition is false.
// //=========================================================================================

// // 6. What will be the output of the following code?

console.log("6) answer");
let z = 0;
while (z < 3) {
  console.log(z);
  z++;
}

// // answer: 0,1,2
// // Explanation: first z initailizes to zero then prints the z value and increments the z by 1 and checks condition if it is true prints the current z value and repeats the z value until condition gets false

// //============================================================================================================================
// // 7. What is the primary difference between the while loop and the do...while
// // loop?
// // a) The while loop checks the condition before the code block runs, while the
// // do...while loop checks the condition after.
// // b) The do...while loop runs only once, while the while loop runs indefinitely.
// // c) The while loop checks the condition after the code block runs, while the
// // do...while loop checks it before.
// // d) There is no difference between the two loops.

console.log(
  "7)  Answer:  a) The while loop checks the condition before the code block runs, while the do...while loop checks the condition after."
);
console.log(
  "Explanation: while Loop: In a while loop, the condition is checked before the code block runs. If the condition is false initially, the code block will not execute at all.do...while Loop:In a do...while loop, the code block runs once before the condition is checked.Even if the condition is false, the code block will execute at least once."
);
// //=============================================================================================================================
// // 8. What will be the output of this code?
console.log("8) answer:");
let i = 0;
while (i < 5) {
  console.log(i);
  if (i == 3) break;
  i++;
}

// // answer:0,1,2,3
// //==========================================================================================
// // 9. Which of the following is the correct usage of a do...while loop?
console.log("9) answer: (b) do { // code } while (condition);");
console.log(
  "Explanation: do while means first it checks do statements then it executes  while condition "
);

// //====================================================================================================

// // 10. What will be the output of the following code?
console.log("10) answer:");
let a = 0;
do {
  console.log(a);
  a++;
} while (a < 0);

console.log(
  " Explanation: A do...while loop executes the code block once before checking the condition, ensuring it runs at least once, even if the condition is false. In this case, it prints 0 and stops because the condition a < 0 is false after the first iteration."
);
// //==============================================================
// //   1. Write a while and do while loop that prints the numbers from 1 to 5 in the

console.log("11) answer");
console.log("USING WHILE LOOP");
let x12 = 1;
while (x12 <= 5) {
  console.log(x12);
  x12++;
}

console.log("USING DO WHILE LOOP");

let x13 = 1;
do {
  console.log(x13);
  x13++;
} while (x13 <= 5);

// //answer: 1,2,3,4,5
// //========================================================================================
// // 12. How would you exit a while loop if a specific condition is met (e.g., when
// //         the number equals 3), Write a example code?

console.log("12) answer:");
let x14 = 0;
while (x14 < 5) {
  console.log(x14);
  x14++;
  if (x14 == 3) break;
}
//===========================================================================

// 13. Write a while and do while loop that prints numbers from 1 to 10, but skips
// printing the any number from 1 to 10 .
console.log("13) answer");
console.log("USING WHILE LOOP")

let x16=0;
while(x16<10){
    x16++;

    if(x16==5)continue;
   
    console.log(x16)
}
console.log("USING DO WHILE LOOP")

let x17=0;
do{
    x17++;
    if(x17==4)continue;
    console.log(x17)
}while(x17<10);
// answer:1 2 3  5 6 7 8 9
//=============================================================================================
//14. Write a while loop that prints all even numbers from 0 to 20
console.log("14) answer:")
let x18=0;
while(x18<=20){
    x18++;
    if(x18%2==0){
        console.log(x18)}

}

//answer: 2 4 6 8 10 12 14 16 18 20
//=============================================================================
//15. Write an if statement in JavaScript that checks if a number is greater than 10, and prints "Number is greater than 10" if true
console.log("15)  Answer:")
let y13=15;
if(y13>10){console.log("Its greater number")}
else{
    console.log("Its smaller number")
}
//answer: Its Greater Number

//========================================================================================================

//16. Write an if-else statement that checks if a number is even or odd, and prints "Even" if it's even, or "Odd" if it's odd

console.log("16) answer:")
let y14=17;
if(y14%2==0){
    console.log("Its Even Number")
}
else{
    console.log("Its Odd Number")
}
// Answer: Its odd number
//===============================================================================================================

//17. Write an if-else if-else ladder that checks the value of a variablegrade and prints:
// ● "A"for grades 90 and above,
// ● "B"for grades 80 to 89,
// ● "C"for grades 70 to 79,
// ● "F"for grades below 70

console.log("17) Answer:")
let points=91;
if(points>=90){
    console.log("Your Grade is A")
}
else if(points>=80 && points<90 ){
    console.log("Your Grade is B")
}
else if(points>=70 && points<80){
   console.log("Your Grade is C ")
}
else{
    console.log("You Are Fail Prepare well for next exam")
}
// answer: Your Grade is A
//==========================================================================================
 //18. Write a nested if statement that checks if a number is positive and, if true, checks if it's even or odd.
console.log("18) Answer:")
 let num=9;
 if(num>0){
    if(num%2==0){
        console.log("Its Even Number")
    }
    else{
        console.log("Its Odd Number")
    }
  }
  else if(num==0){
    console.log("Its A Zero")
  }
  else{
    console.log("Its A Negative Number")
  }
  //Answer: Its Odd Number
  //=================================================================================

//  19. Rewrite the following code using if else statement :
//   let age = 20;
//   console.log(age >= 18 ? "Adult" : "Minor");

console.log("19) Answer: ")
let age = 20;
if(age>=18){
    console.log("Adult")
}
else{
    console.log("Minor")
}
// Answer:Adult
//=================================================================================================

//20. Write an if statement that checks if a number is between 10 and 20 (inclusive). Print "In range" if true, otherwise print "Out of range".

console.log("20) Answer:")
let number=10;
if(number>=10 && number<=20){
    console.log("In Range")
}
else{
    console.log(" Out Of The Range")
}
// Answer:In Range
//==============================================================================================
//21. What is the difference between == and === in an if statement in JavaScript? Provide an example where each would behave differently

// 1. == (EQUALITY OPERATOR):
// Checks for value equality.
// Performs type coercion if the values are of different types (converts them to the same type before comparison).
// 2. === (STRICT EQUALITY OPERATOR):
// Checks for value equality and type equality.
// Does not perform type coercion; the values must be of the same type to be considered equal.
//Example: Code

console.log("21) Answer:")
let num1 = "5"; // String
let anotherNum = 5; // Number

// Using == (Equality Operator)
if (num1 == anotherNum) {
    console.log("Using == : Values are equal"); // This will execute
} else {
    console.log("Using == : Values are not equal");
}

// Using === (Strict Equality Operator)
if (num1 === anotherNum) {
    console.log("Using === : Values are equal");
} else {
    console.log("Using === : Values are not equal"); // This will execute
}

//================================================================================================
 //22. Write an if statement that checks if a number is between 10 and 20 or if it's exactly 30, and prints "Condition met" if true


console.log("22) Answer:")
let num2=15;
if((num2>10 && num2<20)||(num2=30)){
    console.log("Condition met")
}
else{
    console.log("Condition not met")
}
// answer: condition met