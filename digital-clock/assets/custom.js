let hoursElement = document.getElementById('hours')
let munitesElement = document.getElementById('munites')
let secendsElement = document.getElementById('secends')
let ampmsElement = document.getElementById('ampms')


// console.log(munitesElement);

function ourdiDigitalClock() {
    let now = new Date();
    console.log(now);

    let hourNumber = (now.getHours()) > 12 ? ((now.getHours()) - 12) : (now.getHours());
    let muniteNumber = now.getMinutes();
    let secendNumber = now.getSeconds();

    let ampmString = hourNumber > 12 ? 'PM': 'AM' ;

    hoursElement.innerHTML = hourNumber < 10 ? '0' + hourNumber : hourNumber;
    munitesElement.innerHTML = muniteNumber < 10 ? '0' + muniteNumber : muniteNumber;
    secendsElement.innerHTML = secendNumber < 10 ? '0' + secendNumber : secendNumber;
    ampmsElement.innerHTML = ampmString;
}


setInterval(ourdiDigitalClock, 1000);








