const Controller = ({ handleSetCount, resetCount, handleUndo }) => {
  return (
    <div>
      <button onClick={() => handleSetCount(-1)}>-1</button>
      <button onClick={() => handleSetCount(-10)}>-10</button>
      <button onClick={() => handleSetCount(-100)}>-100</button>
      <button onClick={() => handleSetCount(100)}>+100</button>
      <button onClick={() => handleSetCount(10)}>+10</button>
      <button onClick={() => handleSetCount(1)}>+1</button>
      <button onClick={resetCount}>Reset</button>
      <button onClick={handleUndo}>Undo</button>
    </div>
  );
};

export default Controller;
