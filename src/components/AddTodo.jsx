import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { setLocalStorage, getLocalStorage } from "../util/util";
import theme from '../util/theme';
export default function AddTodo({ onAdd }) {
  // onAdd 를 프롭으로 받고
  const [text, setText] = useState(""); // 초기는 빈값으로
  const handleChange = (e) => setText(e.target.value); // event가 발생하면 setText에 있는 타켓의 밸류로 설정할것
  const handleSubmit = (e) => {
    if (text.trim().length === 0) return;
    e.preventDefault(); // page refesh 막기
    onAdd({ id: uuidv4(), text: text, status: "active" });
    const storageTodos = getLocalStorage("todo") || [];

    setLocalStorage("todo", [
      ...storageTodos,
      { id: uuidv4(), text: text, status: "active" },
    ]);

    setText(""); // 입력 후 인풋 초기화
  };
  return (
    <AddForm onSubmit={handleSubmit}>
      <AddInput
        type="text"
        placeholder="Add Todo Plz"
        value={text}
        onChange={handleChange}
      />
    </AddForm>
  );
}

// style
const AddForm = styled.form`
${theme.flexCenter};
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  max-width: 100%;
  padding: 20px;
  background: ${theme.bg.f5};
`

const AddInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid ${theme.color.ec};
  border-radius: 8px;
`