import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import styled, { css } from "styled-components";
import theme from "../../util/theme";
import { motion } from "framer-motion";
import { getLocalStorage, setLocalStorage } from "../../util/util";
import dayjs from 'dayjs';

export default function Todo({ todo, setTodos }) {
  const { text, date, status, id } = todo;

  console.log(id, text, status)
  
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status } : item))
    );
    // const todosData = getLocalStorage("todo");
    // const setData = todosData.map((item) =>
    //   item.id === id ? { ...item, status } : item
    // );
    // setLocalStorage("todo", setData);
  };

  // 삭제
  const handleDelete = () => {
    const todosData = getLocalStorage("todo");
    setTodos((prev) => prev.filter((item) => item.id !== id));
    console.log(setTodos, "1")
    // const setData = todosData.filter((item) => item.id !== id);
    // setLocalStorage("todo", setData);
  };

  // 수정 버튼
  const handleEdit = () => {
    setIsEdit((prev) => !prev);
  };

  // 텍스트 값 수정
  const handleTextChange = (e) => {
    const value = e.target.value;
    const date = dayjs(new Date()).format('YYYY/MM/DD HH:mm:ss');

    setTodos((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, date, text: value };
        } else {
          return item;
        }
      })
    );
    // const todosData = getLocalStorage("todo");
    // const setData = todosData.map((item) => {
    //   if (item.id === id) {
    //     return { ...item, text: value };
    //   } else {
    //     return item;
    //   }
    // });
    // setLocalStorage("todo", setData);
  };

  return (
    <Wrapper>
      <form className="form">
        {isEdit ? (
          <>
            <input
              type="text"
              id="text"
              value={text}
              onChange={handleTextChange}
            />
          </>
        ) : (
          <>
            <input
              type="checkbox"
              id="checkbox"
              checked={status === "completed"}
              onChange={handleChange}
            />
            <label htmlFor="checkbox">{text}</label>
          </>
        )}
      </form>

      <TodoDate>{date}</TodoDate>

      <TodoConrol>
        <CommonButton
          animate={{
            height: isEdit ? "60px" : "",
            opacity: isEdit ? "0.5" : "1",
            // backgroundColor: isEdit && "blue",
          }}
          type="button"
          onClick={handleEdit}
        >
          {isEdit ? "확인" : "수정"}
        </CommonButton>
        <CommonButton type="button" onClick={handleDelete}>
          <FaTrashAlt />
        </CommonButton>
      </TodoConrol>
    </Wrapper>
  );
}

const CommonButton = styled(motion.button)`
  ${theme.CommonButton};
  ${(props) => {
    if (true) {
      return css`
        min-width: 50px;
      `;
    }
  }}
  &.active {
    background-color: ${theme.color.red};
  }
  /* height: ${(props) => props.height};
  transition: all 1s ea se; */
`;

const Wrapper = styled.li`
  /* ${theme.flexCenter} */
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid ${theme.color.ec};

  form {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    min-height: 200px;
    padding: 16px;
    background: ${theme.bg.f5};
    border-radius: 6px;
  }

  label {
    display: block;
    ${theme.line10};
  }
`;

// 날짜
const TodoDate = styled.span`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`

// 버튼 컨트롤(수정,삭제)
const TodoConrol = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    margin-top: 20px;
`;