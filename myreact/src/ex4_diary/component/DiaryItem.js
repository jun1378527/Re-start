import "../style/DiaryItem.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { getEmotionImgById } from "../util";

export default function DiaryItem({ id, emotionId, contents, date }) {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/diary/${id}`);
  };
  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="diary-item">
      <div
        onClick={goDetail}
        className={["img-section", `img-section-${emotionId}`].join(" ")}
      >
        <img src={getEmotionImgById(emotionId)} alt="" />
      </div>
      <div className="info-section" onClick={goDetail}>
        <div className="date-wrapper">
          {new Date(parseInt(date)).toLocaleDateString()}
        </div>
        <div className="content-wrapper">{(contents || "").slice(0, 25)}</div>
      </div>
      <div className="btn-section">
        <Button text={"수정하기"} onClick={goEdit} />
      </div>
    </div>
  );
}
