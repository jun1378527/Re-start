// async await문
// promise : ~~.then().then()

// 일반 함수 형태
function generalFunc() {
  console.log("일반 함수네요");
}

// async
async function asyncFunc() {
  console.log("async 함수네요");
}

function wahtIsYourOrder() {
  let myOrder = "한솥도시락";
  return new Promise((resolve, reject) => resolve(myOrder));
}
function showYourOrder(mes) {
  return new Promise((resolve, reject) =>
    resolve(`promise로부터 ${mes}를 주문 받았습니다.`)
  );
}
wahtIsYourOrder().then(showYourOrder).then(console.log);

async function asyncwhatIsYourOrder() {
  let myOrder = "한솥도시락";
  return myOrder;
}

async function asyncshowYourOrder(mes) {
  return `promise로부터 ${mes}를 주문 받았습니다.`;
}

async function handleOrder() {
  const order = await asyncwhatIsYourOrder();
  const message = await asyncshowYourOrder(order);
  console.log(message);
}

handleOrder();
