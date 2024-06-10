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
        image: '1.PNG',
        price: 1220
    },
    {
        id: 2,
        name: 'منتج 2',
        image: '2.PNG',
        price: 1200
    },
    {
        id: 3,
        name: 'منتج 3',
        image: '3.PNG',
        price: 2200
    },
    {
        id: 4,
        name: 'منتج 4',
        image: '4.PNG',
        price: 123
    },
    {
        id: 5,
        name: 'منتج 5',
        image: '5.jpeg',
        price: 'السعر '
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
            <div class="price">${value.price.toLocaleString()}</div>
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
                <div>${value.price.toLocaleString()}</div>
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
