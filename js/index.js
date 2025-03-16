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
                <article onclick="showDetail(${item.id})" class="flex flex-col w-[229px] h-[265.75px] rounded-[7px] overflow-hidden shadow-xl">
                    <div class="h-[180px] rounded-t-[8px] overflow-hidden relative">
                      <i onclick="event.stopPropagation(); addToBasket(${item.id})" class="fa-regular  fa-heart text-${item.status ? '[red]': 'white'} text-[24px] absolute right-[10px] top-[10px] cursor-pointer"></i>
                      <img class="h-[170.75px] w-[229px] bg-center bg-cover" src="${item.images[0]}" alt="avto" />
                    </div>
                    <div  class="px-[10px] pt-[7px] h-[95px] flex flex-col leading-[18px]">
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

      
      function showDetail(id) {
        const filter = document.getElementById('filter')

        const item = data.find(item => id == item.id);
        filter.innerHTML = ""
        document.querySelector('main').innerHTML = `
            <div class="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <a rel="noopener noreferrer" href="#" class="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
            <img src="${item.images}" alt="" class="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500">
            <div class="p-6 space-y-2 lg:col-span-5">
              <h3 class="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">${item.brand}, ${item.model}</h3>
              <span class="text-xs dark:text-gray-600">${item.year}, ${item.dates}</span>
              <p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
            </div>
          </a>
      
          </div>
        
        `
      
      }
      