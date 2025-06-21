


let cartCount = 0;

function cart(itemName, itemPrice) {
  cartCount++;
  document.querySelector('.cart-icon').textContent = `🛒 (${cartCount})`;
  alert(`${itemName} has been added to your cart!`);
  
}
