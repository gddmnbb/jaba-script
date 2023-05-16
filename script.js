let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?');
let screenPrice = parseInt(prompt('Сколько будет стоить данная работа'));
let rollback = 69;
let adaptive = prompt('Нужен ли адаптив на сайте?').toLocaleLowerCase() === "да" ? true : false;

// Serivce
let [service1, serivcePrice1] = [prompt('Какой дополнительный тип услуги нужен?'), parseInt(prompt('Сколько это будет стоить?'))];
let [service2, serivcePrice2] = [prompt('Какой дополнительный тип услуги нужен?'), parseInt(prompt('Сколько это будет стоить?'))];

const getAllServicePrices = () => serivcePrice1+serivcePrice2;
const getFullPrice = () => screenPrice + getAllServicePrices();
const getServicePercentPrices = () => parseInt(getFullPrice() - getFullPrice() * (rollback / 100));

let allServicePrices = getAllServicePrices();
let fullPrice = getFullPrice();
let servicePercentPrice = getServicePercentPrices();

const getTitle = () => title.trim().charAt(0).toUpperCase() + title.trim.slice(1);

const getRollbackMessage = () => {
    let sale;
    if(fullPrice >= 30000) sale = 10;
    else if(30000 > fullPrice >= 15000) sale = 5;
    else if(15000 > fullPrice) sale = 0;
    else if(fullPrice < 0) sale = -1;

    if(sale === -1)
        return 'дурак что ле';
    else if(sale === 0)
        return 'Скидка не предусмотрена';
    else
        return `Даем скидку ${sale}%`;
}

// Log zone
// console.log(show);
console.log(screens.split(','));
console.log(getRollbackMessage());
console.log(getServicePercentPrices());