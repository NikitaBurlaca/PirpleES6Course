//Variables can be declared as let, const and var. One of the main differences between this declarations is their scopes. Let is only block scoped, it means it works only in the block of code defined {}, also let can be changed within its scope but not with the same name. Const - is also block scoped but it maintain the same values and cannot be changed. Var is global scoped and can be re-declared.


let nikita = true;

if (nikita === true){
    let vasile = "I'm Vasile!"
    console.log(vasile); //"I'm Vasile"
}
console.log(vasile); // vasile is not defined


//


const nikita = "My name is Nikita";
nikita = "My name is Vasile" //error : Assignment to constant variable


//



var nikita = "My name is Nikita";
var nikita = "My name is Vasile";  // it will work within or not , the scope.

// Also this

var nikita = "My name is Nikita";
nikita = "My name is Vasile" // valid aswell



//


Hoisting is a way of declaring variables to the top of their scope. Let and const can be hoisted to the top but are not initialized (if you try to use let or const without previous declaration you will get a Reference error). Var is also hoisted to the top of block but is marked as undefined, so if you for example try to : 
console.log(nikita); // nikita will be undefined
var nikita = "My name is Nikita" // the variable take the value of the declaration