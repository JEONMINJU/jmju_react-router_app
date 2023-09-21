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

  const [imageSrc, setImageSrc] = useState(null);

  // 파일업로드
  const onFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader(); // 선언한 파일로더로
    reader.readAsDataURL(file); //파일 객체 읽어오기

    return new Promise((resolve) => { 
      reader.onload = () => {	
          setImageSrc(reader.result || null); // 파일의 컨텐츠
          resolve();
      };
    });
  };

  const handleAdd = () => {
    if (text.trim().length === 0) return;

    onAdd({ 
      id: uuidv4(), 
      text: text, 
      date, 
      status: "active",
      file: imageSrc,
    });

    const storageTodos = getLocalStorage("todo") || [];

    setLocalStorage("todo", [
      ...storageTodos,
      { id: uuidv4(), text: text, date, status: "active", file: imageSrc },
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
        <div className='mj__noteList__inner'>
          <form className="mj__noteList__form" onSubmit={onSubmit}>
            <input 
              className="mj__noteList__input"
              type="text" 
              placeholder="텍스트를 입력해주세요."
              value={text}
              onChange={handleChange}
            />
          </form>

          {/* 파일업로드 */}
          <input 
            type="file"
            onChange={e => onFileUpload(e)}
            className="mj__noteList__fileUpload"
          ></input>

          {/* 파일업로드 이미지 */}
          {/* <img width={'100%'} src={imageSrc}/> */}
        </div>

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
        align-items: flex-start;
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

      &__inner {
        display: flex;
        flex-direction: column;
        width: 100%;
      }

      &__form {
				width: 100%;
			}

			&__input {
				width: 100%;
				height: 40px;
				padding: 0 20px;
				border: 1px solid ${theme.color.ec};
				border-radius: 8px;
			}

      &__fileUpload {
        margin-top: 14px;
      }

      &__button {
        flex: 0 0 44px;
				margin-left: 20px;
				background: ${theme.color.white};
      }
    }
  }
`