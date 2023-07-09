import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Main() {
	return (
		<MainContainer>
			<h2 className="mj__text__hidden">main</h2>

			<Link to="/todos">
				<button type="button">todo 작성페이지 이동</button>
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

