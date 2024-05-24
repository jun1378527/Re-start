//기본 for문
let arr1 = ["a", "b", "c"];
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}
//forEach 배열
arr1.forEach((char) => {
  console.log(char);
});

// for in문 객체
const student = {
  name: "고준기",
  age: 27,
  etc: "안녕하세요",
};
for (key in student) {
  console.log(key + ":" + student[key]);
}

for (let char of arr1) {
  console.log(char);
}
