function starRate (k, path) {
    // вспомагательная функция для starRateWrite
    // отрисовка 1-й звезды;
    // k - число от 0 до 1
        k *= 20;
        right = k;
        left = 20 - k;
        s=`
        <div style='width:${right}px'>
            <span> <img src="${path}/left.png"> </span>
        </div>
        <div style='width:${left}px'>
            <span style='left:-${right}px'> <img src="${path}/right.png"> </span>
        </div>
        `;
        return s;
    }
function starRateWrite (rate, path) {
// отображает рейтинг в виде частично закрашенных звезд по 5-бальной шкале
// rate - рейтинг (число от 0 до 5 с 1 знаком после запятой)
// path - путь к изображениям left.png и right.png
// возвращает html-код
// необходимо подключение модуля star-rate.css
var s = '';
for (var i = 1; i <= 5; i++) {
    var x = 0;
    if (i < rate) x = 1;
    if (i == rate) x = 1;
    if (i < rate & i == Math.floor(rate)) x = Math.floor((rate - i) * 10) / 10;
    if (i >Math.ceil(rate)) x = 0;
    s += (starRate(x, path));
}
s = `<div class="stars-rate">${s}</div>`;
return s;
}