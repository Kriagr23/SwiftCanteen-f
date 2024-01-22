// JavaScript for the order summary page (order.html)
const orderList = document.querySelector('.order-list');
const totalPriceSpan = document.getElementById('total-price');
const placeOrderButton = document.getElementById('place-order');

// Retrieve the stored order from localStorage
const order = JSON.parse(localStorage.getItem('order')) || [];

// Function to calculate the total price
function calculateTotalPrice() {
    return order.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
}

// Function to update the order list and total price
function updateOrderList() {
    orderList.innerHTML = '';
    order.forEach((item) => {
        const orderItem = document.createElement('div');
        orderItem.classList.add('order-item');
        orderItem.innerHTML = `${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`;
        orderList.appendChild(orderItem);
    });
    
    const total = calculateTotalPrice();
    totalPriceSpan.textContent = `$${total}`;
}

updateOrderList();

placeOrderButton.addEventListener('click', () => {
    // Implement order placement logic (e.g., sending an order to the server)
    alert('Order placed!');

    // Clear the order after placing the order
    localStorage.removeItem('order');
    updateOrderList();
});
