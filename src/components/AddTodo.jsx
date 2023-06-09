import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { setLocalStorage, getLocalStorage } from "../util/util";
import theme from '../util/theme';
import dayjs from 'dayjs';

export default function AddTodo({ onAdd }) {
  const date = dayjs(new Date()).format('YYYY/MM/DD HH:mm:ss');

  // onAdd 를 props로 받고
  const [text, setText] = useState(""); // 초기 빈값
  const handleChange = (e) => setText(e.target.value); // event가 발생하면 setText에 있는 타켓의 value로 설정할것
  const handleSubmit = (e) => {
    if (text.trim().length === 0) return;
    e.preventDefault(); // page refesh 막기
    onAdd({ id: uuidv4(), text: text, date, status: "active" });
    const storageTodos = getLocalStorage("todo") || [];

    setLocalStorage("todo", [
      ...storageTodos,
      { id: uuidv4(), text: text, date, status: "active" },
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
  padding: 0 20px;
`