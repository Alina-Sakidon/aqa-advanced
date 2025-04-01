export class Book {
	constructor(name, author, year) {
		this._name = name;
		this._author = author;
		this._year = year;
	}

	get name() {
		return this._name;
	}

	set name(value) {
		if (typeof value !== 'string') {
			throw new Error('Name must be a string');
		} else {
			this._name = value;
		}
	}

	get author() {
		return this._author;
	}

	set author(value) {
		if (typeof value !== 'string') {
			throw new Error('Author must be a string');
		} else {
			this._author = value;
		}
	}

	get year() {
		return this._year;
	}

	set year(value) {
		if (typeof value !== 'number') {
			throw new Error('Year must be a number');
		} else {
			this._year = value;
		}
	}

	static findOldestBook(books) {
		return books.reduce((oldestBook, currentBook) => (oldestBook.year < currentBook.year ? oldestBook : currentBook));
	}

	printInfo() {
		console.log(`Book: ${this._name}, Author: ${this._author}, Year: ${this._year}`);
	}
}
