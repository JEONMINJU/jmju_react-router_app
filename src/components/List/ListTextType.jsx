import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import styled from "styled-components";
import theme from "../../util/theme";

function ListTextType({list, setLists}) {
  const handleDelete = (id) => {
    setLists((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <List>
      <ul className="mj__work__box">
        {list.map((item) => (
          <li className="mj__work__list" key={item.id}>
            <form className="mj__work__form">
              <input type="checkbox" className="mj__work__checkbox" />
              <label className="mj__work__label">{item.inputText}</label>
            </form>
            <button type="button" className="mj__work__delete" onClick={()=>handleDelete(item.id)}>
              <span className="mj__title__hidden">삭제</span>
              <FaTrashAlt />
            </button>
          </li>
        ))}
      </ul>
    </List>
  )
}

const List = styled.div`
  .mj {
    &__work {
      &__form {
        ${theme.flexStart};
        align-items: center;
      }

      &__checkbox {
        width: 18px;
        height: 18px;
        margin: 0 10px 0 0;
        border: 1px solid ${theme.color.ec};
        border-radius: 2px;
        appearance: none;
        cursor: pointer;

        &:checked {
          border-color: transparent;
          background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
          background-size: 100% 100%;
          background-position: 50%;
          background-repeat: no-repeat;
          background-color: #2cb48e;

          + .mj__work__label {
            color: #ccc;
            text-decoration: line-through;
          }
        }
      }
    }
  }
`

export default ListTextType;