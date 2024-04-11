//Math
var num = 1234.56789;
console.log(Math.ceil(num));

var num100 = num * 100;
num100 = Math.ceil(num100);
num100 /= 100;
console.log(num100);

//반올림
console.log("round: ", Math.round(num));

console.log("fixed:", num.toFixed(2));

console.log("min:", Math.min(1, 2, 3, 4));
console.log("max", Math.max(1, 2, 3, 4));

console.log("random:", Math.random());
console.log("random:", Math.random());
console.log("random:", Math.random());
console.log("random:", Math.random());

console.log("주사위 값:", Math.floor(Math.random() * 6) + 1);
console.log("주사위 값:", Math.floor(Math.random() * 6) + 1);
console.log("주사위 값:", Math.floor(Math.random() * 6) + 1);
console.log("주사위 값:", Math.floor(Math.random() * 6) + 1);
