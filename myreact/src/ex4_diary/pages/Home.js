import "../style/Home.css";
import Header from "../component/Header";
import DiaryList from "../component/DiaryList";
import Button from "../component/Button";
import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

function Home() {
  const [pivotDate, setPivotDate] = useState(new Date());
  const data = useContext(DiaryStateContext);
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const filtered = data.filter(diary => {
      const diaryDate = new Date(Number(diary.date));
      return (
        diaryDate.getFullYear() === pivotDate.getFullYear() &&
        diaryDate.getMonth() === pivotDate.getMonth()
      );
    });
    setFilteredData(filtered);
  }, [data, pivotDate]);

  const headerTitle = `${pivotDate.getFullYear()}년 ${
    pivotDate.getMonth() + 1
  }월`;

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };
  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  const onClickNew = () => {
    navigate("/new");
  };

  return (
    <>
      <Header
        title={headerTitle}
        leftChild={<Button text={"<"} onClick={onDecreaseMonth} />}
        rightChild={<Button text={">"} onClick={onIncreaseMonth} />}
      />
      <div className="menu-wrapper">
        <div className="sort-col">
          <select value={"latest"} onChange={() => {}}>
            <option value="latest">최신순</option>
            <option value="oldest">오래된 순</option>
          </select>
        </div>
        <div className="create-col">
          <Button text={"새 일기 쓰기"} onClick={onClickNew} />
        </div>
      </div>
      <DiaryList data={filteredData} />
    </>
  );
}

export default Home;
