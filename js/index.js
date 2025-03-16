const marka = document.getElementById('marka');
    const article = document.getElementById('article');
    const markaArr = Array.from(new Set(data.map(item => item.brand)));
    const modelArr = Array.from(new Set(data.map(item => item.model)));
    const cityArr = Array.from(new Set(data.map(item => item.city)));
    const valArr = Array.from(new Set(data.map(item => item.currency)));
    const ilArr = Array.from(new Set(data.map(item => item.year)));
    const banTypeArr = Array.from(new Set(data.map(item => item.banType)));
    
    function show() {
        articles.innerHTML = '';
        data.forEach(item => {
          articles.innerHTML += `
                <article class="flex flex-col w-[229px] h-[265.75px] rounded-[7px] overflow-hidden shadow-xl">
                    <div class="h-[180px] rounded-t-[8px] overflow-hidden relative">
                      <i onclick="addToBasket(${item.id})" class="fa-regular  fa-heart text-${item.status ? '[red]': 'white'} text-[24px] absolute right-[10px] top-[10px] cursor-pointer"></i>
                      <img class="h-[170.75px] w-[229px] bg-center bg-cover" src="${item.images[0]}" alt="avto" />
                    </div>
                    <div class="px-[10px] pt-[7px] h-[95px] flex flex-col leading-[18px]">
                      <h2 class="font-bold text-[18px] my-[2px]">${item.price} ${item.currency}</h2>
                      <h6 class="mb-[1px]">${item.brand} ${item.model}</h6>
                      <p>${item.year}, ${item.engine ? item.engine : ""}, ${item.odometer}${item.odometerUnit}</p>
                      <span class="text-[14px] text-[#8d94ad]">${item.city}, ${item.dates}</span>
                    </div>
                </article>
          `;
        });
      }
      
      show();

