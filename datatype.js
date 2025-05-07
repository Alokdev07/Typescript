//Basic Types
//.Primitive Types(Number,Boolean,String)
//.Arrays
//.Tuples
//.Enums
//Any,Unknown,void,null,undefined,never
var arr = ["alok", 12]; //tuple
console.log(arr);
var User_role;
(function (User_role) {
    User_role["ADMIN"] = "admin";
    User_role["USER"] = "user";
    User_role["SUPER_ADMIN"] = "superAdmin";
})(User_role || (User_role = {}));
var StatusCode;
(function (StatusCode) {
    StatusCode["NOT_FOUND"] = "404";
    StatusCode["INTERNAL_SERVER_ERROR"] = "500";
})(StatusCode || (StatusCode = {}));
StatusCode.NOT_FOUND;
