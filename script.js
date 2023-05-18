const books = document.querySelector('.books');

const sortedBooks = Array.from(books.children).sort((a, b) => {
    const aIndex = parseInt(a.children[0].textContent.trim().slice(6,7));
    const bIndex = parseInt(b.children[0].textContent.trim().slice(6,7));
    return aIndex-bIndex;
});

Array.from(books.children).forEach(el => books.removeChild(el));
sortedBooks.forEach(el => books.appendChild(el));

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

books.children[2].querySelector('a').textContent = 'Книга 3. this и Прототипы Объектов';

document.querySelector('.adv').remove();

// Хз где ваши эти индексы искать
function sortChapters(book) {
    const chapters = books.children[book-1].querySelector('ul');
    const chapterChidlrens = Array.from(chapters.children)
    let sortedChapters = chapterChidlrens.slice(0, 2);
    const a = chapterChidlrens.filter(el => el.innerHTML.startsWith('Глава')).sort((a, b) => {
        const aIndex = parseInt(a.textContent.trim().slice(6,7));
        const bIndex = parseInt(b.textContent.trim().slice(6,7));
        return aIndex-bIndex;
    });
    const b = chapterChidlrens.filter(el => el.innerHTML.startsWith('Приложение')).sort((a, b) => {
        const aIndex = parseInt(a.textContent.trim().slice(11,12));
        const bIndex = parseInt(b.textContent.trim().slice(11,12));
        return aIndex-bIndex;
    });
    sortedChapters = [...sortedChapters, ...a, ...b];

    chapterChidlrens.forEach(el => chapters.removeChild(el));
    sortedChapters.forEach(el => chapters.appendChild(el));
}
sortChapters(2);
sortChapters(5);

const sixthBook = books.children[5];
const sixthBookChapters = sixthBook.querySelector('ul');
const chapter = document.createElement('li');
chapter.textContent = 'Глава 8: За пределами ES6';
sixthBookChapters.children[sixthBookChapters.children.length-2].after(chapter)