// mac-memory site
const firstunified = document.getElementById('memory-8gb-button');
const secondUnified = document.getElementById('memory-16gb-button');
const bestPrice = document.getElementById('best-price');
const totalPrice = document.getElementById('total');
const promoInput = document.getElementById('promo-input');

bestPrice.addEventListener('click', function () {
    bestPrice.innerText = "1299";
    updateTotal()
})
// 
const memoryField = document.getElementById('memory-cost');

firstunified.addEventListener('click', function () {
    memoryField.innerText = "0";
    updateTotal()
})
secondUnified.addEventListener('click', function () {
    memoryField.innerText = "180";
    updateTotal()
})

// mac-storage site
const firstStorage = document.getElementById('first-storage');
const secondStorage = document.getElementById('second-storage');
const thirdStorage = document.getElementById('third-storage');

//extra storage cost
const storageField = document.getElementById('storage-cost');

firstStorage.addEventListener('click', function () {
    storageField.innerText = "0";
    updateTotal()
})
secondStorage.addEventListener('click', function () {
    storageField.innerText = "100";
    updateTotal()
})
thirdStorage.addEventListener('click', function () {
    storageField.innerText = "180";
    updateTotal()
})

// delivery-option

const firstDelivery = document.getElementById('first-delivery');
const secondDelivery = document.getElementById('second-delivery');

const deliveryCharge = document.getElementById('delivery-charge');

firstDelivery.addEventListener('click', function () {
    deliveryCharge.innerText = "0";
    updateTotal()
})
secondDelivery.addEventListener('click', function () {
    deliveryCharge.innerText = "20";
    updateTotal()
})

// updateTotal adding
function updateTotal() {
    const memoryPrice = parseFloat(memoryField.innerText);
    const storagePrice = parseFloat(storageField.innerText);
    const deliveryPrice = parseFloat(deliveryCharge.innerText);
    const mybestPrice = parseFloat(bestPrice.innerText);

    const grandTotal = memoryPrice + storagePrice + deliveryPrice + mybestPrice;
    total.innerText = grandTotal;
    document.getElementById('grandtotal-price').innerText = grandTotal;
}

// cupon code add
function promoCode() {
    let promoValue = promoInput.value;
    if (promoValue == 'stevekaku') {
        let discount = (parseInt(totalPrice.innerText) * 20) / 100;
        total.innerText = parseInt(totalPrice.innerText) - discount;
        promoInput.value = '';
    } else {
        alert('Please Enter Correct Promo Code');
    }
}