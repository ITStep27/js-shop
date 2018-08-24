var container = document.getElementById("app");
    
for (var i = 0; i < phones.length; i++) {
  var a = phones[i]; // ссылка на текущий эл-т массива
  var available = a.countProducts > 0 ? `В наличии: ${a.countProducts}` : 'Нет на складе';
  var availableImg = a.countProducts > 0 ? '' : 'class=half-vision';
  var rate = '';
  // for (var n = 1; n<=Math.floor(a.productRate); n++) rate +='<span class=star> <img src="assets/img/10.jpg"></span>';
  for (n = 1; n <=5; n++) {
    if (a.productRate < n) {
      if (n - a.productRate < 1 & n - a.productRate > 0) fileID = `0${(a.productRate*10)%10}`; else
    var fileID = '00';
    } else { fileID = '10'};
    rate += `<span class=star> <img src="assets/img/${fileID}.jpg"></span>`;
  }
  container.innerHTML += `
  <div class='product-item'>
  <div class=brand>${a.brandName}</div>
  <h4 class=product>${a.productName}</h4>
  <img ${availableImg} src="http://apeps.kiev.ua/images/phones/${a.id}.jpg">
  <h4 class=price><span ${availableImg}>${a.priceUAH} UAH</span></h4>

  <h4 class=count>${available}</h4>
  <div class=description>
  <h4>Характеристики:</h4>
  <ul>
    <li>ОС: ${a.operationSystem}</li>
    <li>Количество сим-карт: ${a.numSimCard}</li>
  </ul>
  <div> <!--description-->
  <h4 class=rate>${rate}</h4>


  <h4 class=views>Просмотров: ${a.countViews}</h4>
  </div>`;
}

