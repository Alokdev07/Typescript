//Type Inference
//Understanding Type Inference
//Type annotations 
var password; //Type annotation
function getDataOfUser(user) {
    return user.name && user.email;
}
var response = getDataOfUser({ name: 'alok', email: 'alok123', password: 123 });
console.log(response);
