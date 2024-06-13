import "./App.css";
import { useReducer, useRef, useEffect, createContext } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";

const mockData = [
  {
    id: "mock1",
    date: new Date().getTime() - 1,
    contents: "mock1",
    emotionId: 1,
  },
  {
    id: "mock2",
    date: new Date().getTime() - 1,
    contents: "mock2",
    emotionId: 2,
  },
  {
    id: "mock3",
    date: new Date().getTime() - 1,
    contents: "mock3",
    emotionId: 3,
  },
];

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "INIT":
      return action.data;
    case "CREATE":
      console.log("Creating new diary:", action.data); // 추가
      return [action.data, ...state];
    case "UPDATE":
      return state.map(it =>
        String(it.id) === String(action.data.id) ? { ...action.data } : it
      );
    case "DELETE":
      return state.filter(it => String(it.id) !== String(action.targetId));
    default:
      return state;
  }
}

function App() {
  const idRef = useRef(0);
  const [data, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    dispatch({ type: "INIT", data: mockData });
  }, []);

  const onCreate = (date, contents, emotionId) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current,
        date: new Date(date).getTime(),
        contents,
        emotionId,
      },
    });
    idRef.current += 1;
  };

  const onUpdate = (targetId, date, contents, emotionId) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        contents,
        emotionId,
      },
    });
  };

  const onDelete = targetId => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  };

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/diary/:id" element={<Diary />} />
              <Route path="/edit/:id" element={<Edit />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
