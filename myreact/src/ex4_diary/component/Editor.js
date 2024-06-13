import React, { useState, useEffect } from "react";
import "../style/Editor.css";

const Editor = ({ initData, onSubmit }) => {
  const [date, setDate] = useState("");
  const [contents, setContents] = useState("");
  const [emotionId, setEmotionId] = useState(1);

  useEffect(() => {
    if (initData) {
      setDate(new Date(initData.date).toISOString().substr(0, 10));
      setContents(initData.contents);
      setEmotionId(initData.emotionId);
    }
  }, [initData]);

  const handleSubmit = () => {
    if (onSubmit) {
      console.log("Editor submit:", { date, contents, emotionId }); // 추가
      onSubmit({ date, contents, emotionId });
    }
  };

  return (
    <div className="editor">
      <div className="input-group">
        <label>날짜</label>
        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>내용</label>
        <textarea
          value={contents}
          onChange={e => setContents(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>감정</label>
        <select
          value={emotionId}
          onChange={e => setEmotionId(Number(e.target.value))}
        >
          <option value={1}>😀 행복</option>
          <option value={2}>😐 보통</option>
          <option value={3}>😔 슬픔</option>
          <option value={4}>😡 화남</option>
          <option value={5}>😢 슬픔</option>
        </select>
      </div>
      <div className="button-group">
        <button className="button" onClick={handleSubmit}>
          저장하기
        </button>
      </div>
    </div>
  );
};

export default Editor;
