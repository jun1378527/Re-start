class Book {
  //syntactic sugar(설탕을 살짝 바른)
  constructor(title, totalPages) {
    this.title = title;
    this.totalPages = totalPages;
    this.nowPage = 1;
  }

  read() {
    if (this.nowPage >= this.totalPages) {
      console.log("다 읽었어요");
    } else {
      console.log(
        `${this.title}을 읽습니다. 지금 ${this.nowPage} 쪽을 읽고 있습니다.`
      );
      this.nowPage++;
    }
  }
}

let myBook = new Book("front tech", 3);
myBook.read();
myBook.read();
myBook.read();
myBook.read();
