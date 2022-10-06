'use strict';

const cart = document.querySelector('.cartIconWrap');
const basket = document.querySelector('.basket');
const basketCounter = cart.querySelector('span');
const basketCost = basket.querySelector('.basketTotalValue');
const purchase = {};

cart.onclick = () => {
    basket.classList.toggle('hidden');
};

document.querySelector('.featuredItems').onclick = event => {
    if (event.target.classList.contains('addToCart')) {
        plusItem(event.target.closest('.featuredItem'));
    }
    return;
}

function plusItem(elem) {
    const elemId = +elem.dataset.id;
    const elemName = elem.dataset.name;
    const elemPrice = +elem.dataset.price;

    if (!(elemId in purchase)) {
        purchase[elemId] = {
            id: elemId,
            name: elemName,
            count: 0,
            price: elemPrice
        };
    }
    purchase[elemId].count++;
    basketCounter.textContent = getTotalPurchaseCount().toString();
    basketCost.textContent = getTotalPurchaseCost().toFixed(2);
    editHTML(elemId);
}

function getTotalPurchaseCount() {
    return Object.values(purchase).reduce((a, b) => a + b.count, 0);
}

function getTotalPurchaseCost() {
    return Object.values(purchase).reduce((a, b) => a + b.count * b.price, 0);
}

function editHTML(elemId) {
    const itemRow = basket.querySelector(`div[data-id='${elemId}']`);
    if (!itemRow) {
        basket.querySelector('.basketTotal').insertAdjacentHTML('beforebegin',
            `<div class="basketRow" data-id='${elemId}'>
                <div>${purchase[elemId].name}</div>
                <div class="itemCount">${purchase[elemId].count}</div>
                <div>$${purchase[elemId].price}</div>
                <div class="itemCost">
                    ${purchase[elemId].count * purchase[elemId].price}
                </div>
            </div>`);
    } else {
        itemRow.querySelector('.itemCount').textContent = purchase[elemId].count;
        itemRow.querySelector('.itemCost').textContent = purchase[elemId].count
            * purchase[elemId].price;
    }
}