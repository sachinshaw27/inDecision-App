//arguments object - no longer bound with arrow function
const add=(a,b) => {
    return a+b;
}
console.log(add(55,1,1001));


//this keyword - no longer bound 
const user ={
    name: 'Sachin',
    cities:['Kolkata','Bangalore','Hyd'],
    printPlacesLived(){
        return this.cities.map((city) => this.name+ ' has lived in '+city);
        // this.cities.forEach((city) => {
        //     console.log(this.name+' has lived in '+city);
        // });
    }
};
console.log(user.printPlacesLived());

const multiplier = {
    num: [1,2,3,4,5],
    multiplyBy: 10,
    multiply(){
        return this.num.map((n) => n*this.multiplyBy);
    }
};
console.log(multiplier.multiply());