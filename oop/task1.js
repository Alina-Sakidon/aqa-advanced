import { Book } from './Book.js';
import { EBook } from './EBook.js';

console.log(`Task 1`);
const book1 = new Book('"Harry Potter"', 'J.K. Rowling', 1997);
const book2 = new Book('"The Lord of the Rings"', 'J.R.R. Tolkien', 1954);
const book3 = new Book('"The Catcher in the Rye"', 'J.D. Salinger', 1951);

book1.printInfo();
book2.printInfo();
book3.printInfo();

console.log(`Task 2`);
const ebook1 = new EBook(`Java`, `Herbert Schildt`, 2014, `PDF`);
ebook1.printInfo();

console.log(`Task 3`);
console.log(`Using setters and getters ${book1.name}`);

book1.name = 'Notebook';
book1.author = 'Nicholas Sparks';
book1.year = 1996;
console.log(`Book name: ${book1.name}, Author: ${book1.author}, Year: ${book1.year}`);

console.log(`Using setters with wrong values`);
try {
    book1.name = 1;
} catch (error) {
    console.log(error.message);
}

try {
    book1.author = 1;
} catch (error) {
    console.log(error.message);
}

try {
    book1.year = '2000';
} catch (error) {
    console.log(error.message);
}

console.log(`Using setters and getters ${ebook1.format}`);
ebook1.format = 'EPUB';
console.log(`E-Book title: ${ebook1.name}, Author: ${ebook1.author}, Format: ${ebook1.format}`);

console.log(`Using setters with wrong values`);
try {
    ebook1.format = 'TXT';
} catch (error) {
    console.error(error);
};

console.log(`Task 4`);
const ebook3 = new EBook(`"Java"`, `Herbert Schildt`, 2014, `PDF`);
const ebook4 = new EBook(`"JavaScript"`, `David Flanagan`, 2011, `EPUB`);
const books = [book1, book2, book3, ebook3, ebook4];

const oldestBook = Book.findOldestBook(books);
console.log(`The oldest book is: ${oldestBook.name}, ${oldestBook.author}, ${oldestBook.year}`);

console.log(`Task 5`);
const ebook5 = EBook.createEBookFromBook(book1, `MOBI`);
ebook5.printInfo();