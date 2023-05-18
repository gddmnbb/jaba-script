const title = document.getElementsByTagName('h1')[0];

const buttons = document.getElementsByClassName('handler_btn');
const count = buttons[0];
const reset = buttons[1];

const add = document.querySelector('button.screen-btn');

const otherItemPercent = document.querySelectorAll('.other-items.percent');
const otherItemNumber = document.querySelectorAll('.other-items.number');

const rangeInput = document.querySelector('.rollback').childNodes[1].childNodes[1];
const rangeValue = document.querySelector('.rollback').childNodes[1].childNodes[3];

const totalInput = document.getElementsByClassName('total-input');

let screens = document.querySelectorAll('.screen');

console.log(title);
console.log(count);
console.log(reset);
console.log(add);
console.log(otherItemPercent, otherItemNumber);
console.log(rangeInput, rangeValue);
console.log(...totalInput);
console.log(screens);

const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    rollback: 69,
    adaptive: false,
    servicePrice: 0,

    getAllServicePrices() {
        return this.servicePrice;
    },
    // getAllServicePrices: this.servicePrice,
    getFullPrice() {
        return this.screenPrice + this.getAllServicePrices();
    },
    getServicePercentPrices() {
        return parseInt(this.fullPrice - this.fullPrice * (this.rollback / 100));
    },

    getTitle: () => this.title.trim().charAt(0).toUpperCase() + this.title.trim().slice(1),

    getRollbackMessage: () => {
        let sale;
        if(this.fullPrice >= 30000) sale = 10;
        else if(30000 > this.fullPrice >= 15000) sale = 5;
        else if(15000 > this.fullPrice) sale = 0;
        else if(this.fullPrice < 0) sale = -1;

        if(sale === -1)
            return 'дурак что ле';
        else if(sale === 0)
            return 'Скидка не предусмотрена';
        else
            return `Даем скидку ${sale}%`;
    },

    asking() {
        let userInput;
        do {
            userInput = prompt('Сколько это будет стоить?');
            if(userInput && !isNaN(userInput)) this.servicePrice += parseInt(userInput);
        } while (userInput);
    },

    start() {
        this.title = prompt('Как называется ваш проект?');
        this.screens = prompt('Какие типы экранов нужно разработать?');
        this.screenPrice = parseInt(prompt('Сколько будет стоить данная работа'));
        this.adaptive = prompt('Нужен ли адаптив на сайте?').toLocaleLowerCase() === "да" ? true : false;

        this.asking();
        this.logger();
    },

    logger() {
        for (const key in this)
            console.log(key);
    }
}

// appData.start();