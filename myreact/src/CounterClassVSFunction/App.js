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

// 1. Mount (마운트)
// 마운트는 컴포넌트가 DOM에 삽입될 때 발생합니다. 이 과정은 다음과 같은 순서로 이루어집니다:

// constructor(): 컴포넌트가 생성될 때 호출됩니다. 상태(state)를 초기화하거나 인스턴스 메서드를 바인딩할 때 사용합니다.
// static getDerivedStateFromProps(props, state): props로부터 상태를 파생할 때 호출됩니다. 이 메서드는 컴포넌트가 마운트되기 전과 업데이트되기 전 모두에서 호출됩니다. 이 메서드는 불변성을 유지하면서 state를 반환하거나 null을 반환해야 합니다.
// render(): JSX를 반환하여 화면에 그려집니다.
// componentDidMount(): 컴포넌트가 마운트된 직후에 호출됩니다. 이 시점에서는 DOM 노드에 접근할 수 있으며, 네트워크 요청이나 DOM 조작을 할 수 있습니다.
// 2. Update (업데이트)
// 업데이트는 props나 state가 변경될 때 발생합니다. 이 과정은 다음과 같은 순서로 이루어집니다:

// static getDerivedStateFromProps(props, state): 마운트 과정과 동일하게 호출됩니다.
// shouldComponentUpdate(nextProps, nextState): 새로운 props나 state를 받았을 때 리렌더링을 할지 말지를 결정합니다. true를 반환하면 리렌더링을 하고, false를 반환하면 리렌더링을 하지 않습니다.
// render(): 새로운 props나 state에 따라 컴포넌트를 다시 렌더링합니다.
// getSnapshotBeforeUpdate(prevProps, prevState): DOM이 업데이트되기 직전에 호출됩니다. 이 메서드는 업데이트 전의 DOM 상태를 캡처하고 그 값을 componentDidUpdate에 전달할 수 있습니다.
// componentDidUpdate(prevProps, prevState, snapshot): 컴포넌트가 업데이트된 직후에 호출됩니다. 이 시점에서는 이전 props와 state에 접근할 수 있으며, getSnapshotBeforeUpdate에서 반환한 스냅샷 값을 인자로 받을 수 있습니다. 여기서 네트워크 요청을 하거나 DOM을 조작할 수 있습니다.
// 3. Unmount (언마운트)
// 언마운트는 컴포넌트가 DOM에서 제거될 때 발생합니다. 이 과정은 다음과 같습니다:

// componentWillUnmount(): 컴포넌트가 언마운트되기 직전에 호출됩니다. 이 메서드에서는 타이머를 제거하거나, 네트워크 요청을 취소하거나, 구독을 해제하는 등의 정리 작업을 수행할 수 있습니다.
