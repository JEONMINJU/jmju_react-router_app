import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import theme from "../../util/theme";

export default function AddList({ onAdd }) {
	const [inputText, setInputText] = useState('');

	const onChange = (e) => {setInputText(e.target.value);}

	const handleAddList = () => {
		if (inputText === '') {
			alert("텍스트를 입력해주세요.");

			return false;
		}

		onAdd({id: uuidv4(), inputText: inputText, status: 'active'});

		setInputText('');
	}

	const onClick = (e) => {
		e.preventDefault();
		
		handleAddList();
	}

	const onSubmit = (e) => {
		e.preventDefault();

		handleAddList();
	}

	return (
		<AddListForm>
			<h2 className="mj__title__hidden">업무리스트 입력 폼</h2>
			
			{/* form */}
			<form className="mj__addList__form" onSubmit={onSubmit}>
			<input 
				className="mj__addList__input"
				type="text" 
				placeholder="오늘의 업무를 입력하세요."
				value={inputText} 
				onChange={onChange} 
			/>
			</form>
			<button className="mj__addList__button" type="button" onClick={onClick}>추가</button>
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
			&__form {
			}

			&__input {
				width: 100%;
			}

			&__button {

			}
		}
	}

`