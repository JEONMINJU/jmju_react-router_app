import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../../util/theme";

export default function Dockbar() {
	return (
		<DockbarSection>
			<DockbarLink href="/">
				<span>홈</span>
			</DockbarLink>
			<DockbarLink href="/calendar">
				<span>달력</span>
			</DockbarLink>
			<DockbarLink href="/work">
				<span>오늘</span>
			</DockbarLink>
			<DockbarLink href="/todos">
				<span>일기</span>
			</DockbarLink>
			<DockbarLink>
				<span>나의 정보</span>
			</DockbarLink>
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
	justify-content: space-between;
	padding: 20px;
	background: ${theme.bg.f5};
`

const DockbarLink = styled(Link)`
	font-size: 15px;
`

// 물마시기, 약먹기 알람....