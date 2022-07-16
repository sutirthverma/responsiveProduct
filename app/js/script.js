let menu = document.querySelector('.menu');
let add = document.querySelector('.add');
let minus = document.querySelector('.less');
let remove = document.querySelector('.delete');
let quantity = document.querySelector('.quantity');
let productName = document.querySelector('.product-name');
let price = document.querySelector('.price');
let quant;

//Header Menu
let headerMenu = document.querySelector('.header-menu')
let headerClose = document.querySelector('.closeMenu')

//Cart Elements
let cart = document.querySelector('.cart');
let cartQuantity = document.querySelector('.cartQuantity');
let cartPreview = document.querySelector('.cartPreview')
let pCTitle = document.querySelector('.pCTitle')
let pCprice = document.querySelector('.pCprice')
let totalQuantity = document.querySelector('.totalQuantity')
let finalPrice = document.querySelector('.finalPrice')
let emptyCart = document.querySelector('.emptyCart')
let cartAllProductDetails = document.querySelector('.cartAllProductDetails')

let totalAmount;

//Product Images Preview
//Desktop
let mainImg = document.querySelector('.mainImg')
let thumbnail = document.querySelectorAll('.thumbnail')

thumbnail[0].addEventListener('click', () => {
    mainImg.setAttribute('src', 'images/image-product-1.jpg')
})

thumbnail[1].addEventListener('click', () => {
    mainImg.setAttribute('src', 'images/image-product-2.jpg')

})

thumbnail[2].addEventListener('click', () => {
    mainImg.setAttribute('src', 'images/image-product-3.jpg')

})

thumbnail[3].addEventListener('click', () => {
    mainImg.setAttribute('src', 'images/image-product-4.jpg')

})



//If else product quantity in cart
function checkQuantity() {
    if (quantity.innerHTML === '0') {
        cartAllProductDetails.style.display = 'none';
        emptyCart.style.display = 'flex';
    } else {
        emptyCart.style.display = 'none';
        cartAllProductDetails.style.display = 'block';
    }
}

checkQuantity();


//Cart 
cartPreview.style.display = 'none';
function cartIfElse(){
    if (cartPreview.classList.contains('hide')) {
        cartPreview.style.display = 'block';
        cartPreview.classList.replace('hide', 'cartAnimation');
    } else {
        cartPreview.classList.replace('cartAnimation', 'hide')
        setTimeout(()=>{
            cartPreview.style.display = 'none';
        },500)
    }
}

cartQuantity.addEventListener('click', () => {
    cartIfElse();
});

cart.addEventListener('click', () => {
    cartIfElse();
});

//Title of Product in Cart with limited no. of characters
pCTitle.innerHTML = productName.innerHTML.trim().substring(0, 20) + '...'; //Product Title for Cart
pCprice.innerHTML = price.innerHTML; //Product Price in Cart


//Function For displaying Cart 
function cartDisplay() {
    if (quant = Number(quantity.innerHTML) === 0) {
        cartQuantity.style.display = 'none'
    } else {
        cartQuantity.style.display = 'block'
        cartQuantity.innerHTML = quantity.innerHTML;
    }
}

cartDisplay();


totalQuantity.innerHTML = quantity.innerHTML;
finalPrice.innerHTML = `$` + Number(price.innerHTML.slice(1, price.innerHTML.length)) * Number(quantity.innerHTML); //Total Amount (PP multiplied by TQ)


//-> =
menu.addEventListener('click', () => {
    if (headerMenu.classList.contains('headerClose')) {
        headerMenu.classList.replace('headerClose', 'headerOpen')
    } else {
        headerMenu.classList.add('headerOpen')
    }
});

//-> X
headerClose.addEventListener('click', () => {
    headerMenu.classList.replace('headerOpen', 'headerClose')


});


//-> +
add.addEventListener('click', () => {
    quant = Number(quantity.innerHTML)
    quantity.innerHTML = quant + 1;

    cartQuantity.innerHTML = quantity.innerHTML;
    totalQuantity.innerHTML = quantity.innerHTML;

    cartDisplay();
    finalPrice.innerHTML = `$` + Number(price.innerHTML.slice(1, price.innerHTML.length)) * Number(quantity.innerHTML); //Total Amount (PP multiplied by TQ)
    checkQuantity();
});

//-> -
minus.addEventListener('click', () => {
    quant = Number(quantity.innerHTML)
    if (quant > 0) {
        quantity.innerHTML = quant - 1;
    }

    cartDisplay();
    checkQuantity();
    cartQuantity.innerHTML = quantity.innerHTML;
    totalQuantity.innerHTML = quantity.innerHTML;
    finalPrice.innerHTML = `$` + Number(price.innerHTML.slice(1, price.innerHTML.length)) * Number(quantity.innerHTML); //Total Amount (PP multiplied by TQ)

})

// Delete
remove.addEventListener('click', () => {
    if (Number(quantity.innerHTML) === 1) {
        cartAllProductDetails.style.display = 'none';
        cartQuantity.style.display = 'none';
        emptyCart.style.display = 'flex';
        quantity.innerHTML = '0'
    } else if (Number(quantity.innerHTML > 1)) {
        quant = Number(quantity.innerHTML) - 1;
        totalQuantity.innerHTML = quant;
        cartQuantity.innerHTML = quant;
        quantity.innerHTML = quant;
        finalPrice.innerHTML = `$` + Number(price.innerHTML.slice(1, price.innerHTML.length)) * Number(quantity.innerHTML); //Total Amount (PP multiplied by TQ)
    }
})