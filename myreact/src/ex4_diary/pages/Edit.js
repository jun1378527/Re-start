import { useNavigate, useParams } from "react-router-dom";
import Button from "../component/Button";
import Header from "../component/Header";
import Editor from "../component/Editor";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import useDiary from "../hooks/useDiary";

export default function Edit() {
  const { id } = useParams();
  const data = useDiary(id);
  const navigate = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const goBack = () => {
    navigate(-1);
  };
  const onClickDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까? 되돌릴 수 없습니다")) {
      onDelete(id);
      navigate("/", { replace: true });
    }
  };
  const onSubmit = data => {
    if (window.confirm("정말 수정하시겠습니까?")) {
      const { date, contents, emotionId } = data;
      onUpdate(id, date, contents, emotionId);
      navigate("/", { replace: true }); //본 페이지로 돌아가기
    }
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="edit">
      <Header
        title={"수정하기"}
        leftChild={<Button text={"< 뒤로 가기"} onClick={goBack} />}
        rightChild={<Button text={"삭제하기"} onClick={onClickDelete} />}
      />
      <Editor initData={data} onSubmit={onSubmit} />
    </div>
  );
}
