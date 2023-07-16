import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddList({ onAdd }) {
	const [inputText, setInputText] = useState('');

	const onChange = (e) => {setInputText(e.target.value);}

	const onSubmit = (e) => {
		e.preventDefault();

		onAdd({id: uuidv4(), inputText: inputText, status: 'active'});

		setInputText('');
	}

	return (
		<div>
			<form onSubmit={onSubmit}>
			<input 
				type="text" 
				placeholder="오늘의 업무를 입력하세요."
				value={inputText} 
				onChange={onChange} 
			/>
			</form>
			<button type="button">추가</button>
		</div>
	)
};