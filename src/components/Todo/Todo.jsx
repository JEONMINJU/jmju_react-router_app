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
    const todosData = getLocalStorage('todo');
    const setData = todosData.map((item) => (item.id === id ? { ...item, status } : item));

    setTodos(setData);
    setLocalStorage('todo', setData);
  };

  const handleDelete = () => {
    const todosData = getLocalStorage('todo');
    const setData = todosData.filter((item) => item.id !== id);

    setTodos(setData);
    setLocalStorage('todo', setData);
  };

  const handleEdit = () => {
    setIsEdit((prev) => !prev);
  };

  const handleTextChange = (e) => {
    const value = e.target.value;
    const todosData = getLocalStorage('todo');
    const setData = todosData.map((item) => {
      if (item.id === id) {
        return { ...item, text: value };
      } else {
        return item;
      }
    });

    setTodos(setData);
    setLocalStorage('todo', setData);

    // setTodos((prev) => {
    //   return prev.map((item) => {
    //     if (item.id === id) {
    //       return { ...item, text: value };
    //     } else {
    //       return item;
    //     }
    //   });
    // });
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

const EditButton = styled(motion.div)`
  ${theme.IweddingButton};
  ${(props) => {
    if (true) {
      return css`
        width: 300px;
      `;
    }
  }}
  &.active {
    background-color: blue;
  }
  /* height: ${(props) => props.height};
  transition: all 1s ease; */
`;

const Wrapper = styled.div`
  button {
  }
  form {
  }
`;
