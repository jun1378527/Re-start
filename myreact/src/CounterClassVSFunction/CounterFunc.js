import { useState, useEffect } from "react"; // 리액트에서 useState와 useEffect 훅을 가져옴

// 함수형 컴포넌트를 정의
function CounterFunc() {
  // useState 훅을 사용하여 count 상태를 선언하고 초기 값을 0으로 설정
  const [count, setCount] = useState(0);

  // 컴포넌트가 마운트될 때 한 번 실행되는 useEffect
  useEffect(() => {
    console.log("CounterFunc: useEffect - 컴포넌트가 마운트됨");

    // Cleanup 함수는 컴포넌트가 언마운트될 때 호출됨
    return () => {
      console.log("CounterFunc: useEffect - 컴포넌트가 언마운트됨");
    };
  }, []); // 빈 배열을 두 번째 인자로 전달하여 마운트와 언마운트 시에만 실행되도록 함

  // count 상태가 업데이트될 때마다 호출되는 useEffect
  useEffect(() => {
    console.log("CounterFunc: useEffect - 컴포넌트가 업데이트됨");

    // Cleanup 함수는 이전 effect를 정리함
    return () => {
      console.log("CounterFunc: useEffect - 이전 효과 정리");
    };
  }, [count]); // count가 변경될 때마다 useEffect가 실행됨

  // 카운트를 증가시키는 함수
  const increment = () => {
    // setCount를 사용하여 count 값을 증가시킴
    setCount(count + 1);
  };

  // 카운트를 감소시키는 함수
  const decrement = () => {
    // setCount를 사용하여 count 값을 감소시킴
    setCount(count - 1);
  };

  // 반환된 JSX는 UI를 정의함
  return (
    <div>
      <h1>Functional Component Counter</h1>
      {/* 현재 카운트 값을 표시 */}
      <p>Count: {count}</p>
      {/* 버튼 클릭 시 increment 함수 호출 */}
      <button onClick={increment}>Increment</button>
      {/* 버튼 클릭 시 decrement 함수 호출 */}
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

// 이 함수를 다른 파일에서 사용할 수 있도록 내보내기
export default CounterFunc;
