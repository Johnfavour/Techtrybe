// console.log("This is techtrybe");

// function clicked(){
//     // alert("This is me");
//     // prompt("How old are you?");
//     // confirm('Are you sure you want to?');
// }

// Datatypes in Javascript

// var goat= 'goat'

// let ages = 12
// ages = 20
// console.log(ages);

// const age =10
// console.log(age);

    // Numbers
   // let age = 30
   // console.log(age);

    // String
   // let name = 'Mary'
   // console.log(name);

    // Boolean
   // let isMarried = true
    //console.log(isMarried);
    
    // Null
   // let isStudent = null
   // console.log(isStudent);

    // Undefined
   // let password;
   // console.log(password);

   //Non-Primitive javascript
    //*Object
    // const person= {
    //     name: 'John',
    //     age: 20,
    //     isMarried: false,
    //     profession: 'Developer',
    //     isStudent: null
    // }
    // console.log(person.profession);

    // Arrays
    // const colours = ['red', 'green', 'yellow', 'blue']
    // console.log(colours[3]);

    //Array methods
    //colour.pop();
    //colours.push('white');
    //colours.shift();
    //colours.unshift('violet');
    // const colours = ['red', 'green', 'yellow', 'blue']
    // // console.log(colours.pop());
    // colours.push('white');
    // console.log(colours);
    
    //console.log(colours.push('white'));

    // Nested Arrays

    // const properties = [
    //     car ='toyota',
    //     house = 'duplex',
    //     clothes=[
    //         'vuitton',
    //         'balenciaga',
    //         'Gucci ',
    //     ],
    //     company = [
    //         'Google',
    //         'Apple',
    //         'Gomycode',
    //         'Facebook',
    //     ],
    //     brand = 'Mercedes',
    // ]
    // console.log(properties[3][2]);

    // Object of Arrays

//     const players =[
//         {
//             id: 1,
//             name: 'Jesus',
//             club: 'Arsenal',
//             league: 'EPL',
//         },

//         {
//             id: 2,
//             name: 'Morata',
//             club: 'Juventus',
//             league: 'ISA',
//         },

//         {
//             id: 3,
//             name: 'Ronaldo',
//             club: 'Al Nassr',
//             league: 'SPL',
//         },
//         {
//             id: 4,
//             name: 'Messi',
//             club: 'Inter Miami',
//             league: 'APSL',
//         }

//     ]
// // console.log(players[2].club);
// console.log(players[2]['club']);

//Arithmetic operators
//console.log(5+2);
//console.log(5-3);
//console.log(5/2);
//console.log(5*2);


//Modulus
// console.log(5%2);

//Exponential operator
// console.log(2**2);

//increment and decrement
// let num = 5
// num--
// console.log(num);

// let nom = 5
// nom++
// console.log(nom);

//Declaration
// let x = 5
// let c = x
// let y = c
// console.log(y);


// function add(a, b){
//     return a+=b
// }
// console.log(add(2,3));

//Arithmetic operators
// a = 5
// b = 7
// a += b or a-=b or a*=b or a/=b or a%=b

// console.log(a);

//Comparison operator

// String concatenation
// let name = 'Chioma'
// let desc = 'is a young girl'

// // let about = ' This is '+ name +',' +' she '+ desc;

// let about = `This is ${name}, she ${desc}`
// console.log(about);


//if statement - it executes it's logic when a condition is true,else it won't execute

// function checkIfNumber(x){
//     if (typeof x === 'is a number'){
//         console.log(`${ x } is a number.`);
//     }
// }
// checkIfNumber([1, 2, 3])

//or
// function checkIfNumber(x){
//     if (typeof x === 10 ){
//         console.log(`${ x } is ten.`);
//     }
//     else{
//         console.log(`${ x } is not ten.`);
//     }
// }
// checkIfNumber(5)


//else if
// function checkIfNumber( x ){
//     if ( x <= 10){
//         console.log(`${ x } is ten.`);
//     }
//     else if ( x === 20) {
//         console.log(`${ x } is twenty.`);
//     }
//     else if ( x === 31){
//         console.log(`${ x } is thirty-one.`);
//     }
//     else{
//         console.log(`${ x } is not an expected number.`);
//     }
// }
// checkIfNumber(5)

//Example2 of else if statement
// function checkIfNumber(x) {
//     if (x <= 30){
//         console.log(`F`);
//     }
//     else if (x <= 40){
//         console.log(`E`);
//     }
//     else if (x <= 50){
//         console.log(`D`);
//     }
//     else if (x <= 60){
//         console.log(`C`);
//     }
//     else if (x <= 69){
//         console.log(`B`);	
//     }
//     else if (x <=100){
//         console.log(`A`);
//     }
//     else{
//         console.log(`Is not valid`);
//     }
// }
// checkIfNumber(69)

//function rem(){
//     const name = prompt('Enter your name')
//     if(name === 'Chioma'){
//         alert(`Your name is ${name}`);
//     }
//     else[
//         alert(`Yor name is not in the database`);
//     ]
// }

//Example3
// function checkIfNumber(x){
//     if( x <= 30 ){
//         console.log(`You failed this test.`);
//     }
//     else if(x > 30 || x <= 60){
//         console.log(`You passed this test.`);
//     }
//     else if(x > 60 || x <= 100){
//         console.log(`You passed this test.`);
//     }
//     else{
//         console.log(`Your result is not available yet.`);
//     }
// }
// checkIfNumber(50)

//User input(Prompt)
// function rem(){
// const x = prompt(`Enter a number`)
//     if (x <= 30){
//         alert('You failed');
//     }
//     else if(x <= 69){
//         alert('Fair')
//     }
//     else if(x <= 100){
//         alert(`You passed`);
//     }
//     else{
//         alert(`Invalid`);
//     }
// }  

//Switch Operator
// function decodeColor(code){
//     switch(code){
//     case 1:
//         console.log('Red');
//         break;
//     case 2:
//         console.log('Green');
//         break;
//     case 3:
//             console.log('Blue');
//         break;
    
//     default:
//         console.log('Unknown code');
//     }
// }
// decodeColor(4)


//While loop

// var numbers = [19, 65, 1, 2, 6, 1, 9, 2, 1];
// var sum = 0;
// var i = 0;
// while(i < numbers.length) {
//     sum += numbers[i];
//     i += 1;
// }
// console.log('The loop was executed '+ i +' times');
//console.log(sum); //To print out the value of the sum

//do while loop
// let numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1];
// let sum = 0;
// let i = 0;
// do{
//     sum+= numbers[i];
//     i += 1;
// }
// while( i < numbers.length)
// console.log('The loop was executed '+ i +' times');
// console.log(sum); 

//for in loop
// let numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1];
// let sum = 0;

// //Using the for... in loop
// for (let i in numbers){
//     sum += numbers[i];
// }
// console.log(sum);

//for loop

//function multiplicationTable(number) {  //The values in this bracket is a parameter
 //   for (let i = 1; i <= 12; i++) {    //initialization area is the 'let i =1'; while for the i <= 12 is for the condition
 //       let result = number * i;
 //       console.log(`${number} x ${i} = ${result}`);
 //   }
//}
//multiplicationTable(2); //the value in the bracket is an argument

//Break and continue
// let numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1]
// let sum = 0;
// for (let i in numbers) {
//     if (i % 2 == 0) continue;
//     sum += numbers[i]
// }
// console.log(sum);

//Break
// let numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1];
// let sum = 0;

// for (let i in numbers){
//     sum += numbers[i];
//     if (sum >= 70){
//         break;
//     }
// }
// console.log(sum);
