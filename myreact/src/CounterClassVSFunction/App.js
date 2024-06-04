// App.js
import React from "react"; // 리액트를 가져옴
import CounterClass from "./CounterClass"; // CounterClass 컴포넌트를 가져옴
import CounterFunc from "./CounterFunc"; // CounterFunc 컴포넌트를 가져옴

// App 함수형 컴포넌트를 정의
function App() {
  return (
    <div>
      {/* CounterClass 컴포넌트를 렌더링 */}
      <CounterClass />
      {/* CounterFunc 컴포넌트를 렌더링 */}
      <CounterFunc />
    </div>
  );
}

// 이 함수를 다른 파일에서 사용할 수 있도록 내보내기
export default App;
