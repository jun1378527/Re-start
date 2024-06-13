import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function useDiary(id) {
  const data = useContext(DiaryStateContext);
  const [diary, setDiary] = useState();
  const navigate = useNavigate();

  useEffect(
    () => {
      //시작될 때
      const matchDiary = data.find(it => String(it.id) === String(id));
      //주어진 id와 같은 요소(it)의 데이터를 찾기(일치하는 값으로 설정)
      if (matchDiary) {
        setDiary(matchDiary);
      } //찾은 걸 diary로 세팅
      else {
        alert("일치하는 항목이 없습니다.");
        navigate("/", { replace: true }); //찾는 항목이 없으니 루트로 다시 이동
      }
    },
    [id, data] //data나 id가 바뀌면 다시 확인
  );
  return diary; //변경된 값이 생긴다면 setDiary를 통해 diary를 반환
}
