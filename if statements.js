const men = ["Socrates", "Galileo"];
const allMenAreMortal = true;

if (allMenAreMortal === true){
  console.log("All men are mortal!");
}

  if (men[0] == "Socrates"){
    console.log("Socrates is a man, therefore he is mortal");
   
  }
   
else {
  console.log("Socrates is not a man");
}



// extra credit



const cakes = ["vanilla", "chocolate"];
const cake = "vanilla";

if (cake === cakes[0] || cake === cakes[1]){
  if (cake !== "chocolate"){
console.log("This cake has " + cake);
  }
}
