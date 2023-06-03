import React, { useState } from "react";

export default function AppMentor() {
	const [person, setPerson] = useState({
		name: '전민주',
		title: '전민주주주니어',
		// 중첩객체
		mentor: {
			name: '밥',
			title: '시니어개발자',
		},
	});
	
	return (
		<div>
			<span>{person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})</span>

			<button onClick={() => {
				const title = prompt('what is your mentor title????');
				setPerson((person) => ({ 
					...person, 
					mentor: { ...person.mentor, title : title}
				}));
			}}>
				멘토 타이틀 바꾸기
				</button>

				<button onClick={() => {
					const nameChange = prompt('change name');

					setPerson((person) => ({
						...person,
						mentor: {...person.mentor, name : nameChange }
					}));
				}}>
					버튼 클릭시 이름 바꾸기
				</button>
		</div>
	)
}