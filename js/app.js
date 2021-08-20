// update Memory Cost 
function memoryCost(memory){
    const memoryCostField = document.getElementById('memory-cost-field');
    if(memory == '8gb'){
        memoryCostField.innerText = 0;
    }
    else if(memory == '16gb'){
        memoryCostField.innerText = 180;
    }
}

// Upddate Storage Cost 
function storageCost(memory){
    const storageCostField = document.getElementById('storage-cost-field');
    if(memory == '256gb'){
        storageCostField.innerText = 0;
    }
    else if(memory == '512gb'){
        storageCostField.innerText = 100;
    }
    if(memory == '1tb'){
        storageCostField.innerText = 180;
    }
}

// Update delivery Charge
function deliveryCharge(charging){
    const deliveryCostField = document.getElementById('delivery-charge-field');
    if(charging == 'free'){
        deliveryCostField.innerText = 0;
    }
    else if(charging == 'must'){
        deliveryCostField.innerText = 20;
    }
    
}

// Update Total price 



// Apply with promo code
function applyWithPromo(){
    const promoInputField = document.getElementById('promo-input');
    const promoInputText = promoInputField.value;
    if(promoInputText == 'stevekaku'){
        console.log('yes');
    }
    else{
        console.log('sorry')
    }
    promoInputField.value = '';
}


