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
var BottleMaker = /** @class */ (function () {
    function BottleMaker(price, color) {
        this.price = price;
        this.color = color;
    }
    return BottleMaker;
}());
var bottle = new BottleMaker(100, "red");
console.log(bottle);
var Hotel = /** @class */ (function () {
    function Hotel(name) {
        this.name = name;
    }
    Hotel.prototype.changeName = function (name) {
        this.name = name;
    };
    return Hotel;
}());
var cnbHotel = new Hotel("chandbali Hotel");
cnbHotel.changeName("Hotel Chandbali");
console.log(cnbHotel);
