import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import TodoList from "../../components/TodoList/TodoList";
// import { useSearchParams } from "react-router-dom";
// import TodoSwiper from "../../components/TodoSwiper/TodoSwiper";
import { getLocalStorage, setLocalStorage } from "../../util/util";
import styled from "styled-components";

function TodoIndex() {
  // let [searchParams] = useSearchParams();
  // const todoIds = searchParams.get("id");
  const [mount, setMount] = useState(false);
  const [todos, setTodos] = useState([]); // 상태관리

  useEffect(() => {
    setTodos(getLocalStorage("todo") || []);
    setMount(true);
  }, []);

  useEffect(() => {
    if (mount) {
      setLocalStorage("todo", todos);
    }
  }, [todos,mount]);

  return (
    <TodoContainer>
      {/* <TodoSwiper /> */}
      <Header setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </TodoContainer>
  );
}

export default TodoIndex;

const TodoContainer = styled.div`
`
