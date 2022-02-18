// // Day 4 in-lecture activities.

// // functions

// // const pressGrindBeans = () => {
// //     console.log("Grinding for 20 seconds");
// // }

// // pressGrindBeans();

// //////////////////////////////////////
// //// Slide 10
// let coffeeIsGrinding = true;

// const pressGrindBeans = () => {
//     if (coffeeIsGrinding) {
//         console.log("Stopping the grind...");
//         coffeeIsGrinding = true;
//     } else {
//         console.log("Grinding is about to begin...");
//         coffeeIsGrinding = false;
//     }
// }

// pressGrindBeans();

// //Slide 13
// let accNumber = 123456;    //global variable 
// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing ${amount} from account ${accnum}`);
// }

// cashWithdrawal(300, 50449921);
// cashWithdrawal(30, 50449921);
// cashWithdrawal(200, 50447921);

// cashWithdrawal(120, accNumber); //calling the global variable here

// //// Slide 16

// const addUp = (num1, num2) => {
//     return num1 + num2;
// }


// console.log(addUp(2,5)); 
// console.log(addUp(21,9)); 
// console.log(addUp(10,5)); 




// const coffeeShop = {
//     branch: 'Manchester',
  
//     drinks: {
//       americano: 2,
//       latte: 2.50,
//       espresso: 1.5,
//       capuccino: 3,
//     },
  
//     food: {
//       cookie: 1.5,
//       muffin: 2,
//       sandwich: 3,
//     },
  
//     drinksOrdered(...drinks) {
//       let cost = 0;
//       const drinksStr = drinks.join(' & ');
//       drinks.forEach(drink => (cost += this.drinks[drink]));
//       cost = cost.toString().split('.');
//       cost[1] = cost[1].padEnd(2, '0');
//       cost = cost.join('.');
  
//       return this.displayOrder(drinksStr, cost);
//     },
  
//     foodOrdered(...food) {
//       let cost = 0;
//       const foodStr = food.join(' & ');
  
//       food.forEach(item => (cost += this.food[item]));
  
//       cost = cost.toString().split('.');
//       cost[1] = cost[1].padEnd(2, '0');
//       cost = cost.join('.');
  
//       return this.displayOrder(foodStr, cost);
//     },
  
//     displayOrder(order, cost) {
//       return console.log(
//         `Your ${order} will be with you shortly, the total is £${cost}.`
//       );
//     },
//   };
  
//   coffeeShop.drinksOrdered('capuccino', 'espresso');
//   coffeeShop.foodOrdered('cookie', 'muffin');



let coffeeShop = {
    branch: 'Costa',
    drinks: [
        {
            name: 'Cappucinno',
            price: 10,
        },
        {
            name: 'Latte',
            price: 24,
        },
    ],
    food: [
        {
            name: 'Toast',
            price: 5,
        },
        {
            name: 'Cupcake',
            price: 2.5,
        },
    ],
    drinksOrdered: function () {
        return Your order is ${this.drinks
            .map((d) => d.name + ' costing £' + d.price)
            .join(', ')};
    },
    foodOrdered: function () {
        return Your order is ${this.food
            .map((d) => d.name + ' costing £' + d.price)
            .join(', ')};
    },
};

console.log(coffeeShop.drinksOrdered());
console.log(coffeeShop.foodOrdered());