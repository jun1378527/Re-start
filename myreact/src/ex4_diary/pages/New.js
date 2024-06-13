import "../style/New.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../component/Header";
import Editor from "../component/Editor";
import Button from "../component/Button";
import { DiaryDispatchContext } from "../App";

export default function New() {
  const { onCreate } = useContext(DiaryDispatchContext);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const onSubmit = data => {
    const { date, contents, emotionId } = data;
    console.log("Submitting new diary:", date, contents, emotionId); // 추가
    onCreate(date, contents, emotionId);
    navigate("/", { replace: true });
  };

  return (
    <div className="new">
      <Header
        title={"새 일기 작성하기"}
        leftChild={<Button text={"< 뒤로가기"} onClick={goBack} />}
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
}
