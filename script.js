const isNum = (str) => typeof str != "string" ? false : !isNaN(str) && !isNaN(parseFloat(str))

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
            if(userInput && isNum(userInput)) this.servicePrice += parseInt(userInput);
        } while (userInput);
    },

    ask(text, isText) {
        const promptResult = prompt(text);

        if(isText)
            return isNum(promptResult) ? this.ask(text, isText) : promptResult;
        else
            return isNum(promptResult) ? parseInt(promptResult) : this.ask(text, isText);
    },

    start() {
        this.title = this.ask('Как называется ваш проект?', true);
        this.screens = this.ask('Какие типы экранов нужно разработать?', true);
        this.screenPrice = this.ask('Сколько будет стоить данная работа', false);
        this.adaptive = this.ask('Нужен ли адаптив на сайте?', true).toLocaleLowerCase() === "да" ? true : false;

        this.asking();
        this.logger();
    },

    logger() {
        for (const key in this) console.log(key);
    }
}

appData.start();