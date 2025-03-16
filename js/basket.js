function meladai(){
    document.getElementById('chosencars').classList.toggle('openc')
    closeAllDropdowns();
}
let basket = []

const likedDiv = document.getElementById('likedDiv')
function showBasket() {
    likedDiv.innerHTML = '';
    let totalCount = 0; 
    let totalPrice = 0; 
    let discountedPrice = 0; 
    let totalDiscount = 0; 

    basket.map((item, i) => {
        let carPrice = item.count * item.price; 
        totalCount += item.count; 
        totalPrice += carPrice; 
        discountedPrice += discount(item, carPrice); 
    });

    totalDiscount = totalPrice - discountedPrice; 

    document.getElementById('mehsulsayi').innerHTML = `Məhsul sayı: ${totalCount}`;
    document.getElementById('umimiqiymet').innerHTML = `Ümumi qiymət: ${totalPrice} ${basket[0]?.currency || ''}`;
    document.getElementById('endirimliqiymet').innerHTML = `Ümumi endirimli qiymət: ${discountedPrice} ${basket[0]?.currency || ''}`;
    document.getElementById('endirim').innerHTML = `Endirim: ${totalDiscount} ${basket[0]?.currency || ''}`;

    basket.map((item, i) => {
        let carPrice = item.count * item.price; 

        likedDiv.innerHTML += `
        <article class="w-[95%] h-[140px] text-center m-4 overflow-hidden shadow-2xl border-[rgb(202,16,22)] flex border-[1px] flex-row items-center rounded-[8px]" id="x${i}">
            <div class="w-[40%]  h-[100%] overflow-hidden">
                <img class="h-[100%] w-[100%] object-cover" src="${item.images[0]}" alt="avto" />
            </div>
            <div class="w-[60%] bg-white p-2 h-[140px]">
                <h2 class="font-bold">${item.price} ${item.currency}</h2>
                <h6>${item.brand} ${item.model}</h6>
                <p>${item.year}, ${item.engine}, ${item.odometer}${item.odometerUnit}</p>
                <span>${item.city}, ${item.dates}</span>
                <div id="carprice" class="bg-[rgb(202,16,22)] text-white">${carPrice} ${item.currency}</div>  
            </div>
            <div class="h-[30%] shadow-2xl flex flex-col justify-center gap-1">
                <button onclick="basketCount(${item.id}, -1)" class="border-[1px] text-[rgb(202,16,22)] cursor-pointer border-[#dfe3e7]  rounded-[5px] mx-[5px]">-</button>
                <span class="text-[rgb(202,16,22)]" id="num">${item.count}</span>
                <button onclick="basketCount(${item.id}, 1)" class="border-[1px] border-[#dfe3e7] w-[40px] h-[40px] cursor-pointer  text-[rgb(202,16,22)] rounded-[5px] mx-[5px]">+</button>
            </div>
            <i onclick="basketdenSil(${item.id})" class="fa-solid fa-trash cursor-pointer text-2xl text-[rgb(202,16,22)] mr-2"></i>
        </article>
        `;
    });
}

function basketdenSil(id) {
    basket = basket.filter(item => item.id !== id); 
    showBasket(); 
}
    showBasket()
    
    function discount(item, carPrice){
        if (item.count >= 10){
        return  carPrice = 0.9*carPrice
    }
    return carPrice
}


function addToBasket(id) {
    const element = data.find(item => item.id == id)
    element.status = true
    const yoxla = basket.find(elem => elem.id == id)
    if (yoxla == undefined) {
        element.count = 1
        basket.push(element)
    } else {
        yoxla.count++
    }
    show()
    showBasket()
}

function basketdenSil(id) {
    basket = basket.filter(item => item.id != id);
    data.find(item => item.id == id).status = false

    show()
    showBasket()
}

function basketCount(id, x) {
    const elem = basket.find(item => item.id == id)

    if (elem.count + x > 0) elem.count += x
    else basketdenSil(id);

    showBasket()
}

i