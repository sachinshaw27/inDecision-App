var nameVar='sachin';
var nameVar='Mike'
//redeclare same var is okay hence debug issue
console.log('nameVar',nameVar);

let nameLet= 'Jon';
nameLet= 'Abhay';
console.log("Namelet",nameLet)

const nameConst= 'Dina';
//values cant be changed
console.log("NameConst",nameConst)

function getName(){
    var petName='Hala';
    return petName;
}
//block scoping
//var is function scoped, let and const are block scoped
//so var can be used outside its scope too
var fullName='Sachin Shaw';
if(fullName){
    var firstName=fullName.split(' ')[0];
    
}
console.log(firstName); //works for var, not for consts, letS