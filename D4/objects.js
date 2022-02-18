// // Step 1
// const cafe = {
//   name: "Whitesheep",
//   seatingCapacity: 100,
//   hasSpecialOffers: true,
//   drinks: [
//     "Cappucino",
//     "Latte",
//     "Filter Coffee",
//     "Tea",
//     "Hot Chocolate"
//   ]
// }

// console.log(cafe.name)
// console.log(cafe["name"])

// // Step 2
// let offer = "none";
// let time = 1200;

// const cafe = {
//   name: "Whitesheep",
//   seatingCapacity: 100,
//   hasSpecialOffers: true,
//   drinks: [
//     "Cappucino",
//     "Latte",
//     "Filter Coffee",
//     "Tea",
//     "Hot Chocolate"
//   ],
//   breakfastOffer: "Free croissant with coffee",
//   lunchOffer: "Free drink with surprisingly priced sandwich",
//   noOffer: "Sorry no offer"
// }

// if (time < 1100){
//   offer = breakfastOffer;
//   console.log(cafe.breakfastOffer);
// } else if (time < 1500){
//   offer = cafe.lunchOffer;
//   console.log(cafe.lunchOffer)
// }

// // Step 2 Challenge

// let alarm = "";
// let day = "Monday";

// const alarmClock = {
//   weekendAlarm: "No alarm needed",
//   weekdayAlarm: "Get up at 7am"
// };

// if (day == "Saturday" || day == "Sunday"){
//   alarm = alarmClock.weekendAlarm;
//   console.log(`Hello Myles: ${alarm}`)
// } else {
//   alarm = alarmClock.weekdayAlarm;
//   console.log(`Hello Myles: ${alarm}`)
// }

//fave songs activity
// const person = {
//   name: "Myles",
//   age: 27,
//   favSongs: [
//     "Friday - Rebecca Black",
//     "Stairway To Heaven - Led Zepellin",
//     "Millionaire - QOTSA",
//     "Grace - Jeff Buckley",
//     "Something - The Beatles",
//     "Deliverance - Opeth"
//   ],
//   // greeting(){
//   //   if(this.name === "Myles")
//   // }
// };
// 
// console.log(person.favSongs);


// // Step 3
// let offer = "none";
// let time = 1200;

// const cafe = {
//   name: "Whitesheep",
//   seatingCapacity: 100,
//   hasSpecialOffers: true,
//   drinks: [
//     "Cappucino",
//     "Latte",
//     "Filter Coffee",
//     "Tea",
//     "Hot Chocolate"
//   ],
//   breakfastOffer: "Free croissant with coffee",
//   lunchOffer: "Free drink with surprisingly priced sandwich",
//   noOffer: "Sorry no offer",

//   openCafe: () => {
//     return "Come on in!"
//   },
//   closeCafe: () => {
//     return "We are closed, come back tomorrow!"
//   }

// };

// console.log(cafe.openCafe());
// console.log(cafe.closeCafe());



// Step 4
let offer = "none";
let time = 1200;

const cafe = {
name: "Whitesheep",
seatingCapacity: 100,
hasSpecialOffers: true,
drinks: [
  "Cappucino",
  "Latte",
  "Filter Coffee",
  "Tea",
  "Hot Chocolate"
],
breakfastOffer: "Free croissant with coffee",
lunchOffer: "Free drink with surprisingly priced sandwich",
noOffer: "Sorry no offer",

openCafe() {
  if (this.hasSpecialOffers) {
    return "Time for a special offer";
  }
},
closeCafe() {
  return "We are closed, come back tomorrow!"
}

};

console.log(cafe.openCafe());




