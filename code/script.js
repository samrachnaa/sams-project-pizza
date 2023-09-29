// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Sami's Pizzeria, let me know when you're ready to order!`
)

const customerName = prompt(
  "Welcome to our pizzeria! Please input your name!"
)

//Displaying customer's name
alert(`Hello ${customerName}! What would you like to order with us today?`);

// Step 2 - Food choice

const pizzeriaOrder = prompt(
  `Please pick from one of our offers!
  1 - Pizza 
  2 - Pasta
  3 - Salad
  Please enter the number of your choice`
);

let customerOrder="";

if (pizzeriaOrder === "1") {
  customerOrder = "Pizza";
} else if (pizzeriaOrder === "2") {
  customerOrder = "Pasta";
} else if (pizzeriaOrder === "3") {
  customerOrder = "Salad";
} else {
  alert("Sorry, your order choice is invalid. Please pick a number between 1 and 3.");
}

alert(`Sweet, that you chose to have ${customerOrder} today!`);


// Step 3 - Subtype choice
let chosenTopping = "";
let toppingType = [];

switch (customerOrder){
 case "Pizza":
  chosenTopping = prompt(
    `Please pick a number from one of our toppings!
    1 - Anchovies 
    2 - Mushrooms
    3 - Four cheese
    Please enter the number of your choice`
    );
    toppingType=["Anchovies", "Mushrooms", "Four cheese"]
    break;
   case "Pasta":
      chosenTopping = prompt(
        `Please pick a number from one of our pasta types!
        1 - Pasta Carbonara 
        2 - Pasta Tortellini
        3 - Pasta Arrabiata
        Please enter the number of your choice`
        );
        toppingType=["Pasta Carbonara", "Pasta Tortellini", "Pasta Arrabiata"]
        break;
        case "Salad":
          chosenTopping = prompt(
            `Please pick a number from one of our pasta types!
            1 - Caesar Salad
            2 - Quinoa Salad
            3 - Marinated Tofu Salad
            Please enter the number of your choice`
            );
            toppingType=["Caesar Salad", "Quinoa Salad", "Marinated Tofu Salad"]
            break;
default:
    alert("Sorry it was an invalid option, please select a valid option from the numbers listed.");
    exit(1);
}

if (chosenTopping === "1") {
  alert(
    `Nice! You will get your order for ${toppingType[0]} soon!`
  );
} else if (chosenTopping === "2") {
  alert(
    `Nice! You will get your order for ${toppingType[1]} soon!`
  );
} else if (chosenTopping === "3") {
  alert(
    `Nice! You will get your order for ${toppingType[2]} soon!`
  );
}

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here