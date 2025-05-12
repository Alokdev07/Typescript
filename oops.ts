
/* 
    Classes and Objects 

       .Class definitions
       .Constructors
       .Access Modifier(private,public,protected)
       .Readonly properties
       .optional properties
       .parameter properties
       .Getters and Setters
       .Static method 
       .Abstract class method

*/

class BottleMaker{
    constructor(public price : number, public color : string){

    }
}

let bottle = new BottleMaker(100,"red")
console.log(bottle)

class Hotel{
    constructor(private name : string,protected price : number){}
    changeName(name: string){
        this.name = name
    }
}
class chandbaliHotel extends Hotel{
    constructor(name : string,price : number){
        super(name,price)
    }
}
let cnbHotel = new chandbaliHotel("Hotel Chandbali",40)
cnbHotel.changeName("Hotel Chandbali")

console.log(cnbHotel) // there is one thing that private and protected private is only use in the same class and protected is only used by extended class


class User{
    constructor(public readonly userName : string){}
}
let user = new User("alokdev007")
user.userName = "alokdev008" // readonly properties is for using for only to read data not to overWrite

class Student{
    constructor(public name : string, public age : number,public mark?: string){}
} // optional properties used for using optional properties

let student = new Student("Alok",20)