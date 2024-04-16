let nums50manjum = [10, 20, 30, 40, 50];
let num100manjum = [10, 20, 40, 30, 70];

let nums50to100 = [];
for (let i = 0; i < 5; i++) {
  nums50to100[i] = nums50manjum[i] * 2;
}
console.log(nums50to100);

let nums50to100_2 = nums50manjum.map((num) => num * 2);
console.log(nums50to100_2);

let filtered60 = [];
for (let i = 0; i < nums50to100_2.length; i++) {
  if (nums50to100_2[i] >= 60) {
    filtered60.push(nums50to100_2[i]);
  }
}
console.log(filtered60);

let filtered60_2 = [];
filtered60_2 = nums50to100_2.filter((score) => score >= 60);
console.log(filtered60_2);

let data = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < data.length; i++) {
  sum += data[i];
}
console.log(sum);

let sum2 = daa.reduce((total, now) => total + now, 0);
console.log(sum2);
