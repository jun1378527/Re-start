//생성자 함수 정의
function Book(title, totalPages, nowPage = 1) {
  this.title = title;
  this.totalPages = totalPages;
  this.nowPage = nowPage;
  this.read = function () {
    if (this.nowPage >= this.totalPages) {
      console.log("다 읽었어요");
    } else {
      console.log(`${this.title}을 읽습니다.
          지금 ${this.nowPage} 쪽을 읽고 있습니다.`);
      this.nowPage++;
    }
  };
}

let book1 = new Book("front tech", 3);
let book2 = new Book("front tech", 4, 2);
book1.read();
