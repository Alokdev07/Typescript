const superHeros: Array<string> = [];

superHeros.push("spiderMan");

/*

type User = {
    name : string,
    isActive : boolean
}

const allUsers : User[] = []

allUsers.push({
    name : "Alok",
    isActive : true
})


*/

const MLModels: number[][] = [
  //declare the array inside the array
  [255, 255, 255],
  [255, 0, 243],
];

//union in the same array in folder
let score: number | string = 33;

score = 44;

score = "55";

type User = {
  name: string;
  id: number;
};
type Admin = {
  username: string;
  id: number;
};

let hitesh: User | Admin = {
  name: "hitesh",
  id: 22,
};

hitesh = {
  username: "Ad_Hitesh",
  id: 233,
};

function getDb(_id: number | string) {
  if (typeof _id === "string") {
    _id.toLowerCase();
  } else {
    _id.toString();
  }
  // make some complex api calls
  console.log(`your db id is : ${_id}`);
}

getDb(345);

getDb("435");

const data: (number | string)[] = [1, 2, 3, "4"];
