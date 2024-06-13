import "./App.css";
import CalculationComponent from "./CalculationComponent";
// const App = () => {
//   return (
//     <div className="App">
//       <Counter />
//     </div>
//   );
// };

// export default App;

// const App = () => {
//   return (
//     <div className="App">
//       <h1>useMemo Example</h1>
//       <MemoizedComponent />
//     </div>
//   );
// };

// export default App;

const App = () => {
  return (
    <div className="App">
      <h1>위에는 a+b+c a+b는 계산하는데 10억번 카운트 하지만 memo해둠</h1>
      <CalculationComponent />
    </div>
  );
};

export default App;
