//Destructuring

let fruits = ["사과", "바나나"];
let apple = fruits[0];
let banana = fruits[1];

console.log(apple, banana);

let [apple2, banana2] = ["사과", "바나나"];

console.log(apple2, banana2);

let [a, b] = [];
console.log(a);
console.log(b);

let seasons = ["봄", "여름", "가을", "겨울"];
let spring = seasons[0];
let fall = seasons[2];

let [spring2, , fall2] = seasons;
console.log(spring2, fall2);

let [teacher, ...students] = ["서호준", "신수민", "조민성"];
console.log(teacher);
console.log(students);

let frontendClass = {
  className: "front(react) ban",
  gisu: 8,
};
let { className: cname, gisu: giso } = frontendClass;
console.log(cname, giso);
