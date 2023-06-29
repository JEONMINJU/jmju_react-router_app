import React from "react";
import styled from "styled-components";
import theme from "../../util/theme";
import { useDarkMode } from "../../context/ThemeContext";

export default function Header({ setTodos }) {
  const {isDark, toggleDarkMode} = useDarkMode();

  const toggleTheme = () =>{
    toggleDarkMode(prev=>!prev);
    console.log(isDark, "123여기")
  };

  // 전체선택
  const allChecked = () => {
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
  const allDelete = () => {
    // setLocalStorage('todo', []);
    setTodos([]);
  };

  // 체크삭제
  const onCheckedDelete = () => {
    setTodos((prev) => prev.filter((item) => item.status !== "completed"));
    // const todosData = getLocalStorage('todo');
    // const setData = todosData.filter((item) => item.status !== "completed");
    // setLocalStorage("todo",setData);
  };

  return (
    <TodoHeader style={{
      backgroundColor: isDark? 'black' : 'white',
      color: isDark ? 'white' : 'black',
    }}>
      <HeaderButton onClick={toggleTheme}>Toggle</HeaderButton>

      <HeaderButton type="button" onClick={allChecked}>
        All
      </HeaderButton>
      <HeaderButton type="button" onClick={allDelete}>
        All delete
      </HeaderButton>
      <HeaderButton type="button" onClick={onCheckedDelete}>
        checked delete
      </HeaderButton>
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
