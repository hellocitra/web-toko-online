const navbarNav = document.querySelector('.navbar-nav_citra');
const shopCart = document.querySelector(".shopping-cart");
const cariForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
const hamburger = document.querySelector('#hamburger-menu_citra');
const cart = document.querySelector(".cart_citra");
const searchButton = document.querySelector('#search_citra');

// toggle hamburger menu
document.querySelector('#hamburger-menu_citra').onclick = (e) => {
    navbarNav.classList.toggle('active')
    e.preventDefault();
};

// Toggle class active search
document.querySelector('#search_citra').onclick = (e) => {
    cariForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
}

// klik diluar elemen search
document.addEventListener('click', function(e){
    if(!searchButton.contains(e.target) && !cariForm.contains(e.target)){
        cariForm.classList.remove('active');
    }
});

// klik diluar sidebar untuk menghilangkan nav dan shopping cart
document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }

    if(!cart.contains(e.target) && !shopCart.contains(e.target)){
        shopCart.classList.remove('active');
    }
});

// klik shopping cart
document.querySelector(".cart_citra").onclick = (e) => {
    shopCart.classList.toggle('active');
    e.preventDefault();
}