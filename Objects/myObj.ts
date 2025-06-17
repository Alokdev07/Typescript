const User = {
    name : "Alok",
    email : "alokbhuyan162@gmail.com",
    isActive : true
}

function createUser({name : string,isPaid : boolean}){}

createUser({name : "Alok",isPaid : true})

function createCourse():{name : string,price : number}{
    return {
        name : "React js",
        price : 399
    }
}

//type alias

export type User = {
    readonly _id : string;
    name : string;
    email : string;
    isActive : boolean;
    creditCardDetails? : number
}

// function CreateUser(user : User) : User{
//     return user
// }

// CreateUser({_id : "" ,name : "",email : "",isActive : true})

let myUser : User = {
    _id : "123",
    name : "hitesh",
    email : "hitesh@gmail.com",
    isActive : false
}

myUser.email = "alok@gmail.com"
// myUser._id = "1234"

type cardNumber = {
    cardNumber : string
}

type cardDate = {
    cardDate : string
}

type cardDetails = cardNumber & cardDate & {
    cvv : number
}

