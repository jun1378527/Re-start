// 이터러블(iterable)
// for of
// 배열, 맵, 셋

let mapStudent = new Map([
  ["name", "고준기"],
  ["조", "1조"],
  ["상태", "평범"],
]);
mapStudent.set("major", "it");
console.log(mapStudent);
console.log(mapStudent.keys());
console.log(mapStudent.values());
console.log(mapStudent.entries());

for (let key of mapStudent.keys()) {
  console.log(key);
}

let array = [1, 2, 3, 2, 1];
let set1 = new Set(array);
console.log(set1);
set1.add(10);
console.log(set1);
set1.delete(2);
console.log(set1);
set1.clear();
console.log(set1);

let stu1 = ["HTML", "CSS"];
let stu2 = ["HTML", "JS"];
let stu3 = ["JS", "REACT"];
let teamAvail = [...stu1, ...stu2, ...stu3];
console.log(teamAvail);
let teamSet = new Set(teamAvail);
console.log(teamSet);

let arr = [1, 2, 3, 4, 5];
let iterator = arr[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// 제너레이터: 일반 객체를 이터러블하게 해줌
// function -> function*
// return -> yield

function* gen1() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

let g1 = gen1();

console.log(g1.next());
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());

let g2 = gen1();
for (let i of g2) {
  console.log(i);
}
s;
