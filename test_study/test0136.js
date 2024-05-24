//프로미스
const pizzaOrder = () => {
  return new Promise((resolve, reject) => {
    console.log("피자를 주문합니다.");
    resolve("피자 도우 준비");
  });
};

const step1 = (mes) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(mes);
      resolve("토핑 준비");
    }, 3000);
  });
};

const step2 = (mes) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(mes);
      resolve("굽기 완료");
    }, 1000);
  });
};

const step3 = (mes) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(mes);
      resolve("피자 준비 완료");
    }, 2000);
  });
};

pizzaOrder()
  .then(step1)
  .then(step2)
  .then(step3)
  .then((finalMessage) => {
    console.log(finalMessage);
  });
