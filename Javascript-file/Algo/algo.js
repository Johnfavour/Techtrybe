// fahreinheit = celcuis x 9/5 + 32
//example 1
// function Fahrenheit(number){
//         let result = (number * 9/5) + 32;
//         console.log(result);
// }
// Fahrenheit(10);


//example 2
// function boolean(a){
//     if (typeof a === 'boolean'){
//         console.log(true);
// }  else{
//    console.log(false);
// }
// }
// boolean();

//example3
// let truncate = 'chukwuemeka favour';
// let length =  truncate.substring(0 , 6)+ "...";
// console.log(length);

//(ii)
// function trun(str, num){
//     return str.length > num ? str.slice(0, num)+ '...' : str; //internal operator
// }
// console.log(trun('adelogunono', 5));

//(iii)
// function trun(str, num){
//     if (str.length > num){
//         console.log(str.slice(0, num) + '...');
//     } else {
//         console.log(str);
//     }
// }
// trun('adelogunono', 7)

//example:4
// function reverseString(str) {
//     let strArray = str.split(''); 
//     let revArr = strArray.reverse(); 
//     let revString = revArr.join('');
//     return revString;
//   }
//   let originalString = "chukwuemeka";
//   let revString = reverseString(originalString);
//   console.log(revString);

//or 
// function reverseString (str) {
//     let revs = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         revs += str[i]
//         console.log(revs);
// }
    
// }
// reverseString('chukwuemeka')

//example 5
// function containsAllLetters(arr) {
//     const firstStr = arr[0].toLowerCase();
//     const secondStr = arr[1].toLowerCase();
  
//     for (let i = 0; i < secondStr.length; i++) {
//       if (firstStr.indexOf(secondStr[i]) === -1) {
//         return false;
//       }
//     }
//     return true;
//   }
  
//   const arr1 = ["Hello", "lie"];
//   console.log(containsAllLetters(arr1)); 
  
//or it can be use for password or OTP password
// function compare(arr){
//     const tes = arr[0].toLowerCase()
//     const test = arr[1].toLowerCase()

//     for(let i = 0; i < tes.length; i++){
//         if(test.indexOf(tes[i]) < 0) return false;
//     }
//     return true
// }
// console.log(compare(['jesus', 'Used']));


//document object model(DOM)
