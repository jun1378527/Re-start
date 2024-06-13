import React, { useState } from "react";
import "./App.css"; // CSS 파일을 import 합니다

function App() {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Top level : App</h1>
      <button onClick={inc}>+</button>
      <Level1 count={count} />
    </div>
  );
}

function Level1({ count }) {
  return (
    <div className="level1">
      <h2>Level 1</h2>
      <Level2 count={count} />
    </div>
  );
}

function Level2({ count }) {
  return (
    <div className="level2">
      <h2>Level 2</h2>
      <Level3 count={count} />
    </div>
  );
}

function Level3({ count }) {
  return (
    <div className="level3">
      <h2>Level 3</h2>
      <Level4 count={count} />
    </div>
  );
}

function Level4({ count }) {
  return (
    <div className="level4">
      <h2>Level 4</h2>
      <Level5 count={count} />
    </div>
  );
}

function Level5({ count }) {
  return (
    <div className="level5">
      <h2>Level 5</h2>
      <p>Count: {count}</p>
    </div>
  );
}

export default App;
// Props Drilling
// 정의:

// Props Drilling은 React에서 상태나 데이터를 여러 컴포넌트 레벨을 통해 전달해야 할 때 발생하는 문제입니다. 데이터나 상태를 필요로 하지 않는 중간 컴포넌트들이 단지 데이터를 전달하기 위해 props를 받아야 하는 상황이 생깁니다.
// 문제점:

// 중첩된 컴포넌트 구조에서 데이터 전달이 복잡해짐.
// 유지보수 및 가독성이 떨어짐.
// 성능 저하 가능성.
// Props Drilling 문제 해결 방법
// 1. useContext
// 용도: 전역 상태를 관리하고, props를 통해 데이터를 전달할 필요 없이 컴포넌트 트리의 여러 레벨에 데이터를 전달할 때 사용.
// 2. useReducer
// 용도: 복잡한 상태 로직을 보다 명확하게 정의하고 관리할 때 사용. 상태와 상태 업데이트 로직을 컴포넌트 외부로 분리하여 props drilling 문제를 줄임.
// 3. useCallback과 useMemo
// 용도: 컴포넌트가 리렌더링될 때 불필요한 연산을 피하고, 콜백 함수나 계산 결과를 메모이제이션하여 성능 최적화.
// 추가적인 상태 관리 라이브러리
// 4. Redux
// 용도: 중앙 집중식 상태 관리 라이브러리로, 복잡한 애플리케이션의 상태를 효율적으로 관리.
// 5. Recoil
// 용도: Facebook에서 개발한 상태 관리 라이브러리로, 전역 상태 관리와 React Context의 장점을 결합.
// 6. MobX
// 용도: observable 상태와 actions을 사용하여 상태 변화를 추적하고 관리하는 라이브러리.
