const toF = document.getElementById("CtoF");
const toC = document.getElementById("FtoC");
const temp = document.getElementById("temp");
const inputNum = document.getElementById("inputNum");
let t;
function convert(){

  if(toF.checked){
    t = Number(inputNum.value);
    t = t * 9 / 5 + 32;
    temp.textContent = t.toFixed(2) ;
  }
  else if(toC.checked){
    t = Number(inputNum.value);
    t = (t - 32) * 5/9;
    temp.textContent = t.toFixed(2) ;
  }
  else{
    temp.textContent="Select a unit";
  }
}