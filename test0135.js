// 비동기 처리 방식
// 동기 처리 vs 비동기 처리
// 멀티 스레드 vs 싱글 스레드
// 멀티스레드 : 소회의실 5개(1조-5조) 1명 선생님 독점 간주
// 싱글스레드 : 전체회의실(오류수정요청)

// function dispA() {
//   console.log("A");
// }

// function dispB_callback(callback) {
//   setTimeout(() => {
//     console.log("B");
//     callback(); // 콜백 함수 실행
//   }, 2000);
// }

// function dispC() {
//   console.log("C");
// }

// function proc3() {
//   dispA(); // "A"를 즉시 출력
//   dispB_callback(() => {
//     // 콜백으로 "B" 출력 후 "C"를 출력
//     dispC();
//   });
// }

// proc3();

//햄버거 주문 과정
// 1. 고객이 주문을 한다. 1000ms
// 2. 결제  500ms
// 3. 조리 측에 주문 전달을 한다. 300ms
// 4. 햄버거 조리 3000ms
// 5. 햄버거 포장 100ms
// 6. 고객에게 전달한다. 500ms
// 7. 고객이 내용물을 확인하고 먹는다. 100ms
// function 주문하기() {
//     setTimeout(() => {
//       console.log("주문을 받았습니다.");
//     }, 1000);
//   }

//   function 결제처리() {
//     setTimeout(() => {
//       console.log("결제가 처리되었습니다.");
//     }, 500);
//   }

//   function 주방에주문전달() {
//     setTimeout(() => {
//       console.log("주방에 주문이 전달되었습니다.");
//     }, 300);
//   }

//   function 햄버거조리() {
//     setTimeout(() => {
//       console.log("햄버거가 조리되었습니다.");
//     }, 3000);
//   }

//   function 햄버거포장() {
//     setTimeout(() => {
//       console.log("햄버거가 포장되었습니다.");
//     }, 100);
//   }

//   function 고객에게전달() {
//     setTimeout(() => {
//       console.log("고객에게 햄버거가 전달되었습니다.");
//     }, 500);
//   }

//   function 고객식사() {
//     setTimeout(() => {
//       console.log("고객이 식사를 시작했습니다.");
//     }, 100);
//   }

//   function 과정시작() {
//     주문하기();
//     결제처리();
//     주방에주문전달();
//     햄버거조리();
//     햄버거포장();
//     고객에게전달();
//     고객식사();
//   }

//   과정시작();
function placeOrder(callback) {
  setTimeout(() => {
    console.log("1. 고객이 주문을 한다. 1000ms");
    callback();
  }, 1000);
}

function processPayment(callback) {
  setTimeout(() => {
    console.log("2.결제 500ms ");
    callback();
  }, 500);
}

function sendToKitchen(callback) {
  setTimeout(() => {
    console.log("3. 조리 측에 주문 전달 300ms");
    callback();
  }, 300);
}

function cookBurger(callback) {
  setTimeout(() => {
    console.log("4. 버거 만들기 3000ms");
    callback();
  }, 3000);
}

function packBurger(callback) {
  setTimeout(() => {
    console.log("5. 포장하기 100ms");
    callback();
  }, 100);
}

function deliverToCustomer(callback) {
  setTimeout(() => {
    console.log("6. 고객에게 주기 500ms");
    callback();
  }, 500);
}

function customerEats(callback) {
  setTimeout(() => {
    console.log("7. 고객이 먹기 100ms");
    callback();
  }, 100);
}

function startOrderProcess() {
  placeOrder(() => {
    processPayment(() => {
      sendToKitchen(() => {
        cookBurger(() => {
          packBurger(() => {
            deliverToCustomer(() => {
              customerEats(() => {
                console.log("끝");
              });
            });
          });
        });
      });
    });
  });
}

startOrderProcess();
