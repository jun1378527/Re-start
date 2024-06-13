import React from "react";
import styled from "styled-components";
import "./App.css";
// 기본 버튼 스타일 정의
const Button = styled.button`
  color: white;
  background-color: gray;
  padding: 10px;
  border: none;
  cursor: pointer;
`;

// 기본 버튼 스타일을 상속받아 PrimaryButton 정의
const PrimaryButton = styled(Button)`
  background-color: blue;
`;

// 기본 버튼 스타일을 상속받아 SecondaryButton 정의
const SecondaryButton = styled(Button)`
  background-color: green;
`;

export default function App() {
  return (
    <div>
      <Button>Default Button</Button>
      <PrimaryButton>Primary Button</PrimaryButton>
      <SecondaryButton>Secondary Button</SecondaryButton>
      <button className="css-button">CSS Button</button>
    </div>
  );
}
