function Book(title, price) {
  this.title = title;
  this.price = price;
}

Book.prototype.buy = function () {
  console.log(`${this.title} 책을 ${this.price}원에 구매했어요`);
};

const book1 = new Book("front tech", 30000);
book1.buy();

function TextBook(title, price, major) {
  Book.call(this, title, price);
  this.major = major;
}

Object.setPrototypeOf(TextBook.prototype, Book.prototype);

TextBook.prototype.buy = function () {
  console.log(
    `${this.title} 책을 ${this.major} 전공생 할인을 받아서 ${
      this.price - 10000
    }원에 구매했어요`
  );
};

const textbook1 = new TextBook("front tech", 30000, "IT");
textbook1.buy();
