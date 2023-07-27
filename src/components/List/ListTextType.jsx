import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function ListTextType({lists}) {
  return (
    <ul className="mj__work__box">
      {lists.map((item) => (
        <li className="mj__work__list" key={item.id}>
          <form className="mj__work__form">
            <input type="checkbox" className="mj__work__checkbox" />
          </form>
          {item.inputText}
          <button type="button" className="mj__work__delete" >
            <span className="mj__title__hidden">삭제</span>
            <FaTrashAlt />
          </button>
        </li>
      ))}
    </ul>
  )
}