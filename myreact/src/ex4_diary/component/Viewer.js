import React from "react";
import "../style/Viewer.css";

const Viewer = ({ contents, emotionId }) => {
  // content -> contents
  const emotionList = [
    { id: 1, label: "행복" },
    { id: 2, label: "보통" },
    { id: 3, label: "슬픔" },
    // 감정 추가
  ];

  const emotionLabel = emotionList.find(it => it.id === emotionId)?.label;

  return (
    <div className="viewer">
      <div className="emotion">{emotionLabel}</div>
      <div className="content">{contents}</div> {/* content -> contents */}
    </div>
  );
};

export default Viewer;
