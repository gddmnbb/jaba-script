let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?');
let screenPrice = parseInt(prompt('Сколько будет стоить данная работа'));
let rollback = 69;
let adaptive = prompt('Нужен ли адаптив на сайте?').toLocaleLowerCase() === "да" ? true : false;

// Serivce
let [service1, serivcePrice1] = [prompt('Какой дополнительный тип услуги нужен?'), parseInt(prompt('Сколько это будет стоить?'))];
let [service2, serivcePrice2] = [prompt('Какой дополнительный тип услуги нужен?'), parseInt(prompt('Сколько это будет стоить?'))];

let fullPrice = screenPrice+serivcePrice1+serivcePrice2;
let servicePercentPrice = parseInt(fullPrice - fullPrice * (rollback / 100))

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log(`Стоимость верстки экранов ${screenPrice} гривен`);
console.log(`Стоимость разработки сайтов ${fullPrice} гривен`);
console.log(screens.toLocaleLowerCase().split(', '));

console.log(servicePercentPrice);

let sale;
if(fullPrice >= 30000) {
    sale = 10;
} else if(30000 > fullPrice >= 15000) {
    sale = 5;
} else if(15000 > fullPrice) {
    sale = 0;
} else if(fullPrice < 0) {
    sale = -1;
}

if(sale === -1) {
    console.log('дурак что ле');
} else if(sale === 0) {
    console.log('Скидка не предусмотрена');
} else {
    console.log(`Даем скидку ${sale}%`);

}