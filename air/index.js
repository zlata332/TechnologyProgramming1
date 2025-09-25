
const title = document.getElementById('title');
const nameInput = document.getElementById('name');
const hello = document.getElementById('hello');
const btn = document.getElementById('btn');
const status = document.getElementById('status');
const countries = document.getElementById('countries');
const count = document.getElementById('count');


function getCountryName(countryValue) {
    switch (countryValue) {
        case "Peru":
            return "Перу";
        case "Finland":
            return "Финляндия";
        case "France":
            return "Франция";
        case "Japan":
            return "Япония";
        case "Italy":
            return "Италия";
        default:
            return countryValue;
    }
}


function getTicketWord(n) {
    if (n % 10 === 1 && n % 100 !== 11) return "билет";
    if ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100)) return "билета";
    return "билетов";
}


nameInput.addEventListener('input', function () {
    hello.textContent = "Привет, " + nameInput.value + "!";
});


btn.addEventListener('click', function () {
    const name = nameInput.value.trim();
    const country = countries.value;
    const ticketCount = parseInt(count.value);

    if (!name || isNaN(ticketCount) || ticketCount <= 0) {
        status.textContent = 'Заполните все поля!';
        status.style.color = 'red';
        return;
    }

    const countryName = getCountryName(country);
    const ticketWord = getTicketWord(ticketCount);

    status.textContent = `${name}, вы купили ${ticketCount} ${ticketWord} в ${countryName}.`;
    status.style.color = 'darkgreen';
});


btn.addEventListener("mouseover", function () {
    status.textContent = 'Вы готовы купить билет?';
    status.style.color = 'hwb(80 9% 43%)';
});


btn.addEventListener('dblclick', function () {
    status.textContent = 'Вы купили VIP-билет';
    status.style.color = '#BA55D3';
});
