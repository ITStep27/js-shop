var container = document.getElementById("app");
    
for (var i = 0; i < phones.length; i++) {
  var a = phones[i]; // ссылка на текущий эл-т массива
  var available = a.countProducts > 0 ? `В наличии: ${a.countProducts}` : 'Нет на складе';
  var availableImg = a.countProducts > 0 ? '' : 'class=half-vision';
  var availableClass = a.countProducts > 0 ? '' : ' red';
  // var rate = '';
  // for (n = 1; n <=5; n++) {
  //   if (a.productRate < n) {
  //     if (n - a.productRate < 1 & n - a.productRate > 0) fileID = `0${(a.productRate*10)%10}`; else
  //   var fileID = '00';
  //   } else { fileID = '10'};
  //   rate += `<span class=star> <img src="assets/img/${fileID}.jpg"></span>`;
  // }
  var rateString = starRateWrite(a.productRate,"assets/img");
  container.innerHTML += `
  <div class='product-item'>
  <div class=brand>${a.brandName}</div>
  <h4 class=product>${a.productName}</h4>
  <img ${availableImg} src="http://apeps.kiev.ua/images/phones/${a.id}.jpg">
  <h4 class=price><span ${availableImg}>${a.priceUAH} UAH</span></h4>

  <h4 class="count${availableClass}">${available}</h4>
  <h4>Характеристики:</h4>
  <div class=description>
  <ul>
    <li>ОС: ${a.operationSystem}</li>
    <li>Количество сим-карт: ${a.numSimCard}</li>
  </ul>
  </div> <!--description-->
  <h4 class=rate>${rateString}</h4>


  <h4 class=views>Просмотров: <span>${a.countViews}</span></h4>
  <h4 class=buy><button type=submit>Купить</button></h4>
  </div>`;
}

