const dropdowncontent = document.querySelector('.dropdowncontent')
const rot1 = document.querySelector('#rot1')
const markayaz = document.querySelector('#markayaz')
let status1 = false

function opn() {
    closeAllDropdowns(0)
    dropdowncontent.classList.toggle('open');
    status1 = !status1;
    const markaItems = dropdowncontent.querySelectorAll('#marka');
    markaItems.forEach(item => item.remove());
    if (status1) {
      markaArr.map(item => dropdowncontent.innerHTML += `
          <div id="marka" name="brand" onclick="handleSelect(this)" class="py-[9px] px-[23px] pl-[10px] hover:bg-[rgb(246,247,250)] ">
              <span class="text-[#212c3a]">${item}</span>
          </div>
      `);
      rot1.style.transform = 'rotate(180deg)';
      markayaz.innerText = 'Markanı yazın';
  } else {
      markaItems.forEach(item => item.remove());
      rot1.style.transform = 'rotate(0deg)';
      markayaz.innerText = 'Marka';
  }
}
  const dropdowncontent2 = document.querySelector('.dropdowncontent2');
  const rot2 = document.querySelector('#rot2');
  const sheheryaz = document.querySelector('#sheheryaz');
  let status2 = false;

  function opn2() {
      closeAllDropdowns(1)
      dropdowncontent2.classList.toggle('open2');
      status2 = !status2;
      const cityItems = dropdowncontent2.querySelectorAll('#city');
      cityItems.forEach(item => item.remove());
      if (status2) {
          cityArr.map(item => dropdowncontent2.innerHTML += `
              <div id="city" name="city" onclick="handleSelect(this)" class="py-[9px] px-[23px] pl-[10px] hover:bg-[rgb(246,247,250)]">
                  <span class="text-[#212c3a]">${item}</span>
              </div>
          `);
          rot2.style.transform = 'rotate(180deg)';
      } else {
          rot2.style.transform = 'rotate(0deg)';
      }
  }

  const dropdowncontent3 = document.querySelector('.dropdowncontent3');
  const rot3 = document.querySelector('#rot3');
  const modeliyaz = document.querySelector('#modeliyaz');
  let status3 = false;

  function opn3() {
      closeAllDropdowns(2)
      dropdowncontent3.classList.toggle('open3');
      status3 = !status3;
      const modelItems = dropdowncontent3.querySelectorAll('#model');
      modelItems.forEach(item => item.remove());

      if (status3) {
          modelArr.map(item => dropdowncontent3.innerHTML += `
              <div id="model" name="model" onclick="handleSelect(this)" class="py-[9px] px-[23px] pl-[10px] hover:bg-[rgb(246,247,250)]">
                  <span class="text-[#212c3a]">${item}</span>
              </div>
          `);
          rot3.style.transform = 'rotate(180deg)';
          modeliyaz.innerText = 'Modeli yazın';
      } else {
          rot3.style.transform = 'rotate(0deg)';
          modeliyaz.innerText = 'Model';
      }
  }

  const dropdowncontent4 = document.querySelector('.dropdowncontent4');
  const rot4 = document.querySelector('#rot4');
  const bannovuyaz = document.querySelector('#bannovuyaz');
  let status4 = false;

  function opn4() {
      closeAllDropdowns(3)
      dropdowncontent4.classList.toggle('open4');
      status4 = !status4;
      const banTypeItems = dropdowncontent4.querySelectorAll('#banType');
      banTypeItems.forEach(item => item.remove());

      if (status4) {
          banTypeArr.map(item => dropdowncontent4.innerHTML += `
              <div id="banType" name="banType" onclick="handleSelect(this)" class="py-[9px] px-[23px] pl-[10px] hover:bg-[rgb(246,247,250)]">
                  <span class="text-[#212c3a]">${item}</span>
              </div>
          `);
          rot4.style.transform = 'rotate(180deg)';
      } else {
          rot4.style.transform = 'rotate(0deg)';
      }
  }

  const dropdowncontent5 = document.querySelector('.dropdowncontent5');
  const rot5 = document.querySelector('#rot5');
  let status5 = false;

  function opn5() {
      closeAllDropdowns(4)
      dropdowncontent5.classList.toggle('open5');
      status5 = !status5;
      dropdowncontent5.innerHTML = '';
      if (status5) {
          const uniqueValArr5 = [...new Set(valArr)];
          uniqueValArr5.forEach(item => {
              dropdowncontent5.innerHTML += `
                  <div id="val" name="val" onclick="handleSelect(this)" class="py-[9px] px-[23px] pl-[10px] hover:bg-[rgb(246,247,250)]">
                      <span class="text-[#212c3a]">${item}</span>
                  </div>
              `;
          });
          rot5.style.transform = 'rotate(180deg)';
      } else {
          rot5.style.transform = 'rotate(0deg)';
      }
  }

  const dropdowncontent6 = document.querySelector('.dropdowncontent6');
  const rot6 = document.querySelector('#rot6');
  let status6 = false;

  function opn6() {
      closeAllDropdowns(5)
      dropdowncontent6.classList.toggle('open6');
      status6 = !status6;
      const ilItems = dropdowncontent6.querySelectorAll('#il');
      ilItems.forEach(item => item.remove());

      if (status6) {
          ilArr.map(item => dropdowncontent6.innerHTML += `
              <div id="il" name="year" onclick="handleSelect(this)" class="py-[9px] px-[23px] pl-[10px] hover:bg-[rgb(246,247,250)]">
                  <span class="text-[#212c3a]">${item}</span>
              </div>
          `);
          rot6.style.transform = 'rotate(180deg)';
      } else {
          rot6.style.transform = 'rotate(0deg)';
      }
  }

  const dropdowncontent7 = document.querySelector('.dropdowncontent7');
  const rot7 = document.querySelector('#rot7');
  let status7 = false;
  const sortedIlArr = ilArr.slice();

  function opn7() {
      closeAllDropdowns(6)
      dropdowncontent7.classList.toggle('open7');
      status7 = !status7;
      const maksItems = dropdowncontent7.querySelectorAll('#maks');
      maksItems.forEach(item => item.remove());
      
      if (status7) {
          const sortedIlArr = [...ilArr]; 
          sortedIlArr.sort((a, b) => b - a).map(item => dropdowncontent7.innerHTML += `
              <div id="maks" name="year" onclick="handleSelect(this)" class="py-[9px] px-[23px] pl-[10px] hover:bg-[rgb(246,247,250)]">
                  <span class="text-[#212c3a]">${item}</span>
              </div>
          `);
          rot7.style.transform = 'rotate(180deg)';
      } else {
          rot7.style.transform = 'rotate(0deg)';
      }
  }

  function closeAllDropdowns(x) {
      if ( x !== 0 && status1) {
          dropdowncontent.classList.remove('open');
          status1 = false;
          const markaItems = dropdowncontent.querySelectorAll('#marka');
          markaItems.forEach(item => item.remove());
          rot1.style.transform = 'rotate(0deg)';
          markayaz.innerText = 'Marka';
      }
      if ( x !== 1 && status2) {
          dropdowncontent2.classList.remove('open2');
          status2 = false;
          const cityItems = dropdowncontent2.querySelectorAll('#city');
          cityItems.forEach(item => item.remove());
          rot2.style.transform = 'rotate(0deg)';
      }
      if ( x !== 2 && status3) {
          dropdowncontent3.classList.remove('open3');
          status3 = false;
          const modelItems = dropdowncontent3.querySelectorAll('#model');
          modelItems.forEach(item => item.remove());
          rot3.style.transform = 'rotate(0deg)';
          modeliyaz.innerText = 'Model';
      }
      if ( x!== 3 && status4) {
          dropdowncontent4.classList.remove('open4');
          status4 = false;
          const banTypeItems = dropdowncontent4.querySelectorAll('#banType');
          banTypeItems.forEach(item => item.remove());
          rot4.style.transform = 'rotate(0deg)';
      }
      if ( x !== 4 && status5) {
          dropdowncontent5.classList.remove('open5');
          status5 = false;
          const valItems = dropdowncontent5.querySelectorAll('#val');
          valItems.forEach(item => item.remove());
          rot5.style.transform = 'rotate(0deg)';
      }
      if ( x !== 5 && status6) {
          dropdowncontent6.classList.remove('open6');
          status6 = false;
          const ilItems = dropdowncontent6.querySelectorAll('#il');
          ilItems.forEach(item => item.remove());
          rot6.style.transform = 'rotate(0deg)';
      }
      if ( x !== 6 && status7) {
          dropdowncontent7.classList.remove('open7');
          status7 = false;
          const maksItems = dropdowncontent7.querySelectorAll('#maks');
          maksItems.forEach(item => item.remove());
          rot7.style.transform = 'rotate(0deg)';
      }
  }

  function handleSelect(xana) {
      const arg = xana.querySelector('span').textContent;  
      const elem = xana.getAttribute('name');  
      data = zapaz.filter(item => item[elem] == arg);  
      show();
  }
  
  function reset(){
      closeAllDropdowns()
      data = zapaz;  
      show();
  }
