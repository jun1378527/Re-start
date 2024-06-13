import Header from "../component/Header";
import Viewer from "../component/Viewer";
import Button from "../component/Button";
import useDiary from "../hooks/useDiary";
import { getFormattedDate } from "../util";
import { useNavigate, useParams } from "react-router-dom";

export default function Diary() {
  const { id } = useParams(); //주소에서 id 가져오기
  const data = useDiary(id);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  const { date, contents, emotionId } = data; // content -> contents

  const title = `${getFormattedDate(new Date(Number(date)))} 기록`;

  return (
    <>
      <Header
        title={title}
        leftChild={<Button text={"뒤로 가기"} onClick={goBack} />}
        rightChild={<Button text={"수정하기"} onClick={goEdit} />}
      />
      <Viewer content={contents} emotionId={emotionId} />{" "}
      {/* content -> contents */}
    </>
  );
}
