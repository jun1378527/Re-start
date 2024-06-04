import { Component } from "react"; // 리액트에서 Component를 가져옴

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("CounterClass: Constructor - 컴포넌트가 생성됨");
  }

  componentDidMount() {
    console.log("CounterClass: componentDidMount - 컴포넌트가 마운트됨");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "CounterClass: shouldComponentUpdate - 컴포넌트가 업데이트될지 결정됨"
    );
    return true; // true를 반환하면 업데이트를 허용합니다.
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("CounterClass: componentDidUpdate - 컴포넌트가 업데이트됨");
  }

  componentWillUnmount() {
    console.log("CounterClass: componentWillUnmount - 컴포넌트가 언마운트됨");
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>Class Component Counter</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default CounterClass;
