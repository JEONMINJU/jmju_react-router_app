import React from "react";
import AddTodo from "../AddTodo";
import Todo from "../Todo/Todo";

export default function TodoList({ todos, setTodos }) {
  const handleAdd = (todo) => setTodos((prev) => [...prev, todo]); // 기존의 todos 배열에 todo 추가
  // const handleAdd = (todo) => setTodos((prev)=>prev.concat(todo));

  return (
    <section>
      <ul>
        {todos.map((item) => (
          <Todo key={item.id} todo={item} setTodos={setTodos} />
        ))}
      </ul>

      {/* todo가 추가되면 알려주기(콜백함수 prop으로 전달) */}
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

// useEffect로 로컬스토리지 todos데이터를 초기셋팅한다
// setTodos로 계속 추가나 수정 삭제를 한다
// useEffect 클린업함수로 setTodos로 추가,수정,삭제한 최신데이터를 localstorage에 새로 저장한다.
