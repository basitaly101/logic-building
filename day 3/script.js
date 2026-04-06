// let arr = [1,2,2,2,2,2,3,3,4,5,6,7,7,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// let uniqueNum = [...new Set(arr)];
// console.log(uniqueNum);

// let arr = [1,2,3,3,4,5,6,7,7,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// let uniqueNum = arr.filter((item, index) => {
//     return arr.indexOf(item) === index;
// })
// console.log(uniqueNum); 

// let obj = [
//     {
//         name : 'ali',
//         age : 20,
//         role : 'developer'
//     },
//     {    
//         name : 'ahmed',
//         age : 25,
//         role : 'designer'
//     },
//     {
//         name : 'sara',
//         age : 30,
//         role : 'developer'
//     }
// ]
// let developer = obj.filter((item) => {
//     let one = item.role === 'developer';
//     let two = item.role === 'designer';
//     return one || two;
// })
// console.log(developer);
 
// let word = 'javascript';
// let reverse = '';
// for (let i = word.length - 1 ; i >= 0; i--){
// reverse += word[i];
// }
// console.log(reverse);

// Q no 1
// let firstVal =Number (prompt("enter the first number"));
// let secVal = Number(prompt("enter the second number "));
// let operator = prompt("enter the operater +,-,*,/");
 
// switch(operator){
//     case '+':
//         console.log(`this is addition ${firstVal + secVal}`);
//         break;
//     case '-':
//         console.log(`this is subraction ${firstVal - secVal}`);
//         break;
//     case '*':
//         console.log(`this is multipilcation ${firstVal * secVal}`);
//         break;
//     case '/':
//         console.log(`this is divide ${firstVal / secVal}`);
//         break;

//         default:
//             console.log('wrong calculations');
            

//         break;
//     }

// let num = Number(prompt('enter the number '))

// if(num === 0){
//     console.log('number is zero');
// }
// else{
//     let status = (num => 0)? "positive" : "nagetive"

// if(num % 2 === 0){
//     console.log(`the number is even ${status}`);
// }
// else{
//     console.log(`the number is odd ${status}`);
    
// }}   
// let x = 10; function job() { console.log(x); } let x = 20; job();
// console.log('5' - 2);
// console.log(0.1 + 0.2 === 0.3);
// var a = 10;
// function display() {
//     console.log(a);
//     var a = 20;
// }
// display();
let c = { name: "Rahul" };
let d = { name: "Rahul" };
console.log(c == d);
console.log(c === d);
