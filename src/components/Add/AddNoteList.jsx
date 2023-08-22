import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { setLocalStorage, getLocalStorage } from "../../util/util";
import theme from '../../util/theme';
import dayjs from 'dayjs';

export default function AddTodo({ onAdd }) {
  const date = dayjs(new Date()).format('YYYY/MM/DD HH:mm:ss');

  // onAdd 를 props로 받고
  const [text, setText] = useState(""); // 초기 빈값
  const handleChange = (e) => setText(e.target.value); // event가 발생하면 setText에 있는 타켓의 value로 설정할것
  
  const handleAdd = () => {
    if (text.trim().length === 0) return;

    onAdd({ id: uuidv4(), text: text, date, status: "active" });

    const storageTodos = getLocalStorage("todo") || [];

    setLocalStorage("todo", [
      ...storageTodos,
      { id: uuidv4(), text: text, date, status: "active" },
    ]);

    setText('');
  };

	const onSubmit = (e) => {
		e.preventDefault();// page refesh 막기
		handleAdd();
	};

	const onClick = (e) => {
		e.preventDefault();
		handleAdd();
	};

  return (
    <NoteListForm>
      <h2 className="mj__title__hidden">이슈, 메모 입력 폼</h2>

      <div className="mj__noteList__wrapper">
        <form className="mj__noteList__form" onSubmit={onSubmit}>
          <input 
            className="mj__noteList__input"
            type="text" 
            placeholder="텍스트를 입력해주세요."
            value={text}
            onChange={handleChange}
          />
        </form>

        <button type="button" className="mj__noteList__button sizeS" onClick={onClick}>
          추가
        </button>
      </div>
    </NoteListForm>
  );
}

// style
const NoteListForm = styled.section`
  .mj {
		&__title {
			&__hidden {
				${theme.hidden};
			}
		}

    &__noteList {
      &__wrapper {
				${theme.flexCenter};
				justify-content: space-between;
				position: fixed;
				left: 50%;
				right: 0;
				bottom: 57px;
				z-index: 1;
        transform: translateX(-50%);
				width: 100%;
				padding: 20px;
				background: ${theme.bg.f5};
			}

      &__form {
				width: 88%;
			}

			&__input {
				width: 100%;
				height: 40px;
				padding: 0 20px;
				border: 1px solid ${theme.color.ec};
				border-radius: 8px;
			}

      &__button {
        flex: 0 0 44px;
				margin-left: 10px;
				background: ${theme.color.white};
      }
    }
  }
`