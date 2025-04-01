import { Book } from "./Book.js";

export class EBook extends Book {
  constructor(name, author, year, format) {
    super(name, author, year);
    this._format = format;
  }

  get format() {
    return this._format;
  }

  set format(value) {
    const possibleFormats = ["PDF", "EPUB", "MOBI", "AZW", "HTML"];
    if (typeof value !== "string") {
      throw new Error("Format must be a string");
    } else if (!possibleFormats.includes(value)) {
      throw new Error("Format must be PDF, EPUB, MOBI, AZW or HTML");
    } else {
      this._format = value;
    }
  }

  printInfo() {
    console.log(
      `E-Book: ${this._name}, Author: ${this._author}, Year: ${this._year}, Format: ${this._format}`,
    );
  }

  static createEBookFromBook(bookInstance, format) {
    if (!(bookInstance instanceof Book)) {
      throw new Error("Argument must be an instance of Book");
    }
    return new EBook(
      bookInstance.name,
      bookInstance.author,
      bookInstance.year,
      format,
    );
  }
}
