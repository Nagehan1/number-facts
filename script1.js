/*let laptop = {
    brand: "Lenova",
    isTouchscreen: false,
    operatingSystem: "linux",
    memory : 16 ,
    hardDrive: "500mb",
}
    console.log(laptop) */



/*    let table = {
    color : "white",
    weight : "150cm",
    height : "72 cm",
    }*/
/*

let kitten = {
    furColor: "orange",
    age :23 ,
};

let laptop ={
    brand: "Lenovo",
    ram :"5GB",
}

let phone = {
    operatingSystem :"iOS",
    hasStylus: true,
    megapixels: 12,
    batteryLife: "24 hours",

}
phone.megapixels = 13,
phone.brand = ["samsung", "iphone"]

console.table(phone)
console.log(laptop.ram)

 console.log(laptop['brand'])
 console.log(phone['hasStylus']) */


/* const kitten = {
    name :"Gilbert"
 }
 console.log(kitten.name);
  

 let dog = {
  name: "Billy",
  wantsToPlay: false,
};

dog.name = "Rex"
dog.wantsToPlay = true;
console.log(dog.name);
console.log(dog.wantsToPlay);


*/

//
/*
  let house = {
  address: "1 Kinning Park",
  previousOwners: ["Claire M.", "John A."],
  currentOwner: {
    firstName: "Margaret",
    lastName: "Conway",
  },
};

let newCurrentOwner = {
  firstName: "Georgina",
  lastName: "Hernandez",
};
house.currentOwner = newCurrentOwner;
console.log(house.currentOwner)

house.previousOwners[1] ="Stephen B."
console.log(house.previousOwners)

house.isForSale = false
console.log(house.isForSale)

*/



/*
let kinningParkHouse = {
  address: "1 Kinning Park",
  price: 180000,
  currentOwner: {
    firstName: "Margaret",
    lastName: "Conway",
    email: "margaret@fake-emails.com",
  },
};

let parkAvenueHouse = {
  address: "50 Park Avenue",
  price: 195000,
  currentOwner: {
    firstName: "Marie",
    lastName: "McDonald",
    email: "marie.m@real-emails.com",
  },
};
 

function getOwnerFullName(house) {
    return `${house.currentOwner.firstName} +${house.currentOwner.lastName}`
}
console.log(getOwnerFullName(parkAvenueHouse))
  nsole.log(getOwnerFullName(parkAvenueHouse))
  */
/*

  let person = {
  name: "Alice",
  age: 25,
 greet: function(){
    return 'Hello everyone'
 },
 sayName : function(){
    return `my name is ${person.name}`
 }   
 
  }
console.log(person.greet())
console.log(person.sayName())

*/


// let person = {
//     name: "Alice",
//     age: 25,
//     currentAddress: "Glasgow",
//     changeAddress: function(newAddress) {
//         currentAddress = newAddress;
//     },
//     celebrateBirthday: function() {
//         that.age = that.age + 1;
//     }
// }


// let person = {
//     name: "Alice",
//     age: 25,
//     currentAddress: "Glasgow",
//     changeAddress: function(newAddress) {
//        this.currentAddress = newAddress;
//     },
//     celebrateBirthday: function(){
//         this.age = this.age + 1;
//     }
// };
// console.log(person.currentAddress)

// let person = {
//   name: "Alice",
//   friends: ["John", "Nina"],
//   makeFriend :function(friendName){
// this.friends.push(friendName)
//   }
// };



// person.makeFriend("Bob");

// console.log(
//   `Expected result: 'John,Nina,Bob'. Actual result: ${person.friends}`
// );


let coffeeMachine = {
  brand: "Super Coffee",
  prices: {
    cappuccino: 2.4,
    blackCoffee: 1.5,
    flatWhite: 3.0,
  },
  insertedAmount: 0,
  insertMoney: function (amount) {
  this.insertedAmount += amount
  },
  getCoffee: function (coffee) {

  },
};

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

coffeeMachine.insertMoney(2.4);
console.log(
  `Expected result: 'Please take your cappuccino'. Actual result: ${coffeeMachine.getCoffee(
    "cappuccino"
  )}`
);

coffeeMachine.insertMoney(1.5);
console.log(
  `Expected result: 'Please take your blackCoffee'. Actual result: ${coffeeMachine.getCoffee(
    "blackCoffee"
  )}`
);

coffeeMachine.insertMoney(4.0);
console.log(
  `Expected result: 'Please take your flatWhite'. Actual result: ${coffeeMachine.getCoffee(
    "flatWhite"
  )}`
);

coffeeMachine.insertMoney(2.4);
console.log(
  `Expected result: 'Sorry you don't have enough money for a flatWhite'. Actual result: ${coffeeMachine.getCoffee(
    "flatWhite"
  )}`
);