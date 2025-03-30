console.log("A. PEPSI COLA");
console.log("B. COCA COLA");
console.log("C. APPLE (PER KG)");
console.log("D. ORANGE (PER KG)");
console.log("E. HOTDOGS (PER KG)");

let item_choice = prompt("choose item\n A \n B \n C\n D\n E\n")

let QTY = (prompt("enter the quantity: "));

let price;

switch (item_choice){
    case 'A':
        price = 30.00 * QTY;
        break;
    case 'B':
        price = 35.00 * QTY;
        break;
    case 'C':
        price = 100.00 * QTY;
        break;
    case 'D':
        price = 120.00 * QTY;
        break;
    case 'E':
        price = 180.00 * QTY;
        break;
    default:
        alert("not match try again");
        throw new Error("invalid choice");
        
alert('total price for ${item_choice} x ${QTY}: $$price.tofixed(2)}');
}