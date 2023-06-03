import React , { useState } from 'react';

export default function AppMentors() {
	// 한번 만들어진 상태는 불변성을 유지해야한다?
	// 변경이 발생한다면 배열, 객체를 전체적으로 변경해줘야한다.
	const [person, setPerson]	= useState({
		name: 'jmj',
		title: 'dev',
		mentors: [
			{
				name: 'bab',
				title: 'devvv',
			},
			{
				name: 'bab222',
				title: 'devvv222',
			}
		],
	});

	return (
		<div>
			<span>{person.name}의 멘토는:</span>

			<ul>
				{person.mentors.map((mentor, index) => (
					// 배열의 인덱스 사용ㅇ 비추
				<li key={index}>
					{mentor.name} ({mentor.title})
				</li>
				))}
			</ul>

			<button onClick={() => {
				const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
				const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);

				setPerson(person => ({...person, mentors: person.mentors.map((mentor) => {
						if(mentor.name === prev) {
							return {...mentor, name: current};
						}
						return mentor;
					}),
					}));
				}}>
				멘토의 이름 바꾸기
			</button>

			<button onClick={() => {
				const name = prompt(`누구삭제 ? 하고 싶은가요?`);

				// 입력받지 않은 것들만 새롭게 반환
				setPerson(person => ({...person, mentors: person.mentors.filter((mentor) =>
						mentor.name !== name
					),
					}));
				}}>
				멘토삭제
			</button>

			<button onClick={() => {
				const name = prompt(`멘토의 이름은??`);
				const title = prompt(`멘토의 직함은 ?`);

				// 입력받지 않은 것들만 새롭게 반환
				setPerson(person => ({
					...person, 
					mentors: [{name, title}, ...person.mentors]
					}));
				}}>
				멘토 add
			</button>

			{/* 추후 소스 정리 필요 , 초깃값 하단으로 보내고 , 클릭 이베트 상단으로 모으기 */}
		</div>
	)
}
