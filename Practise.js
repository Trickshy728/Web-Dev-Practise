/*
console.log(`Hi!`)
console.log(`I am Priyal.`)

window.alert(`Are you ready?`);

document.getElementById(`myH1`).textContent=`Hi Guys!`;
document.getElementById(`myP1`).textContent=`How are you`;

//taking input
let username;
document.getElementById(`mysm`).onclick = function(){
  username = document.getElementById(`text`).value;
  document.getElementById(`myh1`).textContent = `Hi ${username}`
};

//typec conversion of a datatype(stings,nos., values) cause user input is normally a number
let x = window.prompt(`What is your age?`);
x+=1;//lets the input be a string
x++; //lets the string operate as a number
console.log(x);
x=Number(x);
x++;
console.log(x);

//Math: built-in object that provides a collection of properties and methods
let x = 10.30;
let y = 2;
let z = 3;
let w;
//w = Math.round(x);
//w = Math.floor(x);
//w = Math.ceil(x)  
//w = Math.trunc(x)
//w = Math.abs(x)
//w = Math.pow(y, z)
//w = Math.sqrt(x)
//w = Math.sin(x)
//w = Math.max(x, y, z)
//w = Math.min(x, y, z)

//Rolling 3 dice
let r1, r2, r3;
const l1 = document.getElementById('l1');
const l2 = document.getElementById('l2');
const l3 = document.getElementById('l3');
const roll = document.getElementById('roll')
roll.onclick = function(){
  r1 = Math.floor(Math.random()*6 + 1);
  r2 = Math.floor(Math.random()*6 + 1);
  r3 = Math.floor(Math.random()*6 + 1);
  l1.textContent = r1;
  l2.textContent = r2;
  l3.textContent = r3;
}

let a;
const sb = document.getElementById('sb');
const age = document.getElementById('agein');
const stmnt = document.getElementById('myp1');
sb.onclick = function(){
  stmnt.textContent = "Good Job!";
  a = age.value;
  if(a<0){

  }

//switch:- used when faced with a lot of if-else statements
let testScore = window.prompt('Enter testscore')
let letterGrade;
switch(true){
  case testScore>92:
    letterGrade = 'A';
    break;
  case testScore>80:
    letterGrade = 'B';
    break;
  case testScore>65:
    letterGrade = 'C';
    break;
  case testScore>50:
    letterGrade = 'D';
    break;
  default:
    letterGrade = 'F';
    break;
}
console.log(letterGrade)

//string methods
let u = `PrUjaNay   Hi`
console.log(u.charAt(5))
console.log(u.indexOf("P"))
console.log(u.length)
u = u.trim()//removes whitespaces before and after the chars in a string
console.log(u)
console.log(u.startsWith("P"))//bool value
console.log(u.endsWith("P"))
u = u.replaceAll('a', 'u')
console.log(u)
u = u.padStart(15, "0")

//string slicing
let u = `PrUjaNay Hi`
let fw = u.slice(0, u.indexOf(' '))// can be a number instead of u.indexOf(' ') or no number which will make the string sliced till the end
console.log(fw)


//METHOD CHAINING
let u = `PrUjaNay`
u = u.trim().charAt(0).toUpperCase() + u.trim().slice(1).toLowerCase();
console.log(u)

//LOGICAL OPERATORS  AND= && , OR= || , NOT= !
//STRICT EQUALITY OPERATOR(=== which compares both value and datatype of the element unlike the equality(==) operator)
*/

//TEMPERATURE CONVERSION PROGRAM


//ARRAYS
let a = ["Navya", "Sudhi", "Rakshu", "Rivya", "Lakshya"];
let b = [35, 17, 95, 1003, 8]
console.log(a);
//indexing is same as in list
//a[5] = "Rishi";
//console.log(a);
//console.log(a[2]);
//console.log(a.indexOf("Navya"));
a.push("Rishi");//adds element in end
a.pop();//removes element in end
a.unshift("Rishi");//adds element in end
a.shift();//removes element in start
console.log(a.length);//numer of elements in array

console.log(Math.min(...b));
//The (...) before b is a { SPREAD OPERATOR } that unpacks arrays and strings into seperate elements
let c = [..."Priyal"];

//to display elements of an array
for(let i in c){
  console.log(c[i]);
}
console.log(a.sort());//to sort the array
let letters = [...c].join("_");
console.log(letters);
//let aCopy = [...a]; // shallow copy of a i.e. identical elements, different data structures
let aCopy = [...a, ...b];
console.log(aCopy);