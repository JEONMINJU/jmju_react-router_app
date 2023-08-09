import React from "react";
import styled from "styled-components";
import theme from "../../util/theme";
import { 
	BsHouseDoorFill, 
	BsFillPersonFill,
	BsCalendarCheck,
	BsPencilSquare,
	BsPlusSquare,
} from "react-icons/bs"; 

export default function Dockbar() {
	return (
		<DockbarSection>
			<a href="/" className="mj__link">
				<BsHouseDoorFill size="24"/>
				<span>홈</span>
			</a>
			<a href="/calendar" className="mj__link">
				<span>달력</span>
				<BsCalendarCheck size="24"/>
			</a>
			<a href="/work" className="mj__link">
				<BsPencilSquare size="24"/>
				<span>오늘</span>
			</a>
			<a href="/todos" className="mj__link">
				<BsPlusSquare size="24"/>
				<span>일기</span>
			</a>
			<a href="/" className="mj__link">
				<BsFillPersonFill size="24"/>
				<span>나의 정보</span>
			</a>
		</DockbarSection>
	)
};

const DockbarSection = styled.section`
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	z-index: 11;
	${theme.flexCenter};
	justify-content: space-around;
	padding: 20px 0;
	background: ${theme.bg.f5};

	.mj {
		&__link {
			padding: 4px;
			color: ${theme.color.black};
			text-decoration: none;

			span {
				font-size: 0;
			}
		}
	}
`

// 물마시기, 약먹기 알람....