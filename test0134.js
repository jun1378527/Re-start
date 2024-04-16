// JSON

const student = {
  name: "이현경",
  career: "publisher",
};

// JSON
// const studentJson = {
//     "name":"이현경",
//     "career":"publisher"
// }

const studentJson = JSON.stringify(student);
console.log(student);
console.log(studentJson);

console.log(studentJson.name);

const studentAgain = JSON.parse(studentJson);
console.log(studentAgain.name);
console.log(studentAgain);
