import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Main() {
	return (
		<MainContainer>
			<h2 className="mj__text__hidden">main</h2>

			{/* 캘린더 */}
			<Link to="/todos">
				<button type="button">CALENDAR</button>
			</Link>

			{/* 오늘 업무 리스트(간단한 한줄 리스트) */}
			<Link to="/todos">
				<button type="button">WORK</button>
			</Link>

			{/* 이슈 & 에피소드 등(슬라이드형 리스트) */}
			<Link to="/todos">
				<button type="button">ISSUE</button>
			</Link>
		</MainContainer>
	);
};

export default Main;

const MainContainer = styled.section`
	.mj__text__hidden {
		font-size: 0;
	}
`

