//Basic Types
//.Primitive Types(Number,Boolean,String)
//.Arrays
//.Tuples
//.Enums
//Any,Unknown,void,null,undefined,never

let arr : [string,number] = ["alok",12]; //tuple
console.log(arr)

enum User_role {
    ADMIN = "admin",
    USER = "user",
    SUPER_ADMIN = "superAdmin"
}

enum StatusCode {
    NOT_FOUND = '404',
    INTERNAL_SERVER_ERROR = '500'
}

StatusCode.NOT_FOUND