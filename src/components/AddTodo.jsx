import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { setLocalStorage, getLocalStorage } from "../util/util";
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Todo Plz"
        value={text}
        onChange={handleChange}
      />
      <button type="submit">추가</button>
    </form>
  );
}
