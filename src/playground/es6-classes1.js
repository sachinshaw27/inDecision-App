class Person {
    constructor(name = 'Anonymous', age=0){
        this.name=name;
        this.age=age;
    }
    getGreeting(){
        return `${this.name} is ${this.age} year old`;
    }
}

class Student extends Person{
    constructor(name,age,major) {
        super(name,age);
        this.major=major;
    }
    hasMajor(){
        //if major is there, !major = false and !!major=true
        //else !!major=false
        return !!this.major;
    }
    getGreeting(){
        let description = super.getGreeting();
        if(this.major)
         description+=` and has ${this.major} as major subject`;
        return description;
    }
}
const me = new Student('Sachin',22,'Electrical Engineering');
console.log(me.getGreeting());
console.log(me.hasMajor());
const other = new Student();
console.log(other.getGreeting());
console.log(other.hasMajor());