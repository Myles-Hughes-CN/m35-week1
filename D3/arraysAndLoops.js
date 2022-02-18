// let coffeeOrder = [
//     "alex - cortardo",
//     "ben - cortardo",
//     "Charlie - whatever's new"
// ];

// console.log(coffeeOrder[2]);

// coffeeOrder[1] = "ann - vanilla latte";


// console.log(coffeeOrder);

// console.log(coffeeOrder.length);

// coffeeOrder.push("donna - espresso");

// console.log(coffeeOrder);

// coffeeOrder.pop();
// console.log(coffeeOrder);

// let songsList = [
//     "Song 1",
//     "Song 2",
//     "Song 3"
// ];

// console.log(songsList);

// songsList.push("Song 4", "Song 5", "Song 6" , "Song 7", "Song 8");

// console.log(songsList);

// songsList.pop();

// console.log(songsList);

// let faveDrinks = [
//     "Coke",
//     "Fanta",
//     "Tonic",
//     "Redbull"
// ];

// for(let i = 1; i <faveDrinks.length; i++){
//     console.log(faveDrinks[i]);
// }

// let multsTwo = [];

// for(let i = 1; i <= 20; i++){
//     if (i % 2 ==0){
//         multsTwo.push(i);
//     }
// }

// console.log(`nums divisible by 2 between 0 and 20 are: ${multsTwo}.`)

// let age = 15;

// while(age < 18){
//     console.log("child");
//     age++;
// }
// console.log("Adult");

let cards = ["D", "S", "H", "C"];
let currentCard = "C";

while(currentCard != "S"){

    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random()*4)];
}
console.log(currentCard);