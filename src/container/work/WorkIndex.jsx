import React, { useState } from "react";
import ListTextType from "../../components/List/ListTextType";
import AddList from '../../components/Add/AddList';
import styled from "styled-components";
import CommonHeader from "../../components/Header/CommonHeader";

// 업무리스트 페이지
function WorkIndex() {
	const [lists, setLists] = useState([]); // 상태관리

	const handleAdd = (newList) => {
		console.log(newList, )
		setLists([...lists, newList])
	};

	return (
		<>
			<CommonHeader />
			<WorkIndexSection>
				<h2 className="mj__work__title">오늘의 업무 리스트를 작성하세요.</h2>

				{/* 리스트 컴포넌트 */}
				{/* <ListTextType setLists={setLists} /> */}
				<ul>
					{lists.map((item) => (
						<li key={item.id}>
							{item.inputText}
						</li>
					))}
				</ul>

				<AddList onAdd={handleAdd} />
			</WorkIndexSection>
		</>
	)
}

const WorkIndexSection = styled.section`
	padding: 20px;
`

export default WorkIndex;