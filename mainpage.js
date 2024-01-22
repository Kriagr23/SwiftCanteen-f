
let openShopping = document.querySelector('.cart');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
var stripe = Stripe('pk_test_51OLKUWSCaq8HSgT8sLXHSDHeTh9C8eVAQ8s8WmOHr4geWmBY9pL8oQzQMYHV7HnzTOlQA3eiLkqflZKuMEHU7fbV00rWukNUCP');
document.addEventListener('DOMContentLoaded', function () {
    // Wait for the DOM to be fully loaded


});
openShopping.addEventListener('click', () => {
    body.classList.add('active');
})
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
})


let foodItems = [
    {
        id: 1,
        name: 'Fried Rice',
        desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer hdihd ihdo ihk whdow wiodh wodjwo wo hdow.',
        image: '../assets/fried-rice.jpg',
        price: 90
    },
    {
        id: 2,
        name: 'Cold Coffee',
        desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer hdihd ihdo ihk whdow wiodh wodjwo wo hdow.',
        image: '../assets/cold-coffe.jpg',
        price: 70
    },
    {
        id: 3,
        name: 'Idli Sambhar',
        desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer hdihd ihdo ihk whdow wiodh wodjwo wo hdow.',
        image: '../assets/idli.jpg',
        price: 30
    },
    {
        id: 4,
        name: 'Misal Pav',
        desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer hdihd ihdo ihk whdow wiodh wodjwo wo hdow.',
        image: '../assets/misalpav.jpg',
        price: 35
    },
    {
        id: 5,
        name: 'Vada Pav',
        desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer hdihd ihdo ihk whdow wiodh wodjwo wo hdow.',
        image: '../assets/vadapav.jpg',
        price: 15
    },
    {
        id: 6,
        name: 'Sandwich',
        desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer hdihd ihdo ihk whdow wiodh wodjwo wo hdow.',
        image: '../assets/sandwich.jpg',
        price: 50
    },
    {
        id: 7,
        name: 'Shwarma',
        desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer hdihd ihdo ihk whdow wiodh wodjwo wo hdow.',
        image: '../assets/shwarma.jpg',
        price: 70
    },
    {
        id: 8,
        name: 'Roti Sabji',
        desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer hdihd ihdo ihk whdow wiodh wodjwo wo hdow.',
        image: '../assets/rotisabzi.jpg',
        price: 60
    },
    {
        id: 9,
        name: 'Tea',
        desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer hdihd ihdo ihk whdow wiodh wodjwo wo hdow.',
        image: '../assets/tea.jpg',
        price: 10
    },
    {
        id: 10,
        name: 'Masala Dosa',
        desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer hdihd ihdo ihk whdow wiodh wodjwo wo hdow.',
        image: '../assets/dosa.jpg',
        price: 50
    }
];
let listCards = [];

// Function to generate HTML for a single menu item
function createMenuItem(item, key) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("main-card");

    menuItem.innerHTML = `
            <div class="main-image">
                <img src="${item.image}" alt="${item.name}" width = "225px" height = "170px";>
            </div>
            <div class="main-text">
                <h5>${item.name}</h5>
                <span class="item-price">&#x20B9;${item.price}</span>
                <p>${item.desc}</p>
                <div class="add-container">
                    <button id="add-button" class="add-button" onclick="addToCard(${key})">Add</button>
                </div>
            </div>`;
    list.appendChild(menuItem);
}


function initApp() {
    foodItems.forEach((item, key) => {
        createMenuItem(item, key);
    })
}
initApp();

function addToCard(key) {
    if (listCards[key] == null) {
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(foodItems[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>&#x20B9;${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
    })
    total.innerHTML = `&#x20B9;${totalPrice.toLocaleString()}`;
    quantity.innerText = count;
}
function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * foodItems[key].price;
    }
    reloadCard();
};

//payment 
// Find the button element by its ID
var myPayment = document.getElementById('myPayment');

// Attach an event listener for the 'click' event
myPayment.addEventListener('click', function () {
    // This function will be executed when the button is clicked
    //   alert('order placed');
    if (listCards.length == 0) {
        alert('Your cart is empty')
    }
    else { console.log(listCards)
        alert('Your order is placed!') }

});





























// // Wait for the document to be fully loaded
// document.addEventListener("DOMContentLoaded", function() {
//     // Get references to HTML elements using querySelectorAll
//     const addButton = document.querySelectorAll(".add-button");
//     const decrementButton = document.querySelectorAll(".decrement");
//     const incrementButton = document.querySelectorAll(".increment");
//     const quantityDiv = document.querySelectorAll(".quantity-controls");
//     const quantitySpan = document.querySelectorAll(".quantity");

//     // Initialize quantities for all cards
//     let quantities = Array.from({ length: addButton.length }, () => 0);

//     // Function to update the quantity for a specific card
//     function updateQuantity(cardIndex) {
//         quantitySpan[cardIndex].textContent = quantities[cardIndex];
//     }

//     // Event listeners for the "Add" buttons
//     addButton.forEach(function(button, cardIndex) {
//         button.addEventListener("click", function() {
//             // Show the quantity div for the clicked card
//             quantityDiv[cardIndex].style.display = "block";

//             // Set the initial quantity to 1 for the clicked card
//             quantities[cardIndex] = 1;
//             updateQuantity(cardIndex);
//         });
//     });

//     // Event listeners for the "-" buttons
//     decrementButton.forEach(function(button, cardIndex) {
//         button.addEventListener("click", function() {
//             if (quantities[cardIndex] > 0) {
//                 quantities[cardIndex]--;
//                 updateQuantity(cardIndex);
//             }
//         });
//     });

//     // Event listeners for the "+" buttons
//     incrementButton.forEach(function(button, cardIndex) {
//         button.addEventListener("click", function() {
//             quantities[cardIndex]++;
//             updateQuantity(cardIndex);
//         });
//     });
// });



// document.addEventListener("DOMContentLoaded", function() {
//     const decrementButton = document.getElementById("decrement");
//     const incrementButton = document.getElementById("increment");
//     const addButton = document.getElementById("add");
//     const quantitySpan = document.getElementById("quantity");
//     const quantityControls = document.querySelector(".quantity-controls");

//     let quantity = 0;

//     decrementButton.addEventListener("click", function() {
//         if (quantity > 0) {
//             quantity--;
//             quantitySpan.textContent = quantity;
//         }
//     });

//     incrementButton.addEventListener("click", function() {
//         quantity++;
//         quantitySpan.textContent = quantity;
//     });

//     addButton.addEventListener("click", function() {
//         quantitySpan.textContent = 1;
//         if (quantitySpan.textContent > 0) {
//             quantityControls.classList.remove("hidden");
//             addButton.textContent = "+";
//         } else {
//             quantityControls.classList.add("hidden");
//             addButton.textContent = "Add";
//         }
//     });
// });
