import React, { useState, useEffect } from "react";
import "../style/DiaryList.css";
import DiaryItem from "./DiaryItem";
import Button from "./Button";

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된 순" },
];

const filterOptionList = [
  { value: "all", name: "전체" },
  { value: "good", name: "좋음" },
  { value: "bad", name: "나쁨" },
];

export default function DiaryList({ data }) {
  const [sortType, setSortType] = useState("latest");
  const [filter, setFilter] = useState("all");
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    const filtered = data.filter(item => {
      if (filter === "all") {
        return true;
      } else if (filter === "good") {
        return item.emotionId <= 3;
      } else {
        return item.emotionId > 3;
      }
    });

    const sorted = filtered.sort((a, b) => {
      if (sortType === "latest") {
        return b.date - a.date;
      } else {
        return a.date - b.date;
      }
    });

    setSortedData(sorted);
  }, [data, sortType, filter]);

  return (
    <div className="diarylist">
      <div className="menu-wrapper">
        <div className="sort-col">
          <select value={sortType} onChange={e => setSortType(e.target.value)}>
            {sortOptionList.map(option => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-col">
          <select value={filter} onChange={e => setFilter(e.target.value)}>
            {filterOptionList.map(option => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="list-wrapper">
        {sortedData.map(item => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
