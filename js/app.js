const bestTotalField = document.getElementById('best-total');
const memoryTotalField = document.getElementById('memory-total');
const storageTotalField = document.getElementById('storage-total');
const deliveryTotalField = document.getElementById('delivery-total');
const totalPriceField = document.getElementById('total-price');
const finalTotalPriceField = document.getElementById('final-total-price');
const promoInput = document.getElementById('promo-input');

// update Memory Cost 
function memoryCost(memory){
    if(memory == '8gb'){
        memoryTotalField.innerText = 0;
    }
    else if(memory == '16gb'){
        memoryTotalField.innerText = 180;
    }
    totalPrice();
}

// Upddate Storage Cost 
function storageCost(memory){
    if(memory == '256gb'){
        storageTotalField.innerText = 0;
    }
    else if(memory == '512gb'){
        storageTotalField.innerText = 100;
    }
    else if(memory == '1tb'){
        storageTotalField.innerText = 180;
    }
    totalPrice();
}

// Update delivery Charge
function deliveryCharge(charging){
    if(charging == 'free'){
        deliveryTotalField.innerText = 0;
    }
    else if(charging == 'must'){
        deliveryTotalField.innerText = 20;
    }
    totalPrice();
}

// Update Total price 
function totalPrice(){
    const bestTotalAmount = parseFloat(bestTotalField.innerText);
    const memoryTotalAmount = parseFloat(memoryTotalField.innerText);
    const storageTotalAmount = parseFloat(storageTotalField.innerText);
    const deliveryTotalAmount = parseFloat(deliveryTotalField.innerText);
    // update total price in html file
    const totalAmount = bestTotalAmount + memoryTotalAmount + storageTotalAmount + deliveryTotalAmount;
    totalPriceField.innerText = totalAmount;
    updateFinalTotal(totalAmount);
   

}
    // Apply with promo code
function updateFinalTotal(totalAmount){
    finalTotalPriceField.innerText = totalAmount;
}
promoInput.addEventListener('keyup', function (event) {
    const promoButton = document.getElementById('promo-button');
    if (event.target.value == 'stevekaku') {
        promoButton.removeAttribute('disabled');
    }
    else {
        promoButton.setAttribute('disabled', true);
    }
});
// promo code confirmation via Change
promoInput.addEventListener('change', function (event) {
    const promoButton = document.getElementById('promo-button');
    if (event.target.value == 'stevekaku') {
        promoButton.removeAttribute('disabled');
    }
    else {
        promoButton.setAttribute('disabled', true);
    }
});

function promoDiscount() {
    const totalAmount = parseFloat(totalPriceField.innerText);
    const promoDiscount = totalAmount * 20 / 100;
    const totalWithPromoDiscount = totalAmount - promoDiscount;
    finalTotalPriceField.innerText = totalWithPromoDiscount;
    promoInput.value = '';
}
    








