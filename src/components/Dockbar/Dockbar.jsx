import React from "react";
import styled from "styled-components";
import theme from "../../util/theme";
import { Link } from "react-router-dom";
import { 
	BsHouseDoorFill, 
	BsFillPersonFill,
	BsCalendarCheck,
	BsPencilSquare,
	BsPlusSquare,
} from "react-icons/bs"; 

const dockbarRouter = [
	{
		id: '00',
		title: '홈',
		path: '/',
		icon: <BsHouseDoorFill size="24"/>,
	},
	{
		id: '01',
		title: '캘린더',
		path: '/calendar',
		icon: <BsCalendarCheck size="24"/>,
	},
	{
		id: '02',
		title: '업무 리스트',
		path: '/work',
		icon: <BsPencilSquare size="24"/>,
	},
	{
		id: '03',
		title: '이슈 & 에피소드',
		path: '/note',
		icon: <BsPlusSquare size="24"/>,
	},
	{
		id: '04',
		title: '정보',
		path: '/info', // 추후 추가
		icon: <BsFillPersonFill size="24"/>,
	},
];

export default function Dockbar() {
	const currentPath = window.location.pathname;
	
	return (
		<DockbarSection>
			{dockbarRouter.map((menu) => (
				<Link 
					to={menu.path} 
					key={menu.id} 
					className={
						currentPath === menu.path
						? 'mj__link active'
						: 'mj__link'
					}
				>
					{menu.icon}
				</Link>
			) )}
		</DockbarSection>
	)
};

const DockbarSection = styled.section`
	position: fixed;
	left: 50%;
	bottom: 0;
	width: 100%;
	z-index: 11;
	transform: translateX(-50%);
	${theme.flexAround};
	padding: 20px 0;
	background: ${theme.bg.f5};

	.mj {
		&__link {
			padding: 4px;
			color: ${theme.color.af};
			text-decoration: none;

			&.active {
				color: ${theme.color.black};
			}

			span {
				font-size: 0;
			}
		}
	}
`

// 물마시기, 약먹기 알람....