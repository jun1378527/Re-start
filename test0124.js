// //Timer (동기, JS외)
// while (true) {
//   setGreenLight();
//   sleep(30);
//   setRedLight();
//   sleep(60);
// }
// Timer 관련(비동기)
// function hello() {
//   console.log("안녕!");
// }
// const intervalId = setInterval(hello, 1000);
// setTimeout(() => {
//   clearInterval(intervalId);
//   console.log("타이머가 멈춰졌어!");
// }, 5000);
// function hello() {
//   console.log("안녕!");
// }

// let count = 0;
// let timer = setInterval(() => {
//   console.log("안녕!");
//   count++;
//   if (count > 5) clearInterval(timer);
// }, 1000);

// setTimeout(() => {
//   console.log("안녕!");
// }, 3000);

const intervalId = setInterval(hello, 1000);

setTimeout(() => {
  clearInterval(intervalId);
}, 5000);
