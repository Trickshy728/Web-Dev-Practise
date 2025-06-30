/*
//.filter=filters out values of an array and creates a new one

const age=[13, 15, 29, 25, 19, 32, 27, 22, 20, 15, 16, 18];
let adults = age.filter(isBaalig);

function isBaalig(umar){
  return umar>=18;
}

const names = ["Aditya", "Amar", "Rudraksh"];
let logWithA = names.filter(startsWithA)

function startsWithA(element){
  return element.charAt(0)==="A";
}
console.log(logWithA);

//.reduce method = reduces the elements of an array to a single value
const marks=[29, 25, 27, 22, 20];
console.log(marks.reduce(total));
function total(x, y){
  return x+y;
}

//Constructors=Vaguely, a shortcut to create dictionaries in js 
//In js, dictionaries can contain functions too, where the function's name is the key and the definition of function(in function expression or by arrow method) is the value
//this. is a reference to the object in which it is used
function Person(name, work, age){
  this.name=name,
  this.work=work,
  this.age=age,
  this.umar=function(){console.log(`${name} is ${age} years old.`)}
}

const p1=new Person("Janki", "Doctor", 27);
p1.umar();

//Classes=more structured and cleaner way to work with objects compared to traditional functions
//Eg. static keyword, encapsulation, inheritance
class Website{
  constructor(name, purpose, storageUsed){
    this.name=name;
    this.purpose=purpose;
    this.storage=storageUsed;
  }
  displayDetail(){
    console.log(`The website "${this.name}" is made for${this.purpose}.`)
  }
  actualStorage(bits){
    console.log(bits*(this.storage));
    return bits*(this.storage)
  }
}

const w1=new Website("Academic Vinragi", "UPSC CAPF info", 38);
w1.displayDetail();
w1.actualStorage(10);
*/

