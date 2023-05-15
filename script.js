let title = 'тяги';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 228;
let rollback = 69;
let fullPrice = 1000000;
let adaptive = false;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log(`Стоимость верстки экранов ${screenPrice} гривен`);
console.log(`Стоимость разработки сайтов ${fullPrice} гривен`);
console.log(screens.toLocaleLowerCase().split(', '));

console.log(fullPrice * (rollback / 100));