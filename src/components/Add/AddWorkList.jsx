import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import theme from "../../util/theme";
import { getLocalStorage, setLocalStorage } from "../../util/util";

export default function AddList({ onAdd }) {
	const [inputText, setInputText] = useState('');

	const onChange = (e) => {setInputText(e.target.value);}

	const handleAdd = () => {
		if (inputText === '') {
			alert("텍스트를 입력해주세요.");
			return false;
		}
		
		onAdd({id: uuidv4(), inputText: inputText, status: 'active'});
		const storageTodos = getLocalStorage("workList") || [];

    setLocalStorage("workList", [
      ...storageTodos,
      { id: uuidv4(), inputText: inputText, status: "active" },
    ]);

		setInputText('');
	};

	const onSubmit = (e) => {
		e.preventDefault();
		handleAdd();
	};

	const onClick = (e) => {
		e.preventDefault();
		handleAdd();
	};

	return (
		<AddListForm>
			<h2 className="mj__title__hidden">업무리스트 입력 폼</h2>

			<div className="mj__addList__wrapper">
				<form className="mj__addList__form" onSubmit={onSubmit}>
				<input 
					className="mj__addList__input"
					type="text" 
					placeholder="오늘의 업무를 입력하세요."
					value={inputText} 
					onChange={onChange} 
				/>
				</form>

				<button type="button" className="mj__addList__button sizeS" onClick={onClick}>
					추가
				</button>
			</div>
		</AddListForm>
	)
};

const AddListForm = styled.section`
	${theme.preventDefault};

	.mj {
		&__title {
			&__hidden {
				${theme.hidden};
			}
		}

		&__addList {
			&__wrapper {
				${theme.flexCenter};
				justify-content: space-between;
				position: fixed;
				left: 0;
				right: 0;
				bottom: 57px;
				z-index: 1;
				max-width: 100%;
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