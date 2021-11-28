fetch("https://raw.githubusercontent.com/alexsimkovich/patronage/main/api/data.json")
.then(response => response.json())
.then(products => renderProducts(products))

function renderProducts(products){
    products.forEach(product => renderOneOfProduct(product))
    console.log(products)

}



function renderOneOfProduct(product){
    
    const findDiv = document.querySelector("#pizza-box");
    const newElement = document.createElement("div")
    const ingredient = product['ingredients'];

    newElement.innerHTML = `
    <div class = "item-card">
    <div class="product-content">
            <img  src="${product.image}" class="item-image" alt="pizza photo">
           <h2 class="item_title">${product.title}</h2></div>
            <p>Kwota: <b>${product.price} zł</b></p>
            
            <div class="item-price"><h3>Składniki:</h3>
                <span>`
                + ingredient +
                `</span>
            </div>
            
            <button id="add-item" class="add-item">Zamów</button>
    </div>
    `
    findDiv.append(newElement)

    var numberOfProducts = 0;
    document.querySelector(".add-item").addEventListener('click',  addProduct);

    function addProduct(product) {
        product.preventDefault();
        openCart();
        document.querySelector('.js-cart-empty').classList.add('hide');
        var productCart = document.querySelector('.js-cart-product-template');
        document.querySelector('.js-cart-products').prepend(productCart);
        numberOfProducts++;
      }


           
    var cartOpen = false;
    document.querySelector('.js-toggle-cart').addEventListener('click',  toggleCart);
    document.getElementById('js-remove-product').addEventListener('click', removeProduct);
    
    function toggleCart(e) {
      e.preventDefault();
      if(!cartOpen) {
        closeCart();
        return;
      }
      openCart();
    }
    
    function openCart() {
      cartOpen = true;
      document.querySelector('body').classList.add('open');
    }
    
    function closeCart() {
      cartOpen = false;
      document.querySelector('body').removeClass('open');
    }
    
    
    function removeProduct(e) {
      e.preventDefault();
      numberOfProducts--;
      document.querySelector(this).closest('.js-cart-product').hide(250);
      if(numberOfProducts == 0) {
        document.querySelector('.js-cart-empty').removeClass('hide');
      }
    }
    }

