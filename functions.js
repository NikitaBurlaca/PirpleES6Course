const inputType = (input) => {
  if(typeof input === "string") {
      return true;
  }
  
  return false;
};


const manIsMortal = (man, arr) => {
  
  const isValidInput = inputType(man);

  if(arr.length > 0) {
      const isMortal = true;
      
      if(isValidInput && arr.indexOf(man) !== -1 && isMortal) {
          return true;
      }  
  }

  return false;
};

function Man(name) {
  this.name = name;
};

const men = ["Cicero", "Galileo", "Pythagoras", "Socrates"];


const man_01 = new Man("Socrates");
const man_02 = new Man("Nikita");
const man_03 = new Man(123);


console.log(man_01.name + " is mortal: " + manIsMortal(man_01.name, men));
console.log(man_02.name + " is mortal: " + manIsMortal(man_02.name, men));
console.log(man_03.name + " is mortal: " + manIsMortal(man_03.name, men));


//



const theCake = "cake";

let vanilla = true;

let chocolate = false;

let array = [{vanilla:true},{chocolate:false}];

let cakeType = (item) => {
  
  if(array[0].vanilla){
    chocolate = false;
    console.log("This " + item + " is not chocolate");
    console.log("Therefore this "+item + " is vanilla");
  } else if (array[1].chocolate){
    vanilla = false;
    console.log("This " + item + " is  chocolate");
    console.log("Therefore this "+item + " is not vanilla");
  }
}
cakeType(theCake);
