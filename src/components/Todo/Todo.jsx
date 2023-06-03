import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import styled, { css } from "styled-components";
import theme from "../../util/theme";
import { motion } from "framer-motion";
import { getLocalStorage, setLocalStorage } from "../../util/util";

export default function Todo({ todo, setTodos }) {
  const { text, status, id } = todo;
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

  const handleDelete = () => {
    const todosData = getLocalStorage("todo");
    setTodos((prev) => prev.filter((item) => item.id !== id));
    // const setData = todosData.filter((item) => item.id !== id);
    // setLocalStorage("todo", setData);
  };

  const handleEdit = () => {
    setIsEdit((prev) => !prev);
  };

  const handleTextChange = (e) => {
    const value = e.target.value;
    setTodos((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, text: value };
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

      <EditButton
        animate={{
          height: isEdit ? "100px" : "40px",
          opacity: isEdit ? "1" : "0.3",
          backgroundColor: isEdit && "blue",
        }}
        type="button"
        onClick={handleEdit}
      >
        {isEdit ? "확인" : "수정"}
      </EditButton>
      <button type="button" onClick={handleDelete}>
        <FaTrashAlt />
      </button>
    </Wrapper>
  );
}

const EditButton = styled(motion.button)`
  ${theme.CommonButton};
  ${(props) => {
    if (true) {
      return css`
        width: 100px;
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
  ${theme.flexCenter}
  padding: 20px;
  border-bottom: 1px solid ${theme.color.ec};
`;