
console.log("--- Initializing Inventory System ---");

// Data & Input Initialization
const inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

// Function to assign a category badge
function getCategory(price) {
    if (price < 100) {
        return "Budget";
    } else if (price >= 500) {
        return "Premium";
    } else {
        return "Standard";
    }
}

// User Input and Validation
let productName = prompt("Enter product name:");
let productPrice = prompt("Enter product price:");

if (
    productName === null ||
    productName.trim() === "" ||
    productPrice === null ||
    productPrice.trim() === "" ||
    !Number.isFinite(Number(productPrice)) ||
    Number(productPrice) <= 0
) {
    console.log("Invalid input! Product was not added.");
} else {
    const newProduct = {
        name: productName.trim(),
        price: Number(productPrice)
    };

    inventory.push(newProduct);
    console.log(
        `Prompt executed: User adds: "${newProduct.name}" at "$${newProduct.price}"`
    );
}



// Loops, break, and continue
console.log("\n--- Searching Inventory ---");

for (let i = 0; i < inventory.length; i++) {
    const item = inventory[i];

    if (!item || !Number.isFinite(item.price)) {
        continue;
    }

    console.log(`Checking: ${item.name}`);

    if (item.price >= 500) {
        console.log("Premium product found!");
        break;
    }
}
// Switch Statement for Category Badges
function getBadge(price) {
    switch (getCategory(price)) {
        case "Budget":
            return "Budget";
        case "Standard":
            return "Standard";
        case "Premium":
            return "Premium";
        default:
            return "Unknown";
    }
}
// Calculate Total Inventory Value
function calculateTotal(items) {
    let total = 0;

    for (const item of items) {
        total += item.price;
    }

    return total;
}

// Apply Tax and Discount
const calculateFinalPrice = (price, taxRate = 0.18, discount = 0) => {
    const tax = price * taxRate;
    const discountAmount = price * discount;

    return price + tax - discountAmount;
};

// Processing Inventory
console.log("\n--- Processing Inventory Roster (forEach) ---");

inventory.forEach((item) => {
    console.log(
        `* Item: ${item.name} ($${item.price}) -> Category: ${getBadge(item.price)}`
    );
});

// Financial Analytics
console.log("\n--- Financial Analytics ---");

const totalValue = calculateTotal(inventory);

console.log(`Total Inventory Value: $${totalValue}`);


const affordableItems = inventory.filter((item) => item.price < 200);

console.log(
    "Filtered Affordable Items (Under $200):",
    affordableItems.map((item) => item.name)
);

// formatted products report strings
const report = inventory.map(
    (item) => `${item.name.toUpperCase()}: $${item.price}`
);

console.log("Formatted Report List:", report);

// Calculate tax and discount for the total inventory value
const finalValue = calculateFinalPrice(totalValue, 0.18, 0.10);

console.log(`Value after 18% tax and 10% discount: $${finalValue.toFixed(2)}`);
