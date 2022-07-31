// arrays 

// 1. []
// 2. new Array
// 3 Array.of 
// 4. Array.from

// []
// let array = [10,20,30,40];

// console.log(array);

// new Array 
// let array = new Array(10,20);

// console.log(array[1]);

// Array.of 

// let array = Array.of(10)

// console.log(array);

// Array.from 
// let array = Array.from([10,20,20,30])

// console.log(array);

// let array = [10,20,30,40,50];

// for (let index = 0; index < array.length; index++) {
//     // const element = array[index];

//     console.log(array[index]);
// }


// pop and push last 

// let array = [10,20,30,40,50,60];

// console.log(array.push({key: "dasfasdf"}));

// console.log(array);

// console.log(array.pop());

// console.log(array);

// shift and unshift first element

// let array = [10,20,30,40,50,60];

// console.log(array);

// array.shift();

// console.log(array);

// array.unshift(100);

// console.log(array);

// splice and indexOf

// let array = [10,20,30,50,60,40,40,40];

// console.log(array);

// array.splice(array.indexOf(40),4);

// console.log(array);


// find

// let array = [10,20,30,50,60,40,40];

// let findData = array.find((element,index) => {
//     return element === 40 
// });

// console.log(findData);

// filter 
// let array = [10,20,30,50,60,40,40];

// let FilterData  = array.filter((element,index) => {
//     return element === 40
// }) 

// console.log(FilterData);

// map 

// let array = [10,20,30,50,60,40,40];

// let mapedData = console.log(array.map((element,index) => {
//     console.log(element,index);
//     return element * index;
// }))

// console.log(mapedData, array);

// foreach


// let array = [10,20,30,50,60,40,40];

// console.log(array.forEach((element,index) => {
//     console.log(element,index);

//     return element * index;
// }))

// console.log(array);

// concat 

// let array = [10,20,30,40];
// let array1 = [10,20,30,40];

// let array2 = array.concat(array1);

// console.log(array2)

// reduce 
// let array = [10,20,30,50,60,40,40];

// let reducedData =array.reduce((prev,curr) => {
//     return prev + curr;
// },0);

// console.log(reducedData);

// // toString 
// let array = [10,20,30,50,60,40,40];

// console.log(array.join(' | '));


// console.log(array.includes(100));


