/*=============== SHOW MENU ===============*/
// const showMenu = (toggleId, navId) =>{
//    const toggle = document.getElementById(toggleId),
//          nav = document.getElementById(navId)

//    toggle.addEventListener('click', () =>{
//        // Add show-menu class to nav menu
//        nav.classList.toggle('show-menu')

//        // Add show-icon to show and hide the menu icon
//        toggle.classList.toggle('show-icon')
//    })
// }

// showMenu('nav-toggle','nav-menu')


/*===shopping cart===*/


let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let section = document.querySelector('section');
let total = document.querySelector('.total');
let tax = document.querySelector('.tax');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    section.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    section.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'منتج 1',
        image: '1.png',
        cash : 'ريال',
        price: 1220
    },
    {
        id: 2,
        name: 'منتج 2',
        image: '2.png',
        cash : 'ريال',
        price: 1200
    },
    {
        id: 3,
        name: 'منتج 3',
        image: '3.png',
        cash : 'ريال',
        price: 2200
    },
    {
        id: 4,
        name: 'منتج 4',
        image: '4.png',
        cash : 'ريال',
        price: 123
    },
    {
        id: 5,
        name: 'منتج 5',
        image: '5.jpeg',
        cash : 'ريال',
        price:  439
    },
    {
        id: 6,
        name: 'منتج 6',
        image: '6.png',
        cash : 'ريال',
        price: 320
    },
    {
        id: 7,
        name: 'منتج 7',
        image: '7.png',
        cash : 'ريال',
        price: 120
    },
    {
        id: 8,
        name: 'منتج 8',
        image: '6.png',
        cash : 'ريال',
        price: 32
    },
    {
        id: 9,
        name: 'منتج 9',
        image: '7.png',
        cash : 'ريال',
        price: 3210
    },
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="svg/${value.image}">
            <div class="title">${value.name}</div>
            
            <div class="price">${value.price.toLocaleString()}${value.cash}</div>
            
            <button onclick="addToCard(${key})">اضافه الي العربه</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="svg/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}<div>${value.cash}</div></div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    // subtotal.innerText = totalPrice.toLocaleString();
    tax.innerText = (totalPrice * 0.15).toLocaleString(); // Assuming 15% tax
    total.innerText = (totalPrice + parseFloat(tax.innerText)).toLocaleString();


    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}


