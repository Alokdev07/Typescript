//Type Inference
//Understanding Type Inference
//Type annotations 


let password : number;  //Type annotation

/* Interference and Type Aliases 
    Defining Interfaces
    Using interfaces to define object Shapes
    Extending interfaces
    Type alias
    InterSection Types
*/ 

interface User{
    name : string,
    email : string,
    password : number
}

function getDataOfUser(user : User) : User{
    return user
}

let response : User = getDataOfUser({name : 'alok',email : 'alok123',password : 123})

console.log(response) 

//extended Interface 

interface admin extends User{
    admin : boolean
}

function getData(user : admin) {
    user.admin = false
    user.password = 123
}

//Type alias

type value = string | number | null;

let ans : value ; 

type UserPage = {
    name : string,
    email : string
}

type Admin = UserPage & {
    admin : boolean
}