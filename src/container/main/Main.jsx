import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../../util/theme";

function Main() {
	return (
		<MainContainer>
			<h2 className="mj__title__hidden">jmju main</h2>

			<Link to="/todos">
				<button type="button">todo 작성페이지 이동</button>
			</Link>
		</MainContainer>
	);
};

export default Main;

const MainContainer = styled.section`
	.mj {
			&__title {
				&__hidden {
					${theme.hidden}
				}
			}
	}
`;


