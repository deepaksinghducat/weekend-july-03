// control structure
// if
// else
// elseif
// switch
// while
// do-while
// for
// for in
// for of 
// foreach
// continue 
// Break


// If 
// var a = "fsadf";

// if (a == 10 && typeof a == "number") {
//     console.log("checked");
// }else if (typeof a == "string") {
//     console.log("strig");
// } else {
//     console.log("not checked");   
// }

//nested if else
// var conditon = "fasdfas"
// if(conditon) {
//     if(typeof conditon == "number")
//     {
//         console.log(" number");
//     }else{
//         console.log("not a number");
//     }
// }

// var conditon = 11;

// switch (conditon) {
//     case 10:
//         console.log("fsafas");

//         break;

//     case 11:
//         console.log("11");

//         break;
//     default:
//         console.log("default");
//         break;
// }



// for

// for (let index = 0; index < array.length; index++) {
//     console.log(array[index]);
// }

// For In Loop

// for (const key in array) {
//     console.log(array[key]);
// }

// For Of Loop

// for (const iterator of array) {
//     console.log(iterator);
// }


// while loop

// let i = 10;

// while (i >= 10) {
//     console.log(i);

//     i--;
// }

// do - while loop

// let a = 10;
// do {
//     console.log(a);
//     a--;
// } while (a>0);


// const array = [10, 20, 30, 40, 50, 60, 70, 80]

// for (const iterator of array) {
//     if (iterator === 30) {
//         continue;
//     }

//     console.log(iterator);
// }


// let number = 151;

// let reverse = 0;

// let temp = number;

// while (temp > 0) {

//     let rem = temp % 10;

//     // reverse = reverse * 10 + rem;

//     reverse = reverse + rem * rem * rem ;


//     temp = parseInt(temp / 10);
// }

// if (number === reverse) {
//     console.log(`${number} is armstrong`);
// } else {
//     console.log(`${number} is not armstrong`);
// }

// write a program  number is armstrong no or not 

// 153 = 1*1*1 + 5*5*5 + 3*3*3


// 12 = 2 × 2 × 3.
// 30 = 2 × 3 × 5.
// LCM = 2 * 3 * 2 * 5 = 60 

// HCF = 2 * 3 = 6

// let num1 = 12;
// let num2 = 30;

// function LCM(num1, num2) {

//     let lcm = (num1*num2)/HCF(num1,num2);

//     return lcm;
// }

// function HCF(num1, num2) {

//     let largestNumber = num1 > num2 ? num1 : num2;

//     let hcf = 1;

//     for (let index = 2; index < largestNumber; index++) {
//         if (num1 % index === 0 && num2 %index === 0) {
//             if (!prime(index)) {
//                 hcf = hcf * index;
//             }
//         }
//     }

//     return hcf;
// }

// function prime(number) {

//     $counter = 0;

//     for (let index = 2; index < number; index++) {
//         if (number % index == 0 && index !== number) {
//             $counter++;
//         }
//     }

//     return $counter ? true : false;
// }


// console.log(LCM(20, 30));


// let number = 63;


// for (let index = 2; index < 100; index++) {

//     if (index * index === number) {
//         console.log(`${index * index} is squere of ${index}`);
//     }else{
//         console.log(`${number} is not a squere root of any number`);
//     }
// }






