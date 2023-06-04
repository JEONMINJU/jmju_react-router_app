import React from "react";
import { getLocalStorage, setLocalStorage } from "../../util/util";
import styled from "styled-components";
import theme from "../../util/theme";

export default function Header({ setTodos }) {
  // 전체선택
  const onAllClick = () => {
    setTodos((todos) => {
      const isEvery = todos.every((prev) => prev.status === "completed");
      return todos.map((todo) => ({
        ...todo,
        status: isEvery ? "active" : "completed",
      }));
    });
    // prev => prev.map(item=>({id:1, test:"test",status:"completed", status:"3"}))
  };

  // 삭제
  const onDeleteAll = () => {
    // setLocalStorage('todo', []);
    setTodos([]);
  };

  // 체크삭제
  const onDeleteChecked = () => {
    setTodos((prev) => prev.filter((item) => item.status !== "completed"));
    // const todosData = getLocalStorage('todo');
    // const setData = todosData.filter((item) => item.status !== "completed");
    // setLocalStorage("todo",setData);
  };

  return (
    <TodoHeader>
      <HeaderButton type="button" onClick={onAllClick}>
        All
      </HeaderButton>
      <HeaderButton type="button" onClick={onDeleteAll}>
        All delete
      </HeaderButton>
      <HeaderButton type="button" onClick={onDeleteChecked}>
        checked delete
      </HeaderButton>
      {/* {filters.map((value, index) => (<li key={index}>
				<button onClick={() => onFilterChange(value)}>{value}</button>
			</li>))} */}
    </TodoHeader>
  );
}

const TodoHeader = styled.header`
  display: flex;
  gap: 10px;
  padding: 20px;
  box-shadow: 0 7px 10px 0px rgb(217,214,214, 0.3);
`
const HeaderButton = styled.button`
  ${theme.CommonButton};
`
