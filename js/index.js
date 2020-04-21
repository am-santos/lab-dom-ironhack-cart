// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  // Creates DOM node for each variable
  const $price = product.querySelector('.price span');
  const $quantity = product.querySelector('.quantity input');

  // Gets the values from each DOM node
  const  price = Number($price.innerText);
  const  quantity = $quantity.valueAsNumber;

  // Calculates subtotal price.
  const subTotal = price * quantity;

  // Get the DOM of subtotal class
  const $subTotal = product.querySelector('.subtotal span');


  // Adds subtotal to the value of subtotal DOM.
  $subTotal.innerText = subTotal;

  return subTotal;
}

function calculateAll() {
   // ITERATION 2
  //... your code goes here

  const arrayOfProducts = document.getElementsByClassName('product');

  let auxTotal = 0;

  for (let product of arrayOfProducts) {
    auxTotal += updateSubtotal(product);
  }
  
  const $total = document.querySelector('#total-value span');
  $total.innerHTML = auxTotal;
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
