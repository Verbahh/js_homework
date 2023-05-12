const dataJSON = '[{"id":1,"title":"ELLERY X M\'O CAPSULE","description":"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.","image":"img/products-item-photo-1.png","count":"52.00"},{"id":2,"title":"ELLERY X M\'O CAPSULE","description":"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.","image":"img/products-item-photo-2.png","count":"52.00"},{"id":3,"title":"ELLERY X M\'O CAPSULE","description":"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.","image":"img/products-item-photo-3.png","count":"52.00"},{"id":4,"title":"ELLERY X M\'O CAPSULE","description":"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.","image":"img/products-item-photo-4.png","count":"52.00"},{"id":5,"title":"ELLERY X M\'O CAPSULE","description":"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.","image":"img/products-item-photo-5.png","count":"52.00"},{"id":6,"title":"ELLERY X M\'O CAPSULE","description":"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.","image":"img/products-item-photo-6.png","count":"52.00"}]'
const listProductsEl = document.querySelector('.products-list');

const cardElements = [];

const footerCart = document.querySelector('.footer-cart');
const footerCartElements = document.querySelector('.footer-cart-elements')

const data = JSON.parse(dataJSON);

function addElementClass(element, className) {
    if (typeof className === 'object') {
        className.forEach(name => {
            element.classList.add(name);
        })
    } else {
        element.classList.add(className);
    }
}

function getById(id, indexOut = false) {
    let result = false;
    let index = 0;
    cardElements.forEach((el, i) => {
        if (el.element.id === id) {
            result = el;
            index = i;
            return false;
        }
    })
    if (indexOut) return index;
    return result;
}

function addElementToCart(element) {
    const getEl = getById(element.id);
    if (getEl) {
        getEl.quantity += 1;
        const cartElement = document.getElementById('element-' + element.id);
        const bPropertyEl = cartElement.querySelector('.cart-element-body-property-quantity b');
        bPropertyEl.innerText = getEl.quantity;
    } else {
        const baseDivEl = document.createElement('div');
        addElementClass(baseDivEl, 'cart-element');
        baseDivEl.setAttribute('id', 'element-' + element.id);

        const divImage = document.createElement('div');
        addElementClass(divImage, 'cart-element-image');
        divImage.style.backgroundImage = `url('img/products-item-photo-${element.id}.png')`;
        baseDivEl.appendChild(divImage);

        const divBody = document.createElement('div');
        addElementClass(divBody, 'cart-element-body');
        baseDivEl.appendChild(divBody);

        const divTitle = document.createElement('div');
        addElementClass(divTitle, 'cart-element-body-title');
        divBody.appendChild(divTitle);
        divTitle.innerHTML = `<b>${element.title}</b>`;

        const imageButtonEl = document.createElement('img');
        imageButtonEl.setAttribute('src', 'img/close.svg');
        divTitle.appendChild(imageButtonEl);
        imageButtonEl.addEventListener('click', () => {
            const cartElement = document.getElementById('element-' + element.id);
            cartElement.remove();
            const elIndex = getById(element.id, true);
            cardElements.splice(elIndex, 1);
            console.log(cardElements);
            if (cardElements.length === 0) footerCart.style.display = 'none';
        })

        const divCount = document.createElement('div');
        addElementClass(divCount, ['cart-element-body-property', 'cart-element-body-property-count']);
        divBody.appendChild(divCount);
        divCount.innerHTML = `Price: <b>$${element.count}</b>`;

        const divProperty1 = document.createElement('div');
        addElementClass(divProperty1, 'cart-element-body-property');
        divBody.appendChild(divProperty1);
        divProperty1.innerText = 'Color: Red';

        const divProperty2 = document.createElement('div');
        addElementClass(divProperty2, 'cart-element-body-property');
        divBody.appendChild(divProperty2);
        divProperty2.innerText = 'Size: Xl';

        const divQuantity = document.createElement('div');
        addElementClass(divQuantity, ['cart-element-body-property', 'cart-element-body-property-quantity']);
        divBody.appendChild(divQuantity);
        divQuantity.innerHTML = `Quantity: <b>1</b>`;
        cardElements.push(
            {
                element: element,
                quantity: 1
            }
        );
        footerCart.style.display = 'flex';
        footerCartElements.appendChild(baseDivEl);
    }


}

data.forEach(element => {
    const liEl = document.createElement('li');
    addElementClass(liEl, 'products-item');
    const div1El = document.createElement('div');
    addElementClass(div1El, 'brand-products-item');
    liEl.appendChild(div1El);


    const divImageEl = document.createElement('div');
    addElementClass(divImageEl, 'products-item-photo-wrp');
    addElementClass(divImageEl, 'products-item-photo-wrp-' + element.id);
    div1El.appendChild(divImageEl);

    const divInImageEl = document.createElement('div');
    addElementClass(divInImageEl, 'products-item-photo-wrp-hover');
    divImageEl.appendChild(divInImageEl);

    const buttonCart = document.createElement('button');
    addElementClass(buttonCart, 'products-btn-add-cart');
    divInImageEl.appendChild(buttonCart);


    const imageEl = document.createElement('img');
    imageEl.setAttribute('src', 'img/add-to-cart.svg');
    buttonCart.appendChild(imageEl);

    buttonCart.innerText = 'Add to Cart';
    buttonCart.addEventListener('click', (event) => {
        addElementToCart(element);
    })


    const divProductEl = document.createElement('div');
    addElementClass(divProductEl, 'products-item-txt-wrp');
    div1El.appendChild(divProductEl);

    const h3El = document.createElement('h3');
    addElementClass(h3El, 'products-item-title');
    h3El.innerText = element.title;
    divProductEl.appendChild(h3El);

    const p1El = document.createElement('p');
    addElementClass(p1El, 'products-item-txt');
    p1El.innerText = element.description;
    divProductEl.appendChild(p1El);

    const p2El = document.createElement('p');
    addElementClass(p2El, 'products-item-prace');
    p2El.innerText = element.count;
    divProductEl.appendChild(p2El);

    listProductsEl.appendChild(liEl);
});

