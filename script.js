// let r = require('readline-sync');
// let arr = [];
// let size = r.questionInt('Enter array size ');
// console.log('Enter array elements ');
// for(let i=0; i<size; i++){
//     arr[i] = r.questionInt();
// }
// console.log(arr);

// var expenses = [25000,30000,30000,50000];

// expenses.forEach((obj)=>{
//     if(obj >= 30000){
//         console.log(obj)
//     }
// });


// for(let i=0; i < expenses.length; i++){
//     if(expenses[i] >= 30000){
//     console.log(expenses[i])
//    }
// }
// let sum = 0;
// expenses.forEach((obj)=>{
//     sum += obj;
// });
// console.log(sum);

// let sum = 0;
// for(let i=0; i<expenses.length; i++){
//     sum = sum + expenses[i]
// }
// console.log(sum)

// let max = [];
// expenses.forEach((obj)=>{
//     if(obj > max){
//         max = obj
//     }
// });
// console.log(max);

// let max =[];
// for (let i=0; i <expenses.length; i++){
//     if(expenses[i] > max){
//         max = expenses[i]
//     }
// }
// console.log(max);

// let min = expenses[0];
// expenses.forEach((ele)=>{
//     if(ele < min){
//         min = ele;
//     }
// });
// console.log(min);

// let arr = [2,3,4,5];
// let res = arr.map((num)=>num * num);
// console.log(`\nOriginal array :[${arr}]`);
// console.log(`Squarred arrray:[${res}]`);

// Assignment of unique values

// let expenses =[25000,30000,30000,50000];
// let unique = [];
// expenses.forEach((num)=>{
//     !unique.includes(num)?
//     unique.push(num):""
// });
// console.log(unique);

// var expenses = [25000, 30000, 30000, 50000, 50000];
// var unique = [];
// expenses.forEach((num)=>{
//     !unique.includes(num)?
//         unique.push(num):""
// })
// console.log(unique);

//two sum
// const arr = [2,7,4,6,1];
// let sum = [];
// arr.forEach((ele)=>{

// })

// const r = require('readline-sync');
// let arr = [];
// let size = r.questionInt('Enter the size of the array ');
// console.log('Enter array elements ');
// for(let i = 0; i < size; i++)
//    arr[i] = r.questionInt();
// console.log(arr);

// let fruits = ['apple', 'banana', 'grapes',];
// let res =fruits.toString();
// console.log(res);

// let fruits = ['apple', 'banana', 'grapes',];
// let res =fruits.join('*');
// console.log(res);

// let fruits = ['apple', 'banana', 'grapes',];
// let bikes = ['yamaha', 'mahendra', 'tata'];
// let animals = ['lion', 'zebra', 'monkey'];

// let res = fruits.concat(bikes, animals)
// console.log(res);

// let fruits = ['apple', 'banana', 'grapes'];
// let res = fruits.splice(2,2,'mango','orange');
// console.log(fruits);
// console.log(res);

// let fruits = ['apple', 'banana', 'grapes','pineapple','mango'];
// let res = fruits.slice(0,3)
// console.log(res);
// console.log(fruits);

// let num = [10,22,300,1000,1];
// let res = num.sort((a,b)=> b - a);
// console.log(res);

// let num = [10,12,13,14,15,16,17,18];
// let res =  num.filter((ele) => ele %2 == 2);
// console.log(res);

// let num =[10,11,12,13,14,15];
// let res = num.reduce((a,b) => a*b);
// console.log(res);

//assignment
//var arr=[2,3,4,5,6,7,8];
// Make all elements squares
// Print only even numbers from the array
// Print only odd numbers from the array
// Find the largest element in the array
// sort the array in descending order

// var names=["arjun","akil","arvind",'ram','ravi','Akash'];
// print names with first letter a

// var arr = [2,3,4,5,6,7,8];

// let squares = arr.map((ele)=> ele * ele);
// console.log(squares);

