const dataJSON = '[{"id":1,"title":"ELLERY X M\'O CAPSULE","description":"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.","image":"img/products-item-photo-1.png","count":"52.00"},{"id":2,"title":"ELLERY X M\'O CAPSULE","description":"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.","image":"img/products-item-photo-2.png","count":"52.00"},{"id":3,"title":"ELLERY X M\'O CAPSULE","description":"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.","image":"img/products-item-photo-3.png","count":"52.00"},{"id":4,"title":"ELLERY X M\'O CAPSULE","description":"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.","image":"img/products-item-photo-4.png","count":"52.00"},{"id":5,"title":"ELLERY X M\'O CAPSULE","description":"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.","image":"img/products-item-photo-5.png","count":"52.00"},{"id":6,"title":"ELLERY X M\'O CAPSULE","description":"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.","image":"img/products-item-photo-6.png","count":"52.00"}]'
const listProductsEl = document.querySelector('.products-list');

const data = JSON.parse(dataJSON);

data.forEach(element => {
    const liEl = document.createElement('li');
    liEl.classList.add('products-item');
    const div1El = document.createElement('div');
    div1El.classList.add('brand-products-item');
    liEl.appendChild(div1El);

    const divImageEl = document.createElement('div');
    divImageEl.classList.add('products-item-photo-wrp');
    div1El.appendChild(divImageEl);

    const aImageEl = document.createElement('a');
    aImageEl.classList.add('products-item-link');
    divImageEl.appendChild(aImageEl);

    const imageEl = document.createElement('img');
    imageEl.classList.add('products-item-photo');
    if (element.id === 2) imageEl.classList.add('products-item-photo__2');
    imageEl.setAttribute('src', element.image);
    aImageEl.appendChild(imageEl);


    const divProductEl = document.createElement('div');
    divProductEl.classList.add('products-item-txt-wrp');
    div1El.appendChild(divProductEl);

    const h3El = document.createElement('h3');
    h3El.classList.add('products-item-title');
    h3El.innerText = element.title;
    divProductEl.appendChild(h3El);

    const p1El = document.createElement('p');
    p1El.classList.add('products-item-txt');
    p1El.innerText = element.description;
    divProductEl.appendChild(p1El);

    const p2El = document.createElement('p');
    p2El.classList.add('products-item-prace');
    p2El.innerText = element.count;
    divProductEl.appendChild(p2El);

    listProductsEl.appendChild(liEl);
});