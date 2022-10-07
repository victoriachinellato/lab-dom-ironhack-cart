// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  let subtotal = quantity * price;
  product.querySelector('.subtotal span').innerHTML = subtotal;
  return subtotal;

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);

  // end of test

  // ITERATION 2

  let totalPrice = 0;
  let products = document.getElementsByClassName('product');
  for (i = 0; i < products.length; i++) {
    let newPoroduct = products[i];
    updateSubtotal(newPoroduct);
    totalPrice += updateSubtotal(newPoroduct);
  }

  // ITERATION 3
  document.querySelector('#total-value span').innerHTML = totalPrice;
  console.log(totalPrice);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentNode.parentNode.remove();
}

// ITERATION 5

function createProduct() {
  // 1.capturar los valores que luego formaran los nuevos productos:
  const newProduct = document.querySelector('.create-product');
  const newProductName = newProduct.querySelector('input[type="text"]').value;
  console.log(newProductName);

  //  para evitar que la funcion siga en cas de que el input este vacio:
  if (newProductName.trim().length === 0) return;

  const newProductPriceText = newProduct.querySelector('input[type="number"]').value;
  const newProductPrice = parseFloat(newProductPriceText).toFixed(2);
  console.log(newProductPrice);

  // seleccionamos el elemento en el que agregaremos el producto nuevo
  const body = document.querySelector('tbody');
  body.innerHTML += `
  <tr class="product">
      <td class="name">
        <span>${newProductName}</span>
      </td>
      <td class="price">$<span>${newProductPrice}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
</tr>`;

// vacio el input una vez agregado el producto:
newProduct.querySelector('input[type="text"]').value = "";
newProduct.querySelector('input[type="number"]').value = 0;

// volvemos a cargar los listerners que habiamos perdido
removeListeners();
}

const removeListeners = () => {
  // eliminar productos
  const removeBtns = document.querySelectorAll('.btn.btn-remove');
  for (let i = 0; i < removeBtns.length; i++) {
    const element = removeBtns[i];
    element.addEventListener('click', removeProduct);
  }
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);


  // agregar productos:
  // capturamos el evento de crear y le enviamos la funcion createProduct
  removeListeners()
  document.querySelector('#create').addEventListener('click', createProduct);
});
