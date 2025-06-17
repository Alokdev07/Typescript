function addTwo(num : number) : number{
    return num+2
}

function getUppercase(value : string){
    return value.toUpperCase()
}

function signUpUser(name : string,email : string,password : number){}
let logInUser = (name : string,isPaid?:boolean) => {
  
}

function isVal(val : number) : string | boolean{
    if (val > 5) {
        return true
    }
    return "200 Ok"
}

const heroes : string[] = ["ironMan","SuperMan","SpiderMan"]

heroes.map((hero : string) : string => {
     return `hero is ${hero}`
  }  
)

function consoleError(errMsg : string) : void{
    console.log(errMsg

    )
}

function handleError(errMsg : string) : never{
    throw new Error(errMsg)
}


console.log(addTwo(5))
console.log(getUppercase("alok"))
console.log(signUpUser("alok","alokbhuyan162@gmail.com",1234))
console.log(logInUser("alok"))