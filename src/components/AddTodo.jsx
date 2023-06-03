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
  bottom: 20px;
  width: 100%;
  padding: 20px;
`

const AddInput = styled.input`
  width: 200px;
`