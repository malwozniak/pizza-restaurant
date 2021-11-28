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
  


           
    var cartOpen = false;
    document.querySelector('.toggle-cart').addEventListener('click',  toggleCart);
    document.getElementById('remove-product').addEventListener('click', removeProduct);
    
    function toggleCart(newElement) {
      newElement.preventDefault();
      if(cartOpen == true) {
        closeCart();
        return;
      }
      openCart();
    }
    
    function openCart() {
      cartOpen = true;
     var el=  document.querySelector('body').classList.add('open');
      console.log(el)
    }
    
    function closeCart() {
      cartOpen = false;
     var el= document.querySelector('body').classList.remove('open');
      console.log(el)
    }
   
    function removeProduct(e) {
      e.preventDefault();
      numberOfProducts--;
      document.querySelector(this).closest('.cart-product').style.display = 'none';;
      if(numberOfProducts == 0) {
        document.querySelector('.cart-empty').remove('hide');
      }
    }
  
    var numberOfProducts = 0;
    document.querySelector(".add-item").addEventListener('click',  addProduct);

    function addProduct(e) {
        e.preventDefault();
        openCart();
    document.querySelector('.cart-empty').classList.add('hide');
        var productCart = document.querySelector(".item_title").innerHTML;
        
        document.querySelector('.cart-products').appendChild(document.createTextNode(productCart));
        numberOfProducts++;
      }
    }

