// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  
  let price = product.querySelector('.price span').innerHTML
  let quantity = product.querySelector('.quantity input').value
  let subtotal = quantity * price;

  product.querySelector('.subtotal span').innerHTML = subtotal;

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.


  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);


  // end of test

  // ITERATION 2
  let products = document.getElementsByClassName('product')
  for ( i= 0; i < products.length; i++) {
  let newPoroduct = products[i]
  updateSubtotal(newPoroduct)
  }

  // ITERATION 3
  //... your code goes here

  let subtotales = document.querySelectorAll('.subtotal span').innerHTML;
  let total = 0;
  for (i = 0; i < subtotales.length; i++){
  total += subtotales[i]
  }
  
  document.querySelector('#total-value span').innerHTML =  total
  

  //let total = document.querySelector('#total-value span').innerHTML

  
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