// let even = arr.filter((ele)=> ele %2 == 0)
// console.log(even);

// let odd = arr.filter((ele)=> ele %2 !== 0)
// console.log(odd);

// let largest = [];
// arr.forEach((ele)=>{
//     if(ele > largest) largest = ele;
// });
// console.log(largest);

// let descending = arr.sort((a,b)=> b - a)
// console.log(descending);

// var names=["arjun","akil","arvind",'ram','ravi','Akash'];
// let res = names.filter((ele)=> ele[0] == "a"|| ele[0] == "A" );
// console.log(res);

// let fruits = ['apple', 'orange', 'lichi', 'banana', 'lemon'];
// let res = fruits.splice(2,1,'guva','mango');
// console.log(fruits);
// console.log(res);

// let num = [10,11,12,13,14,15,5,6,3,2,4,7,8];
// let res = num.filter((ele) => ele >= 9);
// res.sort((a,b)=>a-b);
// console.log(res);


// var employee= [
//     [01,"ram","10 years",35],
//     [02,"anil","2 years",25],
//     [03,"nikhil","4 years",28],
//     [04,"nikhil","4 years",25],
// ]
// let res = employee.some((emp)=>emp[1]==='george')
// console.log(res);

// let res = employee.find((emp)=>emp[0]===4);
// console.log(res);

// let num = [10,20,30,40];
// let res = num.indexOf(50);
// console.log(res);

// let res = num.findIndex((ele)=>ele > 20);
// console.log(res);
/*fgjugfkjjgfhkhgl
kfhjkfhkj
gfhjgfjgf
*/

// let num =[
// [10,20,30],
// [40,50,60],
// [1,3,5,7],
// ]
// let res = num.flat();
// console.log(res);

// let arr = [10,20,30,40,50,60];
// arr.forEach((ele)=>{
//     ele > 20 ? ele===20 :ele ===arr
// })
// console.log(arr);

// var mobiles=[
//     [1000,"samsung","samsung f41",15000,"snapdragon","AMOLED","4g"],
//     [1001,"samsung","samsung A51",32000,"snapdragon","AMOLED","5g"],
//     [1002,"redmi","not 10 pro",19000,"snapdragon","LED","4g"],
//     [1003,"redmi","mi 11 lite",30000,"mediatek","LED","4g"],
//     [1004,"apple","12 pro",72000,"snapdragon","AMOLED","4g"],
//     [1005,"apple","12 pro max",100000,"snapdragon","AMOLED","5g"],
//     [1006,"one plus","nord 2",29000,"snapdragon","AMOLED","4g"],
//     [1007,"one plus","nord 2",15000,"mediatek","LED","4g"]
// ]

// // Print all mobile names
// let names =  mobiles.map((ele) => ele[2]);
// console.log(names);

// // // Print all mobile prices
// let price =  mobiles.map((ele) => ele[3]);
// console.log(price);

// // Print only mobiles with samsung brand
// let samsungBrand = mobiles.filter((ele) => ele[1] == 'samsung');
// console.log(samsungBrand);

// // print all mobile phones below 25000
// let res = mobiles.filter((ele) => ele[3] <= 25000)
// console.log(res);

// // Print mobile details of avaialable in price range of 25k to 30k
// let res = mobiles.filter((ele) => ele[3] >= 25000 && ele[3] <= 30000)
// console.log(res);

// // List all 5g mobile names
// let 5g = mobiles.filter((ele) => ele[6]=="5g")
// console.log(5g);

// // List all 5g mobiles under 35000
// let res = mobiles.filter((ele) => ele[3] <= 35000 && ele[6]=="5g")
// console.log(res);

// // List all samsung mobile whose band=4g and dispaly type is AMOLED
// let amoled = mobiles.filter((ele) => ele[1] == "samsung" && ele[5] == "AMOLED" && ele[6] == "4g")
// console.log(amoled);

